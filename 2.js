const { Tonal, pattern, strum, bars, play, tick, subdivision } = require('thrum')
const meter = [4, '4n']
const l = subdivision(meter)

let cmaj7 = Tonal.Chord.get("Cmaj7").notes.map(n => n + '2')
let gM = Tonal.Chord.get("GM").notes.map(n => n + '2')
let am = Tonal.Chord.get("am").notes.map(n => n + '2')

tick(bars(meter, [
  //[1, 1, pattern('x--[x[xx]]', play(['C5', 'D5', 'G4'] ))],

  [1, 1, pattern('x---')(play({length: l('4m')}, 'c5')) ]





// , [1, 4, pattern('-x_-')(strum(cmaj7)) ]
// , [5, 8, pattern('x--[x[xx]]')(play(['G5'])) ]
// , [5, 8, pattern('-x_-')(strum(gM)) ]
// , [9, 12, pattern('x--[x[xx]]')(play(['C5', 'D5', 'G4'])) ]
// , [9, 12, pattern('-x_-')(strum(cmaj7)) ]
// , [13, 16, pattern('x--[x[xx]]')(play(['G5'])) ]
// , [13, 16, pattern('-x_-')(strum(gM)) ]
]))
