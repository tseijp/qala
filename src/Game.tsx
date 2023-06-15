import {
  useState,
  useContext,
  createContext,
  useRef,
  useTransition,
} from 'react'
import {
  scoreStone,
  initStone,
  moveStone,
  captureStone,
  checkExtra,
  checkCapture,
  checkEnd,
} from './utils'
import { useMutable, useEvent } from 'reev/react'
import type { GameStatus, GameState, Stones } from './types'

const initSize = 3
const initSeed = 4
const initGameType = 'kalah'
const initStones: Stones = initStone(initSize, initSeed)
const initStatus: GameStatus = {
  current: false,
  capture: false,
  end: checkEnd(initStones, initGameType),
  extra: false,
  next: false,
  start: true,
  move: 0,
  size: initSize,
  seed: initSeed,
  type: initGameType,
  score: scoreStone(initStones, initGameType),
  histories: [],
}

initStatus.histories.push({ _: { ...initStatus }, $: initStones })

export const GameContext = createContext(null as unknown as GameState)
export const useGame = () => useContext(GameContext)

export const Game = ({ children }: { children: React.ReactNode }) => {
  const [$, set] = useState(initStones)
  const [, startTransition] = useTransition()
  const _ = useRef(initStatus).current

  const click = useMutable(
    $.map((_v, i) => () => {
      const n = $.length
      const h = (n / 2) << 0
      if (_.next ? i > h - 1 : i < h - 1) return
      if (i === h - 1 || i === n - 1 || !$[i]) return
      _.move++
      _.start = false
      _.current = _.next
      _.extra = checkExtra($, i)
      _.capture = checkCapture($, i, _.type)
      if (!_.extra) _.next = !_.next
      const stones = _.capture
        ? captureStone($, i, _.type)
        : moveStone($, i, _.type)
      _.end = checkEnd(stones, _.type)
      _.score = scoreStone(stones, _.type)
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
      startTransition(() => set(history.$))
    })
  )

  const change = useEvent<{
    assign: (gameStatus: GameStatus, stones?: Stones) => void
    init: (dm: number, dn: number) => void
    kalah: (checked: boolean) => void
    oware: (checked: boolean) => void
    'stone+': () => void
    'stone-': () => void
    'length+': () => void
    'length-': () => void
  }>({
    assign(gameStatus, stones) {
      const history = _.histories[0]
      history.$ = stones || [...history.$]
      Object.assign(history._, gameStatus)
      reset[0]()
    },
    init(dm, dn) {
      const size = _.size + dm
      const seed = _.seed + dn
      if (size <= 1 || seed <= 0) return
      const stones = initStone(size, seed)
      const score = scoreStone(stones, _.type)
      change.assign({ size, seed, score }, stones)
    },
    kalah: (checked) => change.assign({ type: checked ? 'kalah' : 'basic' }),
    oware: (checked) => change.assign({ type: checked ? 'oware' : 'basic' }),
    'stone+': () => change.init(0, 1),
    'stone-': () => change.init(0, -1),
    'length+': () => change.init(1, 0),
    'length-': () => change.init(-1, 0),
  })

  return (
    <GameContext.Provider value={{ _, $, click, reset, change }}>
      {children}
    </GameContext.Provider>
  )
}
