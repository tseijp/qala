import React, { memo, useState } from 'react'
import { EnterFullScreen } from '../icons/EnterFullScreen'
import { ExitFullScreen } from '../icons/ExitFullScreen'
import { flexStyle, buttonStyle } from './styles'

const fullScreenStyle = {
  ...flexStyle,
  flexDirection: 'row',
  position: 'absolute',
  height: '4rem',
  bottom: '4.25rem',
  right: '2rem',
} as React.CSSProperties

const fullScreenIconStyle = {
  ...flexStyle,
  width: '2.5rem',
  height: '2.5rem',
  color: '#2e2e2e',
  cursor: 'pointer',
  pointerEvents: 'auto',
} as React.CSSProperties

export const FullScreen = memo(() => {
  const [isFullScreen, setIsFullScreen] = useState(false)
  const handleClickFullScreen = () => {
    if (!document.fullscreenElement) {
      setIsFullScreen(true)
      document.documentElement.requestFullscreen()
    } else if (document.exitFullscreen) {
      setIsFullScreen(false)
      document.exitFullscreen()
    }
  }
  return (
    <div style={fullScreenStyle}>
      <button style={buttonStyle} onClick={handleClickFullScreen}>
        <EnterFullScreen
          style={{
            ...fullScreenIconStyle,
            display: isFullScreen ? 'none' : '',
          }}
        />
        <ExitFullScreen
          style={{
            ...fullScreenIconStyle,
            display: isFullScreen ? '' : 'none',
          }}
        />
      </button>
    </div>
  )
})
