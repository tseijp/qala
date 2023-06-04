// @ts-ignore
import { createRoot } from 'react-dom/client'
import { Suspense, lazy } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const App = lazy(() => import('./App'))

createRoot(document.getElementById('root') as HTMLElement).render(
  <Canvas
    camera={{ position: [0, 10, 1.8] }}
    style={{ top: 0, left: 0, position: 'fixed' }}
    gl={{ localClippingEnabled: true }}
    shadows
  >
    {/* @ts-ignore */}
    <pointLight position={[10, 10, 10]} castShadow />
    <ambientLight />
    <color attach="background" args={['#e2e2e2']} />
    <OrbitControls enablePan={false} enableRotate={true} enableZoom={false} />
    <Suspense fallback="loading">
      <App />
    </Suspense>
  </Canvas>
)
