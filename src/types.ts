/** A musical mode definition (Ionian, Dorian, etc.) */
export interface Mode {
  id: string;
  name: string;
  /** Semitone intervals from root, e.g. [0, 2, 4, 5, 7, 9, 11] for Ionian */
  intervals: number[];
  /** Chord quality at each degree */
  qualities: Quality[];
  /** Roman numeral labels */
  romans: string[];
  /** Scale degree indices that belong to the pentatonic (e.g. [0,1,2,4,5]) */
  penta: number[];
  /** Accent hex color */
  color: string;
  /** Short French description */
  desc: string;
  /** Characteristic note (null for Ionian/Aeolian) */
  note: string | null;
}

export type Quality = 'majeur' | 'mineur' | 'diminué' | 'augmenté';

/** A song example */
export interface Song {
  title: string;
  prog: string;
  url: string;
}

/** Songs indexed by mode id → root name → array */
export type SongMap = Record<string, Record<string, Song[]>>;

/** Computed key data ready for rendering */
export interface KeyData {
  scale: string[];
  chords: string[];
  qualities: Quality[];
  romans: string[];
  penta: number[];
}

/** App state */
export interface AppState {
  modeId: string;
  root: string | null;
  theme: 'dark' | 'light';
}
