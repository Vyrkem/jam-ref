#!/usr/bin/env bash
# deploy-lxc.sh — Create and configure an Alpine LXC container on Proxmox
# to serve jam-ref as a private static site.
#
# Usage (run on the Proxmox host):
#   chmod +x deploy-lxc.sh
#   ./deploy-lxc.sh
#
# Prerequisites:
#   - pveam update && pveam download local alpine-3.21-default_20250108_amd64.tar.xz
#   - Adjust CTID, IP, GATEWAY, BRIDGE, STORAGE below to match your setup.

set -euo pipefail

# ── Configuration ─────────────────────────────
CTID=200                          # Container ID (pick an unused one)
HOSTNAME="jam-ref"
STORAGE="local-lvm"               # Proxmox storage for rootfs
TEMPLATE="local:vztmpl/alpine-3.21-default_20250108_amd64.tar.xz"
MEMORY=128                        # MB — plenty for static files
SWAP=0
DISK="1"                          # GB
CORES=1
BRIDGE="vmbr0"
IP="dhcp"                         # or "192.168.1.50/24" for static
GATEWAY=""                        # set if using static IP, e.g. "192.168.1.1"
SITE_PORT=8080                    # port nginx listens on
# ──────────────────────────────────────────────

# Network config
if [ "$IP" = "dhcp" ]; then
  NET_CONF="name=eth0,bridge=${BRIDGE},ip=dhcp"
else
  NET_CONF="name=eth0,bridge=${BRIDGE},ip=${IP},gw=${GATEWAY}"
fi

echo "==> Creating LXC container ${CTID} (${HOSTNAME})..."
pct create "$CTID" "$TEMPLATE" \
  --hostname "$HOSTNAME" \
  --storage "$STORAGE" \
  --rootfs "${STORAGE}:${DISK}" \
  --memory "$MEMORY" \
  --swap "$SWAP" \
  --cores "$CORES" \
  --net0 "$NET_CONF" \
  --unprivileged 1 \
  --start 0

echo "==> Starting container..."
pct start "$CTID"
sleep 3

echo "==> Installing nginx..."
pct exec "$CTID" -- sh -c "apk update && apk add --no-cache nginx"

echo "==> Creating site directory..."
pct exec "$CTID" -- mkdir -p /var/www/jam-ref

echo "==> Writing nginx config..."
pct exec "$CTID" -- sh -c "cat > /etc/nginx/http.d/jam-ref.conf << 'NGINX'
server {
    listen ${SITE_PORT} default_server;
    server_name _;
    root /var/www/jam-ref;
    index index.html;

    # Block search engine indexing
    add_header X-Robots-Tag \"noindex, nofollow, nosnippet\" always;

    # No server version leak
    server_tokens off;

    # Cache static assets
    location ~* \.(css|js|woff2?|ttf|ico|png|jpg|svg)$ {
        expires 7d;
        add_header Cache-Control \"public, immutable\";
        add_header X-Robots-Tag \"noindex, nofollow, nosnippet\" always;
    }

    location / {
        try_files \$uri \$uri/ =404;
    }
}
NGINX"

# Remove default site if present
pct exec "$CTID" -- sh -c "rm -f /etc/nginx/http.d/default.conf"

echo "==> Enabling nginx on boot..."
pct exec "$CTID" -- rc-update add nginx default

echo "==> Starting nginx..."
pct exec "$CTID" -- rc-service nginx start

echo ""
echo "==> Container ${CTID} ready!"
echo ""
echo "  Next steps:"
echo "  1. Copy your site files into the container:"
echo ""
echo "     pct push ${CTID} index.html /var/www/jam-ref/index.html"
echo "     pct push ${CTID} robots.txt /var/www/jam-ref/robots.txt"
echo "     # For directories, tar + extract:"
echo "     tar czf /tmp/jam-ref.tar.gz -C $(dirname "$0") css js index.html robots.txt"
echo "     pct push ${CTID} /tmp/jam-ref.tar.gz /tmp/jam-ref.tar.gz"
echo "     pct exec ${CTID} -- tar xzf /tmp/jam-ref.tar.gz -C /var/www/jam-ref"
echo ""
echo "  2. Find the container IP:"
echo "     pct exec ${CTID} -- ip a show eth0"
echo ""
echo "  3. Access at: http://<container-ip>:${SITE_PORT}"
echo ""
