// state.js — Minimal reactive state

let _state = {
  modeId: 'ionian',
  root: null,
  theme: localStorage.getItem('jam-theme') || 'dark',
};

const _listeners = [];

export function getState() {
  return _state;
}

export function setState(patch) {
  _state = { ..._state, ...patch };
  _listeners.forEach(fn => fn(_state));
}

export function subscribe(fn) {
  _listeners.push(fn);
}
