const { Tonal, pattern, strum, bars, play, tick } = require('thrum')

let b1 = pattern('[-x][-x][-x][-x]')
let b2 = pattern('[-x][-x][-x][xxxx]')

let bridge = pattern('[xx][--][xx]x')

let end = pattern('xxxx')

let cmaj7 = Tonal.Chord.get("Cmaj7").notes.map(n => n + '2')
let gM = Tonal.Chord.get("GM7").notes.map(n => n + '2')
let am = Tonal.Chord.get("am7").notes.map(n => n + '2')

tick(bars([4, '4n'], [
  [1, 2, b1(play(['A2']))]
, [3, 4, b2(play(['A2', 'A2', 'A2', 'A2', 'C3', 'C4', 'C5']))]
, [5, 6, b1(play(['A2']))]
, [7, 8, b2(play(['A2', 'A2', 'A2', 'A2', 'C3', 'C4', 'C5']))]
, [9, 10, b1(play(['E2']))]
, [11, 12, b2(play(['E2', 'E2', 'E2', 'E2', 'C3', 'C4', 'C5']))]
, [13, 14, b1(play(['E2']))]
, [15, 16, b2(play(['E2', 'E2', 'E2', 'E2', 'C3', 'C4', 'C5']))]
, [17, 18, bridge(play(['C2', 'C3', 'C1', 'C2', 'C2', 'C5', 'C2']))]
, [19, 20, b1(play(['A2']))]
, [21, 22, b2(play(['A2', 'A2', 'A2', 'A2', 'C3', 'C4', 'C5']))]
, [23, 24, b1(play(['A2']))]
, [25, 26, b2(play(['A2', 'A2', 'A2', 'A2', 'C3', 'C4', 'C5']))]
, [27, 28, b1(play(['E2']))]
, [29, 30, b2(play(['E2', 'E2', 'E2', 'E2', 'C3', 'C4', 'C5']))]
, [31, 31, b1(play(['E2']))]
, [32, 33, b2(play(['E2', 'E2', 'E2', 'E2', 'C3', 'C4', 'C5']))]
, [34, 35, bridge(play(['C2', 'C3', 'C1', 'C2', 'C2', 'C5', 'C2']))]


// , [5, 6, bass(play(am))]
// , [7, 8, bass(play(cmaj7))]
// , [9, 10, bass(play(gM))]
// , [11, 12, bass(play(am))]
// , [13, 14, end(play(am))]

  //, [15, 20, pattern('[xx]-[x-][--x-]')(play(['A2', 'C2', 'G2', 'E2']))],
]))
