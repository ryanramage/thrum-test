const { tick, bars, repeat, pattern, chord, play, lfo, cc, strum, length } = require('thrum').meter(3, '4n')

tick(bars([
  [1, 6,  [
    lfo('8m', '16n', 'sine', 0, 10, cc(18)),
    repeat('4n', play(length('32n', {channel: 1}),  'F3')),
    pattern('x[x-x]--[x-x]x-x__', play(length('16n', 20), ['F4', 'C5', 'Ab4',  'Eb5', 'Db5',  'F5', 'Ab5']))
  ]],
  [7, 12, [
    lfo('6m', '16n', 'sine', 40, 120, cc(18)),
    repeat('4n', play(length('32n', {channel: 1}),  'Eb3')),
    pattern('x[x-x]--[x-x]x-x__', play(length('16n', 20), ['Eb5', 'Db5', 'F5', 'F4', 'Ab4', 'F5', 'F4']))
  ]],
  [13, 18,  [
    lfo('8m', '16n', 'sine', 0, 10, cc(18)),
    repeat('4n', play(length('32n', {channel: 1}),  'F3')),
    pattern('x[x-x]--[x-x]x-x__', play(length('16n', 20), ['F4', 'C5', 'Ab4',  'Eb5', 'Db5',  'F5', 'Ab5']))
  ]],
  [19, 24, [
    lfo('6m', '16n', 'sine', 100, 120, cc(18)),
    repeat('4n', play(length('32n', {channel: 1}),  'C4')),
    pattern('x[x-x]--[x-x]x-x__', play(length('16n', 20), ['Eb5', 'Db5', 'F5', 'F4', 'Ab4', 'F5', 'F4']))
  ]],
  [25, 25, [
    repeat('8n', play(length('32n', {channel: 1}),  'F5')),
  ]],
  [26, 26, [
    repeat('16n', play(length('64n', {channel: 1}),  'Db5')),
  ]],
  [27, 33,  [
    lfo('1m', '16n', 'sine', 100, 120, cc(18)),
    repeat('8n', play(length('64n', {channel: 1}),  'F3')),
    pattern('x[x-x]--[x-x]x-x__', play(length('16n', 20), ['F4', 'C5', 'Ab4',  'Eb5', 'Db5',  'F5', 'Ab5']))
  ]]
]))
