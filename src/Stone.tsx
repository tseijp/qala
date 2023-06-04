import { useMemo } from 'react'
import { Sphere } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import colors from 'nice-color-palettes'

export interface StoneProps {
  i: number
  active: boolean
}

export const Stone = (props: StoneProps) => {
  const { i, active } = props
  const [x, z] = useMemo(() => [Math.random() / 4, Math.random() / 4], [])
  const color = useMemo(() => {
    const palette = colors[(colors.length * Math.random()) << 0]
    const color = palette[(palette.length * Math.random()) << 0]
    return color
  }, [])
  return (
    <RigidBody colliders="hull" position={[x, i, z]}>
      {/* @ts-ignore */}
      <Sphere args={[1, 16, 8]} scale={[0.4, 0.2, 0.4]} castShadow>
        <meshPhongMaterial
          color={color}
          transparent
          shininess={1000}
          reflectivity={1}
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
