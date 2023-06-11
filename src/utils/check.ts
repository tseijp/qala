import { GameType } from '../types'

const { floor } = Math

export const checkCapture = ($ = [0], i = 0, type: GameType) => {
  return checkCapture[type]($, i)
}

checkCapture.basic = () => false

checkCapture.kalah = ($ = [0], i = 0) => {
  const l = $.length,
    h = floor(l / 2),
    from = ($[i] + i) % l,
    to = (l - from - 2) % l
  if (from === h - 1 || from === l - 1) return false
  if (floor(i / h) !== floor(from / h)) return false
  return $[to] !== 0 && $[from] === 0
}

checkCapture.oware = () => {
  // @TODO implement
  return false
}

export const checkExtra = ($ = [0], i = 0) => {
  const l = $.length,
    h = floor(l / 2),
    k = (i < h ? h : l) - 1
  return $[i] + i === k
}

export const checkEnd = ($ = [0]) => {
  const l = $.length,
    h = floor(l / 2),
    a = $.slice(0, h - 1).some(Boolean),
    b = $.slice(h, l - 1).some(Boolean)
  return !a || !b
}
