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
import type { GameStatus, GameState, Stones } from './types'

const initStones = initStone(3, 3) as Stones
const initStatus = {
  end: checkEnd(initStones),
  just: false,
  steal: false,
  start: true,
  current: false,
  next: false,
  move: 0,
  score: scoreStone(initStones),
  histories: [],
} as GameStatus

initStatus.histories.push({ _: { ...initStatus }, $: initStones })

export const GameContext = createContext(null as unknown as GameState)
export const useGame = () => useContext(GameContext)

export const Game = ({ children }: { children: React.ReactNode }) => {
  const [$, set] = useState(initStones)
  const _ = useRef(initStatus).current

  const click = useMutable(
    $.map((_v, i) => () => {
      const n = $.length
      const h = (n / 2) << 0
      if (_.next ? i > h - 1 : i < h - 1) return
      if (i === h - 1 || i === n - 1 || !$[i]) return
      let stones = [...$] as Stones
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
    _.histories.map((_v: unknown, i = 0) => () => {
      const history = _.histories[i]
      if (!history) return
      Object.assign(_, history._)
      _.histories = _.histories.slice(0, i + 1)
      set(history.$)
    })
  )

  const change = useEvent<{
    'stone+': () => void
    'stone-': () => void
    'length+': () => void
    'length-': () => void
    init: (dm: number, dn: number) => void
  }>({
    'stone+': () => change.init(0, 1),
    'stone-': () => change.init(0, -1),
    'length+': () => change.init(1, 0),
    'length-': () => change.init(-1, 0),
    init(dm, dn) {
      const history = _.histories[0]
      if (!history) return
      const m = ((history.$.length - 2) / 4) << 0
      const n = history.$[0]
      if (m + dm <= 0 || n + dn <= 0) return
      history.$ = initStone(m + dm, n + dn)
      history._.score = scoreStone(history.$)
      reset[0]()
    },
  })

  return (
    <GameContext.Provider value={{ _, $, click, reset, change }}>
      {children}
    </GameContext.Provider>
  )
}
