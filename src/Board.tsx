import { useState } from 'react'
import { RigidBody } from '@react-three/rapier'
import { Geometry, Base } from '@react-three/csg'
import { useGame } from './Game'
import { Hole } from './Hole'
import { Stone } from './Stone'

export const config = {}

export const Board = () => {
  const { $, _ } = useGame()
  const n = $.length
  const w = 30
  const d = w / (n / 2 + 1) // depth
  const g = d / (n / 2 + 1) // gap
  const h = d * 4

  const pos = (i = 0, j = ((n / 2) << 0) - 1) => {
    const peak = j / 2 - 0.5
    let x = i < j ? peak - i : i - 2 * j + peak
    let z = i < j ? -0.5 : 0.5
    if (i === j) z = -0.36
    if (i === 2 * j + 1) z = 0.36
    return [x * d, d / 4, (z * h) / 2]
  }

  const scl = (i = 0, j = ((n / 2) << 0) - 1) => {
    const z = i === j || i === 2 * j + 1 ? h / 3 : h / 4
    return [d - g, z - g, d - g]
  }

  return (
    <Rerender>
      <group>
        <RigidBody type="fixed" colliders="trimesh">
          <mesh receiveShadow>
            <meshPhongMaterial color={'#654321'} />
            <Geometry>
              {/* @ts-ignore */}
              <Base>
                <boxGeometry args={[w, d / 2 - g, h]} />
              </Base>
              {[...Array($.length)].map((_, i) => (
                <Hole key={i} i={i} position={pos(i)} scale={scl(i)} />
              ))}
            </Geometry>
          </mesh>
        </RigidBody>
        {$.map((count = 0, j = 0) => (
          <group position={pos(j)} key={j}>
            {[...Array(count)].map((_v, i) => (
              <Stone
                key={`${j} - ${i}`}
                i={i}
                active={_.next ? j <= n / 2 - 1 : j > n / 2 - 1}
              />
            ))}
          </group>
        ))}
      </group>
    </Rerender>
  )
}

const Rerender = ({ children }: any) => {
  const { $ } = useGame()
  const [l, set] = useState($.length)
  if (l !== $.length) {
    setTimeout(() => set($.length), 0)
    return null
  }
  return children
}
