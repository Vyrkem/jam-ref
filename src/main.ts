// main.ts — Entry point, wires modules together

import { initTheme, toggleTheme } from './theme';
import { renderAll } from './selector';
import { showFullscreen, hideFullscreen } from './fullscreen';

// Theme
initTheme();
document.getElementById('theme-toggle')!.addEventListener('click', toggleTheme);

// Fullscreen
document.getElementById('go-btn')!.addEventListener('click', showFullscreen);
document.getElementById('back-btn')!.addEventListener('click', hideFullscreen);
document.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.key === 'Escape') hideFullscreen();
});

// Initial render
renderAll();
