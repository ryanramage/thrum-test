const { chord, tick, cc, repeat, play, bars, lfo, length} = require('thrum').meter([4, '4n'])

let cm7 = chord('Cm7')
let am7 = chord('Am7')

tick([
  lfo('8m', '16n', 'sine', 0, 127, cc(16)),
  lfo('2m', '8n', 'sine', 0, 120, cc(17)),
  lfo('16m', '8n', 'sine', 0, 127, cc(19)),
  bars([
    [0, 11, [
      repeat({period: '1n.', offset: '2n'}, play(length('4n.'), cm7.octave(3))),
      repeat('1n.', play(length('8n.'), cm7.octave(5))),
      repeat('3m', play(length('2n', 3), cm7.octave(7))),
    ]],
    [12, 15, [
      repeat('4n', play(length('4n'), am7.octave(3))),
    ]],
    [16, 17, [
      repeat('2n.', play(length('4n'), am7.octave(5))),
    ]],
    [18, 21, [
      repeat('4n', play(length('4n'), am7.octave(3))),
    ]],
    [22, 33, [
      repeat({period: '1n.', offset: '8n'}, play(length('4n.'), cm7.octave(3))),
      repeat('2m', play(length('8n.'), cm7.octave(5))),
      repeat('3m', play(length('2n', 3), cm7.octave(7))),
    ]]
  ])
])
