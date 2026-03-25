// modes.js — The 7 modes of the major scale + harmonic/melodic minor modes + root definitions

export const MODES = [
  {
    id: 'ionian',
    name: 'Ionien (Majeur)',
    intervals: [0, 2, 4, 5, 7, 9, 11],
    qualities: ['majeur', 'mineur', 'mineur', 'majeur', 'majeur', 'mineur', 'diminué'],
    romans: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII°'],
    penta: [0, 1, 2, 4, 5],       // major pentatonic degrees
    color: '#f4a261',              // orange
    desc: 'Le mode majeur classique. Joyeux, résolu.',
    note: null,
  },
  {
    id: 'dorian',
    name: 'Dorien',
    intervals: [0, 2, 3, 5, 7, 9, 10],
    qualities: ['mineur', 'mineur', 'majeur', 'majeur', 'mineur', 'diminué', 'majeur'],
    romans: ['I', 'II', 'III', 'IV', 'V', 'VI°', 'VII'],
    penta: [0, 2, 3, 4, 6],       // minor pentatonic degrees
    color: '#2ec4b6',              // teal
    desc: 'Mineur avec une sixte majeure. Jazzy, sophistiqué.',
    note: '♮6 — la sixte majeure',
  },
  {
    id: 'phrygian',
    name: 'Phrygien',
    intervals: [0, 1, 3, 5, 7, 8, 10],
    qualities: ['mineur', 'majeur', 'majeur', 'mineur', 'diminué', 'majeur', 'mineur'],
    romans: ['I', 'II', 'III', 'IV', 'V°', 'VI', 'VII'],
    penta: [0, 2, 3, 4, 6],
    color: '#e63946',              // red
    desc: 'Sombre, espagnol, flamenco.',
    note: '♭2 — la seconde mineure',
  },
  {
    id: 'lydian',
    name: 'Lydien',
    intervals: [0, 2, 4, 6, 7, 9, 11],
    qualities: ['majeur', 'majeur', 'mineur', 'diminué', 'majeur', 'mineur', 'mineur'],
    romans: ['I', 'II', 'III', 'IV°', 'V', 'VI', 'VII'],
    penta: [0, 1, 2, 4, 5],
    color: '#e9c46a',              // gold
    desc: 'Majeur avec quarte augmentée. Rêveur, aérien.',
    note: '♯4 — la quarte augmentée',
  },
  {
    id: 'mixolydian',
    name: 'Mixolydien',
    intervals: [0, 2, 4, 5, 7, 9, 10],
    qualities: ['majeur', 'mineur', 'diminué', 'majeur', 'mineur', 'mineur', 'majeur'],
    romans: ['I', 'II', 'III°', 'IV', 'V', 'VI', 'VII'],
    penta: [0, 1, 2, 4, 5],
    color: '#9b5de5',              // purple
    desc: 'Majeur avec septième mineure. Bluesy, dominant.',
    note: '♭7 — la septième mineure',
  },
  {
    id: 'aeolian',
    name: 'Éolien (Mineur)',
    intervals: [0, 2, 3, 5, 7, 8, 10],
    qualities: ['mineur', 'diminué', 'majeur', 'mineur', 'mineur', 'majeur', 'majeur'],
    romans: ['I', 'II°', 'III', 'IV', 'V', 'VI', 'VII'],
    penta: [0, 2, 3, 4, 6],
    color: '#7ec8e3',              // blue
    desc: 'Le mode mineur naturel. Mélancolique, introspectif.',
    note: null,
  },
  {
    id: 'locrian',
    name: 'Locrien',
    intervals: [0, 1, 3, 5, 6, 8, 10],
    qualities: ['diminué', 'majeur', 'mineur', 'mineur', 'majeur', 'majeur', 'mineur'],
    romans: ['I°', 'II', 'III', 'IV', 'V', 'VI', 'VII'],
    penta: [0, 2, 3, 4, 6],
    color: '#6c757d',              // gray
    desc: 'Diminué sur le I. Instable, tendu, rarement utilisé seul.',
    note: '♭5 — la quinte diminuée',
  },
  {
    id: 'harmonic-minor',
    name: 'Harmonique Mineur',
    intervals: [0, 2, 3, 5, 7, 8, 11],
    qualities: ['mineur', 'diminué', 'augmenté', 'mineur', 'majeur', 'majeur', 'diminué'],
    romans: ['I', 'II°', 'III+', 'IV', 'V', 'VI', 'VII°'],
    penta: [],                     // pas de penta classique
    color: '#d35d6e',              // dark rose
    desc: 'Mineur avec septième majeure. Dramatique, classique, oriental.',
    note: '♯7 — la septième majeure (en contexte mineur)',
  },
  {
    id: 'phrygian-dominant',
    name: 'Phrygien Dominant',
    intervals: [0, 1, 4, 5, 7, 8, 10],
    qualities: ['majeur', 'majeur', 'diminué', 'mineur', 'diminué', 'augmenté', 'mineur'],
    romans: ['I', 'II', 'III°', 'IV', 'V°', 'VI+', 'VII'],
    penta: [],                     // pas de penta classique
    color: '#e8a838',              // amber
    desc: 'Exotique, espagnol, moyen-oriental. Mode 5 de l\'harmonique mineur.',
    note: '3 + ♭2 — tierce majeure avec seconde mineure',
  },
  {
    id: 'melodic-minor',
    name: 'Mineur Mélodique',
    intervals: [0, 2, 3, 5, 7, 9, 11],
    qualities: ['mineur', 'mineur', 'augmenté', 'majeur', 'majeur', 'diminué', 'diminué'],
    romans: ['I', 'II', 'III+', 'IV', 'V', 'VI°', 'VII°'],
    penta: [],                     // pas de penta classique
    color: '#57cc99',              // emerald green
    desc: 'Mineur avec sixte et septième majeures. Lisse, jazz.',
    note: '♮6 + ♯7 — sixte et septième majeures en contexte mineur',
  },
];

/** 12 root notes using sharps */
export const ROOTS = [
  'C', 'C♯', 'D', 'D♯', 'E', 'F',
  'F♯', 'G', 'G♯', 'A', 'A♯', 'B',
];
