import { GameType } from '../types'

const { floor } = Math

const _sum = (a = 0, b = 0) => a + b

export const scoreStone = ($ = [0], type: GameType = 'basic') => {
  return scoreStone[type]($)
}

scoreStone.basic = ($ = [0]) => {
  const l = $.length,
    h = floor(l / 2),
    a = $.slice(0, h - 1).reduce(_sum, 0),
    b = $.slice(h, l - 1).reduce(_sum, 0)
  return [a, b]
}

scoreStone.kalah = ($ = [0]) => {
  const l = $.length,
    h = floor(l / 2),
    a = $.slice(0, h).reduce(_sum, 0),
    b = $.slice(h, l).reduce(_sum, 0)
  return [a, b]
}

scoreStone.oware = ($ = [0]) => {
  // @TODO implement
  return [0, 0]
}
