export const logger = () => {
  console.log(
    `
┏━━━━┳━━━━┳━━━━┳━━━━┳━━━━┳━━━━┳━━━━┳━━━━┓
┃ i= ┃  5 ┃  4 ┃  3 ┃  2 ┃  1 ┃i=0 ┃    ┃ l = 14
┃ k=6┣━━━━╋━━━━╋━━━━╋━━━━╋━━━━╋━━━━┫ 13 ┃ h = 7
┃    ┃  7 ┃  8 ┃  9 ┃ 10 ┃ 11 ┃ 12 ┃    ┃
┗━━━━┻━━━━┻━━━━┻━━━━┻━━━━┻━━━━┻━━━━┻━━━━┛
`.trim()
  )
}

export const expect = (a: unknown) => {
  return {
    toBe: (b: unknown) => {
      if (a === b) return
      if (Array.isArray(a) && Array.isArray(b) && !a.some((v, i) => v !== b[i]))
        return
      console.warn(`expect ${a} to be ${b}`)
    },
  }
}

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
