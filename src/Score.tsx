import { useGame } from './Game'
import React, { useState } from 'react'
import { Loop } from './icons/Loop'
import { Previous } from './icons/Previous'
import { FullScreen } from './FullScreen'
import { Plus } from './icons/Plus'
import { Minus } from './icons/Minus'
import { Github } from './icons/Github'
import { CodeSandbox } from './icons/CodeSandbox'
import { Twitter } from './icons/Twitter'
import { EnterFullScreen } from './icons/EnterFullScreen'
import { ExitFullScreen } from './icons/ExitFullScreen'

const GITHUB_URL = 'https://github.com/tseijp/qala'

const CODESANDBOX_URL = 'https://codesandbox.io/s/github/tseijp/qala'

const TWITTER_URL = 'https://twitter.com/tseijp'

const fontStyle = {
  color: 'white',
  fontSize: '3rem',
  textShadow: `0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.75)`,
  fontWeight: 'bold',
} as React.CSSProperties

const flexStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
} as React.CSSProperties

const wrapStyle = {
  ...fontStyle,
  ...flexStyle,
  position: 'absolute',
  top: '5%',
  width: '25rem',
  padding: '1.5rem 0',
  maxWidth: '95%',
  height: '10%',
  pointerEvents: 'auto',

  // background
  borderRadius: '2rem',
  backdropFilter: 'blur(2px)',
  backgroundColor: 'rgba(0,255,255, 0)',
  boxShadow: 'rgba(0, 0, 0, 0.3) 2px 8px 8px',
  border: '1px rgba(255,255,255,0.4) solid',
  borderBottom: '1px rgba(40,40,40,0.35) solid',
  borderRight: '1px rgba(40,40,40,0.35) solid',
} as React.CSSProperties

const toolsStyle = {
  ...flexStyle,
  flexDirection: 'row',
  gap: '0.75rem',
} as React.CSSProperties

const spanStyle = {
  ...fontStyle,
  ...flexStyle,
  marginLeft: '1rem',
  flexDirection: 'row',
  fontSize: '1.5rem',
  height: '2rem',
} as React.CSSProperties

const buttonStyle = {
  ...fontStyle,
  color: 'white',
  background: 'none',
  height: '2rem',
  border: 'none',
  padding: 0,
  font: 'inherit',
  cursor: 'pointer',
  outline: 'inherit',
} as React.CSSProperties

const linkWrapStyle = {
  ...flexStyle,
  flexDirection: 'row',
  position: 'absolute',
  bottom: '1rem',
  left: '1rem',
  gap: '1rem',
} as React.CSSProperties

const linkIconStyle = {
  ...flexStyle,
  width: '2.5rem',
  height: '2.5rem',
  color: '#2e2e2e',
  cursor: 'pointer',
  pointerEvents: 'auto',
} as React.CSSProperties

const fullScreenStyle = {
  ...flexStyle,
  flexDirection: 'row',
  position: 'absolute',
  bottom: '1rem',
  right: '1rem',
} as React.CSSProperties

const fullScreenIconStyle = {
  ...flexStyle,
  width: '2.5rem',
  height: '2.5rem',
  color: '#2e2e2e',
  cursor: 'pointer',
  pointerEvents: 'auto',
} as React.CSSProperties

export const Score = () => {
  const { _, reset, change } = useGame()
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
    <FullScreen display>
      {/* <img alt="" src="/tmp.png" style={_debugStyle} /> */}
      <div style={wrapStyle}>
        <div>
          {_.end && _.score[0] > _.score[1] && 'winnter'}
          {_.score[0]}:{_.score[1]}
          {_.end && _.score[0] < _.score[1] && 'winnter'}
          {_.end && _.score[0] === _.score[1] && 'draw'}
        </div>
        <div style={toolsStyle}>
          <button style={buttonStyle} onClick={reset[0]}>
            <Loop style={flexStyle} />
          </button>
          <button style={buttonStyle} onClick={reset[_.move - 1]}>
            <Previous style={flexStyle} />
          </button>
          <span style={spanStyle}>stone</span>
          <button style={buttonStyle} onClick={change['stone+']}>
            <Plus style={flexStyle} />
          </button>
          <button style={buttonStyle} onClick={change['stone-']}>
            <Minus style={flexStyle} />
          </button>
          <span style={spanStyle}>length</span>
          <button style={buttonStyle} onClick={change['length+']}>
            <Plus style={flexStyle} />
          </button>
          <button style={buttonStyle} onClick={change['length-']}>
            <Minus style={flexStyle} />
          </button>
        </div>
      </div>
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
      <div style={linkWrapStyle}>
        <a target="_blank" rel="noopener noreferrer" href={GITHUB_URL}>
          <Github style={linkIconStyle} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href={CODESANDBOX_URL}>
          <CodeSandbox style={linkIconStyle} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href={TWITTER_URL}>
          <Twitter style={linkIconStyle} />
        </a>
      </div>
    </FullScreen>
  )
}

// const _debugStyle = {
//   opacity: 0.2,
//   top: 0,
//   left: 0,
//   position: 'fixed',
//   objectFit: 'contain',
//   width: '100%',
//   height: '100%',
//   border: 'solid 2px',
//   background: 'red',
// } as any
