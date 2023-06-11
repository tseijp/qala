import { GameType } from '../types'

const { floor } = Math

export const initStone = (m = 3, n = 4) => {
  const stones = new Array(m * 2).fill(n)
  return [...stones, 0, ...stones, 0]
}

export const moveStone = ($ = [0], i = 0, type: GameType) => {
  return moveStone[type]($, i)
}

moveStone.basic = moveStone.kalah = ($ = [0], i = 0) => {
  const ret = [...$],
    l = $.length
  i = i % l
  ret[i] = 0
  for (let j = i + 1; j < $[i] + i + 1; j++) ret[j % l]++
  return ret
}

moveStone.oware = ($ = [0], i = 0) => {
  const ret = [...$],
    l = $.length
  i = i % l
  ret[i] = 0
  let limit = $[i] + i + 1
  for (let j = i + 1; j < limit; j++) {
    if (j % l === l - 1 || j % l === l / 2 - 1 || j % l === i) {
      limit++
      continue
    }
    ret[j % l]++
  }
  return ret
}

export const captureStone = ($ = [0], i = 0, type: GameType) => {
  return captureStone[type]($, i)
}

captureStone.basic = captureStone.kalah = ($ = [0], i = 0) => {
  const ret = moveStone['kalah']($, i),
    l = $.length,
    h = floor(l / 2),
    k = i < h ? h - 1 : l - 1,
    from = ($[i] + i) % l,
    to = (l - from - 2) % l
  ret[k] += ret[from] + ret[to]
  ret[from] = ret[to] = 0
  return ret
}

captureStone.oware = ($ = [0], i = 0) => {
  const ret = moveStone['oware']($, i),
    l = $.length,
    h = Math.floor(l / 2),
    k = i < h ? h - 1 : l - 1,
    from = ($[i] + i) % l,
    to = (l - from - 2) % l

  if (from === h - 1 || from === l - 1) return ret
  if (Math.floor(i / h) !== Math.floor(from / h)) return ret
  if (ret[from] === 2 || ret[from] === 3) {
    let j = from
    while (j !== to && (ret[j] === 2 || ret[j] === 3)) {
      ret[k] += ret[j]
      ret[j--] = 0
      if (j < 0) j = l - 2
    }
  }
  return ret
}
