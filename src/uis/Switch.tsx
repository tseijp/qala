import React, { useEffect, useState } from 'react'
import { buttonStyle, glassStyle } from './styles'

const rootStyle = (
  checked: boolean,
  disabled?: boolean,
  color = checked ? '0, 25, 25' : '0, 255, 255',
  alpha = checked ? 0.5 : 0.05
): React.CSSProperties => ({
  border: 'none',
  outline: 'none',
  ...glassStyle,
  ...buttonStyle,
  width: '1.75rem',
  height: '1rem',
  background: `rgba(${color}, ${alpha})`,
  borderRadius: '9999px',
  position: 'relative',
  cursor: disabled ? 'not-allowed' : 'pointer',
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
  background: `rgba(${color}, ${alpha})`,
  transform: checked ? 'translateX(40%)' : 'translateX(-40%)',
})

export interface SwitchProps {
  value?: boolean
  disabled?: boolean
  onSwitch?: (value: boolean) => void
}

export const Switch = (props: SwitchProps) => {
  const { value = false, disabled, onSwitch } = props
  const [checked, setChecked] = useState(value)
  const handleClick = () => {
    const newChecked = !checked
    setChecked(newChecked)
    onSwitch?.(newChecked)
  }

  useEffect(() => {
    setChecked(value)
  }, [value])

  return (
    <button
      style={rootStyle(checked, disabled)}
      onClick={handleClick}
      disabled={disabled}
    >
      <span style={thumbStyle(checked)} />
    </button>
  )
}
