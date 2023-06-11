import React, { useState } from 'react'
import { buttonStyle, glassStyle } from './styles'

const rootStyle = (
  checked: boolean,
  color = checked ? '0, 25, 25' : '0, 255, 255',
  alpha = checked ? 0.5 : 0.05
): React.CSSProperties => ({
  border: 'none',
  outline: 'none',
  ...glassStyle,
  ...buttonStyle,
  width: '1.75rem',
  height: '1rem',
  backgroundColor: `rgba(${color}, ${alpha})`,
  borderRadius: '9999px',
  position: 'relative',
  transition: '0.75s',
  cursor: 'pointer',
})

const thumbStyle = (
  checked: boolean,
  color = checked ? '255, 255, 255' : '255, 255, 255',
  alpha = checked ? 0.5 : 0.05
): React.CSSProperties => ({
  ...glassStyle,
  display: 'block',
  width: '0.75rem',
  height: '0.75rem',
  borderRadius: '9999px',
  transition: '0.1s',
  backgroundColor: `rgba(${color}, ${alpha})`,
  transform: checked ? 'translateX(40%)' : 'translateX(-40%)',
})

export interface SwitchProps {
  init?: boolean
  onSwitch?: (value: boolean) => void
}

export const Switch = ({ init = false, onSwitch }: SwitchProps) => {
  const [checked, setChecked] = useState(init)
  const handleClick = () => {
    const newChecked = !checked
    setChecked(newChecked)
    onSwitch?.(newChecked)
  }

  return (
    <button style={rootStyle(checked)} onClick={handleClick}>
      <span style={thumbStyle(checked)} />
    </button>
  )
}
