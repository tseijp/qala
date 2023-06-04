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

export const Stone = (props: any) => {
  const { i, active, ...other } = props as any // @TODO FIX
  const [x, z] = useMemo(() => [Math.random(), Math.random()], [])
  const color = useMemo(() => colors[(colors.length * Math.random()) << 0], [])
  return (
    <RigidBody colliders="hull" position={[x, i, z]}>
      <Sphere args={[1, 16, 8]} scale={[0.4, 0.2, 0.4]} castShadow {...other}>
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
