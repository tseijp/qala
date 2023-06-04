import { useState } from 'react'
import { TextureLoader } from 'three'
import { RigidBody } from '@react-three/rapier'
import { Geometry, Base } from '@react-three/csg'
import { useLoader } from '@react-three/fiber'
import { useGame } from './Game'
import { Extrude } from './Extrude'
import * as THREE from 'three'
import { Gap } from './Gap'
import { Hole } from './Hole'
import { Hinge } from './Hinge'
import { Stone } from './Stone'
import type { Vec3 } from './types'

export const Board = () => {
  const map = useLoader(TextureLoader, '/wood.jpg').clone()
  map.wrapS = THREE.RepeatWrapping
  map.wrapT = THREE.RepeatWrapping
  map.offset.set(0.5, 0.5)
  map.repeat.set(0.032, 0.032)

  const { $, _ } = useGame()
  const n = $.length
  const w = 30
  const d = w / (n / 2 + 1) // depth
  const g = d / 25 // gap
  const h = d * 4

  const pos = (i = 0, j = ((n / 2) << 0) - 1): Vec3 => {
    const peak = j / 2 - 0.5
    let x = i < j ? peak - i : i - 2 * j + peak
    let z = i < j ? -0.6 : 0.5
    if (i === j) z = -0.34
    if (i === 2 * j + 1) z = 0.34
    x += (g / 2) * ((n + i - (n - 2) / 4) % n < n / 2 ? -1 : 1)
    return [x * d, d / 4, (z * h) / 2]
  }

  const scl = (i = 0, j = ((n / 2) << 0) - 1): Vec3 => {
    const z = i === j || i === 2 * j + 1 ? h / 3 : h / 4
    return [d - 2 * g, z - 6 * g, d - g]
  }

  return (
    <Rerender>
      <group>
        <RigidBody type="fixed" colliders="trimesh">
          {/* @ts-ignore */}
          <mesh receiveShadow>
            <meshPhongMaterial
              map={map}
              normalMap={map}
              color="#fff7f7"
              specular="#FFFFFF"
              shininess={1000}
              reflectivity={1}
            />
            <Geometry>
              {/* @ts-ignore */}
              <Base>
                <Extrude args={[w + g * 8, d / 2 - g, h]} radius={1.3} />
              </Base>
              {[...Array($.length)].map((_, i) => (
                <Hole key={i} i={i} position={pos(i)} scale={scl(i)} />
              ))}
              <Gap args={[g * 2, d * 2, h]} />
            </Geometry>
          </mesh>
        </RigidBody>
        <Hinge d={d} g={g} h={h} z={-h / 4} />
        <Hinge d={d} g={g} h={h} z={h / 4} />
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

const Rerender = ({ children }: { children: JSX.Element }) => {
  const { $ } = useGame()
  const [l, set] = useState($.length)
  if (l !== $.length) {
    setTimeout(() => set($.length), 0)
    return null
  }
  return children
}
