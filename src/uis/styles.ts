import * as React from 'react'

export const fontStyle = {
  color: 'white',
  fontSize: '3rem',
  textShadow: `0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.75)`,
  fontWeight: 'bold',
} as React.CSSProperties

export const flexStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
} as React.CSSProperties

export const spanStyle = {
  ...fontStyle,
  ...flexStyle,
  flexDirection: 'row',
  fontSize: '1.5rem',
  height: '2rem',
} as React.CSSProperties

export const buttonStyle = {
  ...fontStyle,
  color: 'white',
  background: 'none',
  width: '2rem',
  height: '2rem',
  border: 'none',
  padding: 0,
  font: 'inherit',
  cursor: 'pointer',
  outline: 'inherit',
} as React.CSSProperties
