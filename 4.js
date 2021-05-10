const { Tonal, strum, tick, subdivision, lfo, ramp, cc, mod, duration, play } = require('thrum')

let meter = [4, '4n']
let sub = subdivision(meter)
let gM = Tonal.Chord.get("GM").notes.map(n => n + '5')


tick([
  mod(8, '4n', strum({length: sub('1m')}, gM)),
  lfo(meter, '8m', '16n', 'sine', 0, 127, cc(16)),
  lfo(meter, '2m', '8n', 'sine', 0, 120, cc(17)),
  //ramp(meter, '1m', '64n', 'up', 0, 127)(cc(1, 3)),
//  ,ramp('3m', '64n', 'scoopUp', 0, 127)(cc(1, 3)),
])
