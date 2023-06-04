import React, { useRef } from 'react'
import { useGame } from './Game'
import { FullScreen } from './FullScreen'

const wrapStyle = {
  position: 'absolute',
  color: 'white',
  fontSize: '3rem',
  textShadow: `0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.75)`,
  fontWeight: 'bold',
  transform: 'translateY(-1rem)',
} as React.CSSProperties

export const Just = () => {
  const { _ } = useGame()
  const justTime = useRef(0)

  if (_.just) justTime.current++
  else justTime.current = 0

  return (
    <FullScreen display={justTime.current} timeout={1000}>
      <div style={wrapStyle}>Extra turn!</div>
    </FullScreen>
  )
}
