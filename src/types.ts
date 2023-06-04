export type Vec3 = [x: number, y: number, z: number]

export type Stones = number[]

export interface GameStatus {
  end: boolean
  just: boolean
  steal: boolean
  start: boolean
  current: boolean
  next: boolean
  move: number
  score: number[]
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
