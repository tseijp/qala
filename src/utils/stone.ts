const { floor } = Math

export const initStone = (m = 3, n = 4) => {
  const stones = new Array(m * 2).fill(n)
  return [...stones, 0, ...stones, 0]
}

export const moveStone = ($ = [0], i = 0) => {
  const ret = [...$],
    l = $.length
  ret[(i = i % l)] = 0
  for (let j = i + 1; j < $[i] + i + 1; ret[j++ % l]++);
  return ret
}

export const captureStone = ($ = [0], i = 0) => {
  const ret = moveStone($, i),
    l = $.length,
    h = floor(l / 2),
    k = i < h ? h - 1 : l - 1,
    from = ($[i] + i) % l,
    to = (l - from - 2) % l
  ret[k] += ret[from] + ret[to]
  ret[from] = ret[to] = 0
  return ret
}
