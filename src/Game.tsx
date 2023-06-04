import { useState, useContext, createContext, useRef } from 'react'
import { useMutable, useEvent } from 'reev/react'
import {
  scoreStone,
  initStone,
  moveStone,
  stealStone,
  checkJust,
  checkSteal,
  checkEnd,
} from './utils'

const initStones = initStone(3, 3) as any
const initStatus = {
  end: checkEnd(initStones),
  just: false,
  steal: false,
  start: true,
  current: false,
  next: false,
  move: 0,
  score: scoreStone(initStones),
  histories: [] as any[],
}

initStatus.histories.push({ _: { ...initStatus }, $: initStones })

export const GameContext = createContext(null as unknown as any)
export const useGame = () => useContext(GameContext)

export const Game = ({ children }: any) => {
  const [$, set] = useState(initStones as any[])
  const _ = useRef(initStatus).current as any

  const click = useMutable(
    $.map((_v, i) => () => {
      const n = $.length
      const h = (n / 2) << 0
      if (_.next ? i > h - 1 : i < h - 1) return
      if (i === h - 1 || i === n - 1 || !$[i]) return
      let stones = [...$] as any[]
      _.move++
      _.start = false
      _.current = _.next
      _.just = checkJust($, i)
      _.steal = checkSteal($, i)
      if (!_.just) _.next = !_.next
      if (_.steal) stones = stealStone(stones, i)
      else stones = moveStone(stones, i)
      _.end = checkEnd(stones)
      _.score = scoreStone(stones)
      _.histories.push({ _: { ..._ }, $: stones })
      set(stones)
    })
  )

  const reset = useMutable(
    _.histories.map((_v: any, i = 0) => () => {
      const history = _.histories[i]
      if (!history) return
      Object.assign(_, history._)
      _.histories = _.histories.slice(0, i + 1)
      set(history.$)
    })
  ) as any

  const change = useEvent({
    'stone+': () => change.init(0, 1),
    'stone-': () => change.init(0, -1),
    'length+': () => change.init(1, 0),
    'length-': () => change.init(-1, 0),
    init(dm = 0, dn = 0) {
      const history = _.histories[0]
      if (!history) return
      const m = ((history.$.length - 2) / 4) << 0
      const n = history.$[0]
      if (m + dm <= 0 || n + dn <= 0) return
      history.$ = initStone(m + dm, n + dn)
      history._.score = scoreStone(history.$)
      reset[0]()
    },
  }) as any

  return (
    <GameContext.Provider value={{ _, $, click, reset, change } as any}>
      {children}
    </GameContext.Provider>
  )
}
