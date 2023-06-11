import React from 'react'
import { useGame } from '../Game'
import { Html } from './Html'

const wrapStyle = {
  position: 'absolute',
  color: 'white',
  fontSize: '3rem',
  textShadow: `0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.75)`,
  fontWeight: 'bold',
  transform: 'translateY(-2rem)',
} as React.CSSProperties

export const Capture = () => {
  const { _ } = useGame()

  return (
    <Html display={_.capture} timeout={1000}>
      <div style={wrapStyle}>Capture!</div>
    </Html>
  )
}
