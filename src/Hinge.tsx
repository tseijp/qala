import { Geometry, Base, Addition } from '@react-three/csg'
import type { MeshProps } from '@react-three/fiber'

export interface HingeProps extends MeshProps {
  d: number
  g: number
  h: number
  z: number
}

export const Hinge = (props: HingeProps) => {
  const { d, g, h, z } = props
  const gap = 1
  const rate = 0.6
  return (
    <mesh rotation-x={Math.PI / 2} position={[0, -d / 4, z]}>
      <Geometry>
        {[0, 1, 2, 3].map((i) => (
          // @ts-ignore
          <Addition position-y={(i * (h + gap)) / 16 - (h / 16 + gap)}>
            <cylinderGeometry args={[g, g, h / 16]} />
          </Addition>
        ))}
        {/* @ts-ignore */}
        <Base position-y={-gap / 2}>
          <cylinderGeometry args={[g * rate, g * rate, h / 4]} />
        </Base>
      </Geometry>
      <meshStandardMaterial
        color="#49321c"
        roughness={0.6}
        metalness={0.3}
        shininess={1000}
        reflectivity={1}
      />
    </mesh>
  )
}
