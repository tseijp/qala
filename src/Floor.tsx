import { Geometry, Base, Subtraction } from '@react-three/csg'
import { TextureLoader, RepeatWrapping } from 'three'
import { useLoader, useThree } from '@react-three/fiber'

const rate = 4
const gap = 0.5
const d = 1

export const Floor = () => {
  const { width, height } = useThree((state) => state.viewport)
  const map = useLoader(TextureLoader, '/wood.jpg').clone()
  map.wrapS = RepeatWrapping
  map.wrapT = RepeatWrapping
  map.repeat.set(rate * 2, 1)
  return (
    // @ts-ignore
    <mesh position-y={-2 - d} rotation-x={-Math.PI / 2}>
      <Geometry>
        {/* @ts-ignore */}
        <Base>
          <boxGeometry args={[width * rate, height * rate, d]} />
        </Base>
        {[-2, -1, 0, 1, 2].map((i) => (
          // @ts-ignore
          <Subtraction
            key={i}
            position-x={(i * width * rate) / 8}
            position-z={d / 2}
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
