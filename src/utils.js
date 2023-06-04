const { floor } = Math;

const _sum = (a, b) => a + b;

export const initStone = (m = 3, n = 4) => {
  const stones = new Array(m * 2).fill(n);
  return [...stones, 0, ...stones, 0];
};

export const scoreStone = ($ = []) => {
  const l = $.length,
    h = floor(l / 2),
    a = $.slice(0, h).reduce(_sum),
    b = $.slice(h, l).reduce(_sum);
  return [a, b];
};

export const moveStone = ($ = [], i = 0) => {
  const ret = [...$],
    l = $.length;
  ret[(i = i % l)] = 0;
  for (let j = i + 1; j < $[i] + i + 1; ret[j++ % l]++);
  return ret;
};

export const stealStone = ($ = [], i = 0) => {
  const ret = moveStone($, i),
    l = $.length,
    h = floor(l / 2),
    k = i < h ? h - 1 : l - 1,
    from = ($[i] + i) % l,
    to = (l - from - 2) % l;
  ret[k] += ret[from] + ret[to];
  ret[from] = ret[to] = 0;
  return ret;
};

export const checkSteal = ($ = [], i = 0) => {
  const l = $.length,
    h = floor(l / 2),
    from = ($[i] + i) % l,
    to = (l - from - 2) % l;
  if (from === h - 1 || from === l - 1) return false;
  if (floor(i / h) !== floor(from / h)) return false;
  return $[to] !== 0 && $[from] === 0;
};

export const checkJust = ($ = [], i = 0) => {
  const l = $.length,
    h = floor(l / 2),
    k = (i < h ? h : l) - 1;
  return $[i] + i === k;
};

export const checkEnd = ($ = []) => {
  const l = $.length,
    h = floor(l / 2),
    a = $.slice(0, h - 1).some(Boolean),
    b = $.slice(h, l - 1).some(Boolean);
  return !a || !b;
};

export const logger = () => {
  console.log(
    `
┏━━━━┳━━━━┳━━━━┳━━━━┳━━━━┳━━━━┳━━━━┳━━━━┓
┃ i= ┃  5 ┃  4 ┃  3 ┃  2 ┃  1 ┃i=0 ┃    ┃ l = 14
┃ k=6┣━━━━╋━━━━╋━━━━╋━━━━╋━━━━╋━━━━┫ 13 ┃ h = 7
┃    ┃  7 ┃  8 ┃  9 ┃ 10 ┃ 11 ┃ 12 ┃    ┃
┗━━━━┻━━━━┻━━━━┻━━━━┻━━━━┻━━━━┻━━━━┻━━━━┛
`.trim()
  );
};

export const expect = (a) => {
  return {
    toBe: (b) => {
      if (a === b) return;
      if (Array.isArray(a) && Array.isArray(b) && !a.some((v, i) => v !== b[i]))
        return;
      console.warn(`expect ${a} to be ${b}`);
    }
  };
};

// logger();
// // unit test
// expect(moveStone([1, 2, 0, 3, 4, 0], 0)).toBe([0, 3, 0, 3, 4, 0]);
// expect(moveStone([1, 2, 0, 3, 4, 0], 3)).toBe([2, 2, 0, 0, 5, 1]);
// expect(stealStone([1, 0, 0, 3, 4, 0], 0)).toBe([0, 0, 4, 0, 4, 0]);
// expect(stealStone([0, 5, 0, 3, 4, 0], 1)).toBe([0, 0, 7, 4, 0, 1]);
// expect(scoreStone([1, 2, 0, 3, 4, 0])).toBe([3, 7]);
// expect(scoreStone([1, 2, 0, 0, 0, 0])).toBe([3, 0]);
// expect(checkEnd([1, 2, 0, 3, 4, 0])).toBe(false);
// expect(checkEnd([1, 2, 0, 0, 0, 0])).toBe(true);
// expect(checkJust([1, 1, 0, 3, 4, 0], 1)).toBe(true);
// expect(checkJust([1, 2, 0, 3, 4, 0], 4)).toBe(false);
// expect(checkSteal([1, 0, 0, 3, 4, 0], 0)).toBe(true);
// expect(checkSteal([1, 0, 0, 3, 3, 0], 4)).toBe(false);
