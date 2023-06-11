import * as React from 'react'

export const fontStyle = {
  color: 'white',
  textShadow: `0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.75)`,
  fontWeight: 'bold',
} as React.CSSProperties

export const gridStyle = {
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
} as React.CSSProperties

export const flexStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
} as React.CSSProperties

export const buttonStyle = {
  ...flexStyle,
  ...fontStyle,
  color: 'white',
  background: 'none',
  width: '1.5rem',
  height: '1.5rem',
  border: 'none',
  padding: 0,
  font: 'inherit',
  cursor: 'pointer',
  outline: 'inherit',
} as React.CSSProperties

export const glassStyle = {
  backdropFilter: 'blur(2px)',
  background: 'rgba(0,255,255, 0.01)',
  boxShadow: 'rgba(0, 0, 0, 0.3) 2px 8px 8px',
  border: '1px rgba(255,255,255,0.4) solid',
  borderBottom: '1px rgba(40,40,40,0.35) solid',
  borderRight: '1px rgba(40,40,40,0.35) solid',
} as React.CSSProperties
