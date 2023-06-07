import { useState } from 'react'
import { Geometry, Base, Subtraction } from '@react-three/csg'
import { TextureLoader, RepeatWrapping } from 'three'
import { useLoader, useThree } from '@react-three/fiber'

const rate = 8
const gap = 0.5
const d = 1

export const Floor = () => {
  const { width, height } = useThree((state) => state.viewport)
  return useState(() => <FloorImpl width={width} height={height} />)[0]
}

const FloorImpl = ({ width, height }: { width: number; height: number }) => {
  const n = (width / 3) << 0 // 20
  const map = useLoader(TextureLoader, '/wood.jpg').clone()
  map.wrapS = RepeatWrapping
  map.wrapT = RepeatWrapping
  map.repeat.set(n * 2, 1)
  return (
    // @ts-ignore
    <mesh position-y={-2 - d} rotation-x={-Math.PI / 2}>
      <Geometry>
        {/* @ts-ignore */}
        <Base>
          <boxGeometry args={[width * rate, height * rate, d]} />
        </Base>
        {[...Array(n)].map((_, i) => (
          // @ts-ignore
          <Subtraction
            key={i + 'left'}
            position-x={-(i * width * rate) / n / 2}
            position-z={0.1}
          >
            <boxGeometry args={[gap, height * rate, d]} />
          </Subtraction>
        ))}
        {[...Array(n)].map((_, i) => (
          // @ts-ignore
          <Subtraction
            key={i + 'right'}
            position-x={(i * width * rate * 3) / n / 2}
            position-z={0.1}
          >
            <boxGeometry args={[gap, height * rate, d]} />
          </Subtraction>
        ))}
      </Geometry>
      <meshPhongMaterial
        map={map}
        color="#8c7a5f"
        shininess={30}
        specular="#333333"
        reflectivity={0.5}
      />
    </mesh>
  )
}
