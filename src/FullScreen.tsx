import { useEffect } from 'react'
import { useRefEvent } from 'reev/react'
import { Html } from '@react-three/drei'

const calcPos = (_: any, camera: any) => camera.position

const htmlStyle = {
  display: 'flex',
  userSelect: 'none',
  pointerEvents: 'none',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'translate(calc(100vw - 50%), calc(100vh - 50%))',
}

export const FullScreen = (props: any) => {
  const { children, display = false, timeout = 0 } = props

  const self = useRefEvent({
    mount(target: any) {
      target.parentElement.style.display = display ? 'flex' : 'none'
      target.parentElement.style.pointerEvents = 'none'
      if (display && timeout > 0)
        setTimeout(() => {
          target.parentElement.style.display = 'none'
        }, timeout)
    },
  })

  useEffect(() => {
    if (self.target) self.mount(self.target)
  }, [self, display, timeout])

  return (
    <Html
      ref={self.ref}
      fullscreen
      style={htmlStyle}
      calculatePosition={calcPos}
    >
      {children}
    </Html>
  )
}
