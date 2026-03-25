# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Modular web app — a music theory reference tool for bass improvisation ("Référence Impro"). UI is in French. Designed to be hosted on a server and accessed via tunnel.

Users select one of 7 modes (Ionian through Locrian), a root key, then view a fullscreen chord table showing scale degrees, chord names, qualities, and pentatonic membership. Song examples are shown per mode+key.

## Architecture

ES module structure, no build step, no dependencies:

```
index.html              ← Shell with #selector-screen and #fullscreen views
css/style.css           ← All styles, light/dark via [data-theme] + CSS variables
js/
  main.js               ← Entry point, event wiring
  state.js              ← Reactive state (modeId, root, theme) + subscribe()
  theme.js              ← Light/dark toggle, localStorage persistence
  theory.js             ← Scale/chord computation engine (from root + intervals)
  modes.js              ← 7 mode definitions (intervals, qualities, romans, penta, color)
  songs.js              ← Song examples indexed by mode id → root name
  selector.js           ← Selector screen rendering (modes, keys, songs, go button)
  fullscreen.js         ← Fullscreen chord table rendering
```

**Data flow**: `state.js` holds `{ modeId, root, theme }`. UI modules read via `getState()`, write via `setState()`. `renderAll()` in `selector.js` re-renders the full selector screen. `theory.js` computes chords programmatically — no hardcoded key data.

## Development

Serve from any static HTTP server (ES modules require it):
```sh
python3 -m http.server 8000
# or
npx serve .
```

Legacy `jam-reference.html` is the original single-file version (kept for reference).

## Adding a new mode

Add an entry to `MODES` array in `js/modes.js` with: `id`, `name`, `intervals` (semitones from root), `qualities` (7 chord types), `romans`, `penta` (pentatonic degree indices), `color`, `desc`, `note`.

## Key conventions

- Chord data uses Unicode music symbols (♯, ♭, 𝄪) not ASCII (#, b)
- `theory.js` computes scale spelling via letter-name math — each degree uses the next letter, accidentals computed from semitone difference
- Each mode has a distinct accent `color` (hex) set as `--accent` CSS variable
- Theme: `data-theme="dark"|"light"` on `<html>`, persisted in `localStorage` key `jam-theme`
- All rendering uses innerHTML from hardcoded constants (no user input), event listeners reattached on each render
