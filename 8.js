const { tick, bars, repeat, pattern, chord, play, lfo, cc, strum, length } = require('thrum').meter(4, '4n')

tick(bars([
  [1, 7, [
    lfo('8m', '16n', 'sine', 0, 60, cc(16)),
    pattern('[x---][x---]', play(length('2n.', 40), 'F4')),
  ]],
  [8, 8, [
    pattern('xxx[xxx[xxx[xxxx]]]', play(length('128n', 40), 'F4')),
  ]]

]))
