import { getState, setState } from './state';

export function initTheme(): void {
  applyTheme(getState().theme);
}

export function toggleTheme(): void {
  const next = getState().theme === 'dark' ? 'light' : 'dark';
  setState({ theme: next });
  applyTheme(next);
  localStorage.setItem('jam-theme', next);
}

function applyTheme(theme: 'dark' | 'light'): void {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀' : '☾';
}
