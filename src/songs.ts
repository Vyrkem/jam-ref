import type { SongMap } from './types';

const yt = (q: string): string => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;

export const SONGS: SongMap = {
  ionian: {
    'C': [
      { title: 'Let It Be – Beatles',              prog: 'I – V – VI – IV  (C – G – Am – F)',         url: yt('Let It Be Beatles') },
      { title: 'No Woman No Cry – Bob Marley',     prog: 'I – V – VI – IV  (C – G – Am – F)',         url: yt('No Woman No Cry Bob Marley') },
      { title: 'Higher Ground – Stevie Wonder',    prog: 'I vamp funk  (C)',                           url: yt('Higher Ground Stevie Wonder') },
    ],
    'G': [
      { title: 'Sweet Home Chicago – R. Johnson',  prog: 'I – IV – V  (G – C – D)',                   url: yt('Sweet Home Chicago Robert Johnson') },
      { title: "Knockin' on Heaven's Door – Dylan", prog: 'I – V – VI – IV  (G – D – Am – C)',        url: yt("Knockin' on Heaven's Door Bob Dylan") },
      { title: 'Thank You – Led Zeppelin',         prog: 'I – IV – V  (G – C – D)',                   url: yt('Thank You Led Zeppelin') },
    ],
    'D': [
      { title: 'Brown Eyed Girl – Van Morrison',   prog: 'I – IV – I – V  (D – G – D – A)',           url: yt('Brown Eyed Girl Van Morrison') },
      { title: 'Proud Mary – CCR',                 prog: 'I – VI – IV – V  (D – Bm – G – A)',         url: yt('Proud Mary Creedence Clearwater Revival') },
    ],
    'A': [
      { title: 'Johnny B. Goode – Chuck Berry',    prog: 'I – IV – V  (A – D – E)',                   url: yt('Johnny B. Goode Chuck Berry') },
      { title: 'Lay Down Sally – Eric Clapton',    prog: 'I – IV – V  (A – D – E)',                   url: yt('Lay Down Sally Eric Clapton') },
      { title: 'Get Up – James Brown',             prog: 'I vamp funk  (A)',                           url: yt('Get Up Offa That Thing James Brown') },
    ],
    'E': [
      { title: 'Whole Lotta Love – Led Zeppelin',  prog: 'I – IV  (E – A)',                           url: yt('Whole Lotta Love Led Zeppelin') },
      { title: 'Pride and Joy – SRV',              prog: 'I – IV – V  (E – A – B)',                   url: yt('Pride and Joy Stevie Ray Vaughan') },
      { title: 'Sex Machine – James Brown',        prog: 'I vamp funk  (E)',                           url: yt('Get Up Sex Machine James Brown') },
    ],
    'F': [
      { title: 'Happy – Pharrell Williams',        prog: 'I  (F)',                                    url: yt('Happy Pharrell Williams') },
      { title: 'I Gotta Feeling – Black Eyed Peas', prog: 'I – IV – V – IV  (F – A♯ – C – A♯)',      url: yt('I Gotta Feeling Black Eyed Peas') },
    ],
    'A♯': [
      { title: 'Hit the Road Jack – Ray Charles',  prog: 'I – VII – VI – V  (A♯ – G♯ – G – F)',      url: yt('Hit the Road Jack Ray Charles') },
      { title: 'Sir Duke – Stevie Wonder',         prog: 'I – IV – V  (A♯ – D♯ – F)',                 url: yt('Sir Duke Stevie Wonder') },
    ],
    'D♯': [
      { title: 'Superstition – Stevie Wonder',     prog: 'I vamp funk  (D♯m)',                        url: yt('Superstition Stevie Wonder') },
      { title: 'Play That Funky Music – Wild Cherry', prog: 'I – IV  (D♯ – G♯)',                      url: yt('Play That Funky Music Wild Cherry') },
    ],
    'G♯': [
      { title: "Isn't She Lovely – Stevie Wonder",  prog: 'I – IV – V  (G♯ – C♯ – D♯)',              url: yt("Isn't She Lovely Stevie Wonder") },
    ],
    'B': [
      { title: 'Good Times – Chic',                prog: 'I – V  (B – F♯)',                           url: yt('Good Times Chic') },
    ],
    'F♯': [
      { title: 'Chameleon – Herbie Hancock',       prog: 'I – IV funk  (F♯ – B)',                     url: yt('Chameleon Herbie Hancock') },
    ],
  },

  dorian: {
    'D': [
      { title: 'So What – Miles Davis',            prog: 'I vamp  (Dm)',                              url: yt('So What Miles Davis') },
      { title: 'Oye Como Va – Santana',            prog: 'I – IV  (Dm – G)',                          url: yt('Oye Como Va Santana') },
    ],
    'E': [
      { title: 'Riders on the Storm – The Doors',  prog: 'I vamp  (Em)',                              url: yt('Riders on the Storm The Doors') },
    ],
    'A': [
      { title: 'Brick House – Commodores',         prog: 'I vamp funk  (Am)',                         url: yt('Brick House Commodores') },
    ],
    'G': [
      { title: 'Moondance – Van Morrison',         prog: 'I – IV  (Gm – C)',                          url: yt('Moondance Van Morrison') },
    ],
  },

  mixolydian: {
    'E': [
      { title: 'Norwegian Wood – Beatles',         prog: 'I – VII  (E – D)',                          url: yt('Norwegian Wood Beatles') },
    ],
    'A': [
      { title: "Sweet Child O' Mine (solo) – GN'R", prog: 'I – VII – IV  (A – G – D)',               url: yt("Sweet Child O' Mine Guns N' Roses") },
    ],
    'G': [
      { title: 'Sympathy for the Devil – Stones',  prog: 'I – IV  (G – C)',                           url: yt('Sympathy for the Devil Rolling Stones') },
    ],
  },

  phrygian: {
    'E': [
      { title: 'Wherever I May Roam – Metallica',  prog: 'I vamp  (Em)',                              url: yt('Wherever I May Roam Metallica') },
    ],
  },

  aeolian: {
    'A': [
      { title: 'Stairway to Heaven – Led Zeppelin', prog: 'I – VII – VI – V  (Am – G – F – E)',      url: yt('Stairway to Heaven Led Zeppelin') },
      { title: 'Sultans of Swing – Dire Straits',   prog: 'I – VII – VI – V  (Am – G – F – E)',      url: yt('Sultans of Swing Dire Straits') },
      { title: "Gimme Some Lovin' – Spencer Davis",  prog: 'I – IV – V  (Am – Dm – Em)',             url: yt("Gimme Some Lovin' Spencer Davis Group") },
    ],
    'E': [
      { title: 'Nothing Else Matters – Metallica',  prog: 'I – VII – VI  (Em – D – C)',              url: yt('Nothing Else Matters Metallica') },
      { title: 'Hotel California – Eagles',         prog: 'I – V – VII – IV  (Bm – F♯ – A – E)',    url: yt('Hotel California Eagles') },
      { title: 'Sunshine of Your Love – Cream',     prog: 'I – VII – I  (Em – D – Em)',              url: yt('Sunshine of Your Love Cream') },
    ],
    'D': [
      { title: 'Money for Nothing – Dire Straits',  prog: 'I – III – VII  (Dm – F – C)',             url: yt('Money for Nothing Dire Straits') },
      { title: "Ain't Nobody – Rufus & Chaka Khan",  prog: 'I – VII – VI – VII  (Dm – C – A♯ – C)', url: yt("Ain't Nobody Rufus Chaka Khan") },
    ],
    'G': [
      { title: 'Smoke on the Water – Deep Purple',  prog: 'I – III – IV  (Gm – A♯ – Cm)',           url: yt('Smoke on the Water Deep Purple') },
      { title: 'Use Me – Bill Withers',             prog: 'I – IV funk  (Gm – Cm)',                  url: yt('Use Me Bill Withers') },
      { title: 'Flash Light – Parliament',          prog: 'I vamp funk  (Gm)',                       url: yt('Flash Light Parliament') },
    ],
    'B': [
      { title: 'Wish You Were Here – Pink Floyd',   prog: 'I – VII – VI – V  (Bm – A – G – F♯)',   url: yt('Wish You Were Here Pink Floyd') },
      { title: 'Feeling Good – Nina Simone',        prog: 'I – V  (Bm – F♯)',                       url: yt('Feeling Good Nina Simone') },
    ],
    'F♯': [
      { title: 'Billie Jean – Michael Jackson',     prog: 'I – II  (F♯m – G♯m)',                    url: yt('Billie Jean Michael Jackson') },
      { title: 'Thriller – Michael Jackson',        prog: 'I – VI – III – VII  (F♯m – D – A – E)',  url: yt('Thriller Michael Jackson') },
    ],
    'C': [
      { title: 'Superstition – Stevie Wonder',      prog: 'I vamp funk  (Cm)',                      url: yt('Superstition Stevie Wonder') },
      { title: 'Chameleon – Herbie Hancock',        prog: 'I – IV funk  (Cm – Fm)',                 url: yt('Chameleon Herbie Hancock') },
    ],
    'F': [
      { title: 'Another One Bites the Dust – Queen', prog: 'I – IV – VII  (Fm – A♯m – D♯)',        url: yt('Another One Bites the Dust Queen') },
    ],
    'A♯': [
      { title: 'Purple Rain – Prince',              prog: 'I – VI – III – VII  (A♯m – F♯ – C♯ – G♯)', url: yt('Purple Rain Prince') },
    ],
  },

  'harmonic-minor': {
    'A': [
      { title: 'Phantom of the Opera – Iron Maiden', prog: 'I – V  (Am – E)',                        url: yt('Phantom of the Opera Iron Maiden') },
      { title: 'Für Elise – Beethoven',              prog: 'I – V – I  (Am – E – Am)',               url: yt('Fur Elise Beethoven') },
    ],
    'E': [
      { title: 'Painkiller – Judas Priest',          prog: 'I riff  (Em harm.)',                     url: yt('Painkiller Judas Priest') },
    ],
    'D': [
      { title: 'Babe I\'m Gonna Leave You – Led Zep', prog: 'I – V – I  (Dm – A – Dm)',             url: yt("Babe I'm Gonna Leave You Led Zeppelin") },
    ],
  },

  'phrygian-dominant': {
    'E': [
      { title: 'Miserlou – Dick Dale',               prog: 'I vamp  (E)',                            url: yt('Miserlou Dick Dale') },
      { title: 'Hava Nagila – Traditionnel',          prog: 'I – IV – V  (E – Am – B)',              url: yt('Hava Nagila') },
    ],
    'A': [
      { title: 'Wherever I May Roam (couplet) – Metallica', prog: 'I riff  (A phry. dom.)',          url: yt('Wherever I May Roam Metallica') },
    ],
    'D': [
      { title: 'Ahava Raba – Traditionnel klezmer',   prog: 'I – IV  (D – Gm)',                     url: yt('Ahava Raba klezmer') },
    ],
  },

  'melodic-minor': {
    'D': [
      { title: 'So What (pont) – Miles Davis',        prog: 'Modulation ½ ton au-dessus (D♯m)',     url: yt('So What Miles Davis') },
    ],
    'C': [
      { title: 'Solar – Miles Davis',                 prog: 'I – IV – VII  (Cm – Fm – B)',           url: yt('Solar Miles Davis') },
    ],
  },
};
