import { useMemo } from 'react'
import { Sphere } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

const colors = [
  '#FF0000',
  '#00FF00',
  '#0000FF',
  '#FFFF00',
  '#00FF00',
  '#00FFFF',
  '#FFFFFF',
]

export interface StoneProps {
  i: number
  active: boolean
}

export const Stone = (props: StoneProps) => {
  const { i, active } = props
  const [x, z] = useMemo(() => [Math.random(), Math.random()], [])
  const color = useMemo(() => colors[(colors.length * Math.random()) << 0], [])
  return (
    <RigidBody colliders="hull" position={[x, i, z]}>
      {/* @ts-ignore */}
      <Sphere args={[1, 16, 8]} scale={[0.4, 0.2, 0.4]} castShadow>
        <meshPhongMaterial
          color={color}
          transparent
          shininess={1000}
          reflectivity={1}
          reflactionRation={1}
          opacity={active ? 1 : 0.6}
        />
      </Sphere>
    </RigidBody>
  )
}

// export type RigidBodyTypeString =
//   | "fixed"
//   | "dynamic"
//   | "kinematicPosition"
//   | "kinematicVelocity";
// export type RigidBodyAutoCollider =
//   | "ball"
//   | "cuboid"
//   | "hull"
//   | "trimesh"
//   | false;
