const { Tonal, pattern, play, transpose, bars, tick } = require('thrum')


let cscale5 = Tonal.Scale.get("C major").notes.map(i => `${i}3`)
let quarterNotePattern = pattern('x[x-x[xxx]]-x')
let quarterNoteCscale = quarterNotePattern(play(cscale5))
let upScale = transpose('5P', quarterNoteCscale)

tick(bars([4, '4n'], [
  [1, 2, quarterNoteCscale],
  [2, 2, upScale],
  [2, 5, pattern('---x[xxx]--')(play(['A3', 'C5', 'G4', 'E4']))]
]))
