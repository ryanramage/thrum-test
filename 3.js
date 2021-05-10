const { tick, bars, mod, play } = require('thrum')

tick(bars([4, '4n'], [
  [1, 3, mod(1, '4n', play("C6"))]
]))
