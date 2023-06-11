import React from 'react'
import { Html } from './Html'
import { Link } from './Link'
import { useGame } from '../Game'
import { Loop } from '../icons/Loop'
import { Plus } from '../icons/Plus'
import { Minus } from '../icons/Minus'
import { Previous } from '../icons/Previous'
import { FullScreen } from './FullScreen'
import { fontStyle, flexStyle, buttonStyle, spanStyle } from './styles'

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
  gap: '0.5rem',
} as React.CSSProperties

export const Score = () => {
  const { _, reset, change } = useGame()

  return (
    <Html display>
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
      <Link />
      <FullScreen />
    </Html>
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
