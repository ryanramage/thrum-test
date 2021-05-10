const { Tonal, pattern, strum, bars, play, tick } = require('thrum')

let b1 = pattern('x_-x_-x-')

let Amaj7 = Tonal.Chord.get("Amaj7").notes.map(n => n + '5')
let EM7 = Tonal.Chord.get("EM7").notes.map(n => n + '5')
let am = Tonal.Chord.get("am7").notes.map(n => n + '2')

tick(bars([4, '4n'], [
  [1, 8, b1(play(Amaj7))],
  [9, 16, b1(play(EM7))],


// , [5, 6, bass(play(am))]
// , [7, 8, bass(play(cmaj7))]
// , [9, 10, bass(play(gM))]
// , [11, 12, bass(play(am))]
// , [13, 14, end(play(am))]

  //, [15, 20, pattern('[xx]-[x-][--x-]')(play(['A2', 'C2', 'G2', 'E2']))],
]))
