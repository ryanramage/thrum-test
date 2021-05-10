const { tick, bars, repeat, pattern, chord, play, lfo, cc, strum } = require('thrum').meter(4, '4n')

let am = chord('Am7')
tick(bars([
  [1, 10, [
    pattern('--[-x]--[-x]-x', play('A3'))
  ]],
  [11, 15, [
    pattern('--[-x]--[-x]-x', play('C3'))
  ]],
  [16, 20, [
    pattern('--[-x]--[-x]-x', play('A3'))
  ]],
  [21, 24, [
    pattern('--[-x]--[-x]-x', play('C3'))
  ]],
  [25, 29, [
    pattern('--[-x]--[-x]-x', play('A3'))
  ]],
  [30, 33, [
    pattern('--[-x]--[-x]-x', play('C3'))
  ]],
  [34, 37, [
    pattern('--[-x]--[-x]-x', play('A3'))
  ]],
  [38, 41, [
    pattern('--[-x]--[-x]-x', play('C3'))
  ]],
  [42, 45, [
    pattern('x-x--x-x', play('A3'))
  ]],
  [46, 49, [
    pattern('x-x--x-x', play('C3'))
  ]],
  [50, 53, [
    pattern('x-x--x-x', play('A3'))
  ]],
  [54, 57, [
    pattern('--[-x]--[-x]-x', play('C3'))
  ]],
  [58, 64, [
    pattern('--[-x]-----', play('A3'))
  ]]
]))
