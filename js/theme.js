// theme.js — Light / dark toggle with localStorage persistence

import { getState, setState } from './state.js';

export function initTheme() {
  applyTheme(getState().theme);
}

export function toggleTheme() {
  const next = getState().theme === 'dark' ? 'light' : 'dark';
  setState({ theme: next });
  applyTheme(next);
  localStorage.setItem('jam-theme', next);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀' : '☾';
}
