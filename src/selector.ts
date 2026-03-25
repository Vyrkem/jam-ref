// selector.ts — Mode picker, key grid, song list, go button
// Note: all innerHTML content comes from hardcoded music data constants,
// never from user input — no XSS risk.

import { MODES, ROOTS } from './modes';
import { SONGS } from './songs';
import { getState, setState } from './state';

export function renderModeSelector(): void {
  const container = document.getElementById('mode-grid')!;
  const { modeId } = getState();

  container.innerHTML = MODES.map(m =>
    `<button class="mode-btn${m.id === modeId ? ' active' : ''}"
            data-mode="${m.id}"
            ${m.id === modeId ? `style="border-color:${m.color};color:${m.color};background:${m.color}12"` : ''}>
      ${m.name}
    </button>`
  ).join('');

  container.querySelectorAll<HTMLButtonElement>('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setState({ modeId: btn.dataset.mode!, root: null });
      renderAll();
    });
  });
}

export function renderModeDescription(): void {
  const { modeId } = getState();
  const mode = MODES.find(m => m.id === modeId)!;
  const el = document.getElementById('mode-desc')!;

  let html = `<span style="color:${mode.color}">${mode.desc}</span>`;
  if (mode.note) {
    html += `<br><span class="char-note">Note caractéristique : <strong style="color:${mode.color}">${mode.note}</strong></span>`;
  }
  el.innerHTML = html;
}

export function renderKeyGrid(): void {
  const container = document.getElementById('key-grid')!;
  const { root: activeRoot, modeId } = getState();
  const mode = MODES.find(m => m.id === modeId)!;

  container.innerHTML = ROOTS.map(r =>
    `<button class="key-btn${r === activeRoot ? ' active' : ''}"
            data-root="${r}"
            ${r === activeRoot ? `style="border-color:${mode.color};color:${mode.color};background:${mode.color}0d"` : ''}>
      ${r}
    </button>`
  ).join('');

  container.querySelectorAll<HTMLButtonElement>('.key-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setState({ root: btn.dataset.root! });
      renderAll();
    });
  });
}

export function renderGoButton(): void {
  const btn = document.getElementById('go-btn') as HTMLButtonElement;
  const { root, modeId } = getState();
  const mode = MODES.find(m => m.id === modeId)!;

  btn.disabled = !root;
  if (root) {
    btn.style.background = mode.color;
    btn.style.color = '#000';
  } else {
    btn.style.background = '';
    btn.style.color = '';
  }
}

export function renderSongs(): void {
  const container = document.getElementById('songs-list')!;
  const { root, modeId } = getState();

  if (!root) {
    container.innerHTML = '<div class="no-songs">Sélectionnez une tonalité pour voir les exemples.</div>';
    return;
  }

  const modeSongs = (SONGS[modeId] || {})[root] || [];
  if (modeSongs.length === 0) {
    container.innerHTML = "<div class=\"no-songs\">Pas d'exemples pour cette combinaison — à compléter !</div>";
    return;
  }

  container.innerHTML = modeSongs.map(s => `
    <div class="song-item">
      <span class="song-title">${s.title}</span>
      <span class="song-prog">${s.prog}</span>
      <a class="song-link" href="${s.url}" target="_blank" rel="noopener">▶ YouTube</a>
    </div>
  `).join('');
}

/** Re-render the entire selector screen */
export function renderAll(): void {
  renderModeSelector();
  renderModeDescription();
  renderKeyGrid();
  renderGoButton();
  renderSongs();
  const mode = MODES.find(m => m.id === getState().modeId)!;
  document.documentElement.style.setProperty('--accent', mode.color);
}
