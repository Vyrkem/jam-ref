import type { Mode, Quality, KeyData } from './types';

const LETTERS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'] as const;
const LETTER_SEMITONES = [0, 2, 4, 5, 7, 9, 11] as const;

interface ParsedNote {
  letter: string;
  letterIndex: number;
  semitone: number;
}

/** Parse "F♯" → { letter:'F', letterIndex:3, semitone:6 } */
export function parseNote(name: string): ParsedNote {
  const letter = name[0];
  const letterIndex = LETTERS.indexOf(letter as typeof LETTERS[number]);
  const base = LETTER_SEMITONES[letterIndex];
  let acc = 0;
  for (let i = 1; i < name.length; i++) {
    if (name[i] === '♯' || name[i] === '#') acc++;
    if (name[i] === '♭' || name[i] === 'b') acc--;
  }
  return { letter, letterIndex, semitone: ((base + acc) % 12 + 12) % 12 };
}

/**
 * Build correctly-spelled scale notes for a root + interval pattern.
 * Each degree uses the next letter name — no enharmonic collisions.
 */
export function buildScale(rootName: string, intervals: number[]): string[] {
  const root = parseNote(rootName);
  const notes: string[] = [];

  for (let i = 0; i < intervals.length; i++) {
    const li = (root.letterIndex + i) % 7;
    const natural = LETTER_SEMITONES[li];
    const target = (root.semitone + intervals[i]) % 12;

    let acc = target - natural;
    if (acc > 6) acc -= 12;
    if (acc < -6) acc += 12;

    let suffix = '';
    if (acc === 1) suffix = '♯';
    else if (acc === -1) suffix = '♭';
    else if (acc === 2) suffix = '𝄪';
    else if (acc === -2) suffix = '♭♭';

    notes.push(LETTERS[li] + suffix);
  }
  return notes;
}

/** Append quality suffix to a note name */
export function chordName(note: string, quality: Quality): string {
  if (quality === 'mineur') return note + 'm';
  if (quality === 'diminué') return note + 'dim';
  if (quality === 'augmenté') return note + 'aug';
  return note;
}

/** Build complete key data for rendering */
export function buildKeyData(rootName: string, mode: Mode): KeyData {
  const scale = buildScale(rootName, mode.intervals);
  const chords = scale.map((note, i) => chordName(note, mode.qualities[i]));
  const penta = new Array(7).fill(0) as number[];
  for (const idx of mode.penta) penta[idx] = 1;
  return { scale, chords, qualities: mode.qualities, romans: mode.romans, penta };
}
