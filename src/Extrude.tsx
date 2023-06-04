import { useMemo } from 'react'
import * as THREE from 'three'

export interface ExtrudeProps {
  args: [number, number, number]
  radius: number
}

export function Extrude(props: ExtrudeProps) {
  const { args, radius: r = 0.2 } = props
  const [w, h, d] = args
  const config = useMemo(() => ({ depth: h, bevelEnabled: false }), [h])
  const shape = useMemo(() => {
    const s = new THREE.Shape()
    s.moveTo(-w / 2, -d / 2 + r)
    s.lineTo(-w / 2, d / 2 - r)
    s.absarc(-w / 2 + r, d / 2 - r, r, 1 * Math.PI, 0.5 * Math.PI, true)
    s.lineTo(w / 2 - r, d / 2)
    s.absarc(w / 2 - r, d / 2 - r, r, 0.5 * Math.PI, 0 * Math.PI, true)
    s.lineTo(w / 2, -d / 2 + r)
    s.absarc(w / 2 - r, -d / 2 + r, r, 2 * Math.PI, 1.5 * Math.PI, true)
    s.lineTo(-w / 2 + r, -d / 2)
    s.absarc(-w / 2 + r, -d / 2 + r, r, 1.5 * Math.PI, 1 * Math.PI, true)
    return new THREE.Shape(s.getPoints(10))
  }, [w, d, r, h])

  const geometry = useMemo(() => {
    const geo = new THREE.ExtrudeGeometry(shape, config)
    geo.rotateX(Math.PI / 2)
    geo.translate(0, -h / 2, 0)
    geo.computeVertexNormals()
    return geo
  }, [shape, config])

  return <primitive object={geometry} />
}
