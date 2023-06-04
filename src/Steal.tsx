import React from 'react'
import { useGame } from './Game'
import { FullScreen } from './FullScreen'

const wrapStyle = {
  position: 'absolute',
  bottom: '5%',
  maxWidth: '95%',
  width: '25rem',
  fontSize: '3rem',
  padding: '1.5rem 0',
  color: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '2rem',
  backdropFilter: 'blur(2px)',
  backgroundColor: 'rgba(0,255,255, 0)',
  boxShadow: 'rgba(0, 0, 0, 0.3) 2px 8px 8px',
  border: '1px rgba(255,255,255,0.4) solid',
  borderBottom: '1px rgba(40,40,40,0.35) solid',
  borderRight: '1px rgba(40,40,40,0.35) solid',
} as React.CSSProperties

export const Steal = () => {
  const { _ } = useGame()

  return (
    <FullScreen display={_.steal} timeout={1000}>
      <div style={wrapStyle}>Steal !!</div>
    </FullScreen>
  )
}