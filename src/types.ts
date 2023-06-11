export type GameType = 'basic' | 'kalah' | 'oware'

export type Vec3 = [x: number, y: number, z: number]

export type Stones = number[]

export interface GameStatus {
  capture: boolean
  current: boolean
  end: boolean
  extra: boolean
  next: boolean
  start: boolean
  move: number
  size: number
  seed: number
  score: number[]
  type: GameType
  histories: History[]
}

export interface History {
  _: GameStatus
  $: Stones
}

export interface GameState extends History {
  click: unknown
  reset: unknown
  change: unknown
}
