import type { AppState } from './types';

type Listener = (state: AppState) => void;

let _state: AppState = {
  modeId: 'ionian',
  root: null,
  theme: (localStorage.getItem('jam-theme') as AppState['theme']) || 'dark',
};

const _listeners: Listener[] = [];

export function getState(): AppState {
  return _state;
}

export function setState(patch: Partial<AppState>): void {
  _state = { ..._state, ...patch };
  _listeners.forEach(fn => fn(_state));
}

export function subscribe(fn: Listener): void {
  _listeners.push(fn);
}
