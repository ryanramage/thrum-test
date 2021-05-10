const { tick, repeat, chord, play } = require('thrum').meter(4, '4n')

let am = chord('Am')
tick([
  repeat('4n', play(am))
])
