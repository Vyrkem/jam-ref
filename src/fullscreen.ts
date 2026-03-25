// fullscreen.ts — Fullscreen chord table view
// Note: all innerHTML content comes from hardcoded music data constants,
// never from user input — no XSS risk.

import { MODES } from './modes';
import { getState } from './state';
import { buildKeyData } from './theory';

export function showFullscreen(): void {
  const { root, modeId } = getState();
  if (!root) return;

  const mode = MODES.find(m => m.id === modeId)!;
  const data = buildKeyData(root, mode);
  const color = mode.color;

  // Title
  const title = document.getElementById('fs-title')!;
  title.textContent = `${root} ${mode.name}`;
  title.style.color = color;

  // Table body
  document.getElementById('fs-tbody')!.innerHTML = data.chords.map((chord, i) => {
    const isDim = data.qualities[i] === 'diminué';
    const hasPenta = data.penta[i] === 1;
    return `<tr class="${isDim ? 'dim' : ''}">
      <td class="degree">${data.romans[i]}</td>
      <td class="chord" style="color:${isDim ? '' : color}">${chord}</td>
      <td class="quality">${data.qualities[i]}</td>
      <td class="penta ${hasPenta ? 'yes' : 'no'}" ${hasPenta ? `style="color:${color}"` : ''}>
        ${hasPenta ? '●' : '—'}
      </td>
    </tr>`;
  }).join('');

  document.getElementById('fullscreen')!.classList.add('visible');
}

export function hideFullscreen(): void {
  document.getElementById('fullscreen')!.classList.remove('visible');
}
