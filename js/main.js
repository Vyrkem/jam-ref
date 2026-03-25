// main.js — Entry point, wires modules together

import { initTheme, toggleTheme } from './theme.js';
import { renderAll } from './selector.js';
import { showFullscreen, hideFullscreen } from './fullscreen.js';

// Theme
initTheme();
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Fullscreen
document.getElementById('go-btn').addEventListener('click', showFullscreen);
document.getElementById('back-btn').addEventListener('click', hideFullscreen);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') hideFullscreen();
});

// Initial render
renderAll();
