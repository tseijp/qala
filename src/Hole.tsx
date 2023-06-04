import { Subtraction } from '@react-three/csg'
import { Html } from '@react-three/drei'
import { useGame } from './Game'

const capsuleArgs = [0.4, 1, 2, 16]

const wrapStyle = (disabled = false) =>
  ({
    width: 35,
    height: 90,
    // opacity: 0.5,
    // background: "red",
    cursor: disabled ? 'not-allowed' : 'pointer',
    position: 'relative',
    userSelect: 'none',
    fontSize: '0.9rem',
  } as any)

const countStyle = {
  position: 'absolute',
  right: 0,
  bottom: 0,
} as any

const Clickable = ({ i }: any) => {
  const { $, _, click } = useGame()
  const n = $.length
  const h = (n / 2) << 0
  const disabled = _.next ? i > h - 1 : i < h - 1

  if (i % h === h - 1) return

  return (
    <Html center transform>
      <div style={wrapStyle(disabled)} onClick={click[i]}>
        <div style={countStyle}>{$[i]}</div>
      </div>
    </Html>
  )
}

export const Hole = (props: any) => {
  const { i, ...other } = props
  return (
    <group {...other} rotation-x={-3.14 / 2}>
      {/* @ts-ignore */}
      <Subtraction>
        <capsuleGeometry args={capsuleArgs} />
      </Subtraction>
      <Clickable i={i} />
    </group>
  )
}
