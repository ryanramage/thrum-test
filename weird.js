const { tick, bars, repeat, pattern, chord, play, lfo, cc, strum } = require('thrum').meter(4, '4n')

let am = chord('Am7')
tick(bars([
  [0, 1, [
    repeat('4n', strum(am))
  ]],
  [2, 16, [
    pattern('----x------x--x--x-----x', play({velocity: 1}, am.octave(3))),
    pattern('-x------x----x-----x--x-x', play({velocity: 1}, am.octave(5)))
  ]],
  [17, 20, [
    pattern('----x------x--x--x-----x', play(am.octave(3))),
    pattern('-x------x----x-----x--x-x', play(am.octave(5)))
  ]],
  [21, 33, [
    pattern('----x_-----x_-x--x--x_--x', play(am.octave(3))),
    pattern('-x-x----x-x--x-xx--x--x-x', play(am.octave(5)))
  ]],
  [34, 40, [
    pattern('------x-----x-------x', play(am.octave(3))),
    pattern('-x------x--x-x----x---', play(am.octave(5)))
  ]],
  [41, 50, [
    pattern('------x____-------x__', play(am.octave(3))),
    pattern('-x____-----x__x_x_---x_-', play(am.octave(5)))
  ]],
  [51, 64, [
    pattern('----x------x--x--x-----x', play({velocity: 1}, am.octave(3))),
    pattern('-x------x----x-----x--x-x', play({velocity: 1}, am.octave(5)))
  ]]
]))
