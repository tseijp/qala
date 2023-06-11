import React, { useRef } from 'react'
import { useGame } from '../Game'
import { Html } from './Html'

const wrapStyle = {
  position: 'absolute',
  color: 'white',
  fontSize: '3rem',
  textShadow: `0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.75)`,
  fontWeight: 'bold',
  transform: 'translateY(-1rem)',
} as React.CSSProperties

export const ExtraTurn = () => {
  const { _ } = useGame()
  const extraTime = useRef(0)

  if (_.extra) extraTime.current++
  else extraTime.current = 0

  return (
    <Html display={extraTime.current} timeout={1000}>
      <div style={wrapStyle}>Extra turn!</div>
    </Html>
  )
}
