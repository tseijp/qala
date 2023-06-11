import React from 'react'
import { Html } from './Html'
import { Link } from './Link'
import { useGame } from '../Game'
import { Loop } from '../icons/Loop'
import { Plus } from '../icons/Plus'
import { Minus } from '../icons/Minus'
import { Previous } from '../icons/Previous'
import { FullScreen } from './FullScreen'
import { Switch } from './Switch'
import {
  fontStyle,
  gridStyle,
  flexStyle,
  glassStyle,
  buttonStyle,
} from './styles'

const wrapStyle = {
  ...fontStyle,
  ...flexStyle,
  ...glassStyle,
  fontSize: '2rem',
  position: 'absolute',
  top: '5%',
  width: '25rem',
  padding: '1.5rem 0',
  maxWidth: '95%',
  height: '5rem',
  maxHeight: '10%',
  pointerEvents: 'auto',
  borderRadius: '2rem',
} as React.CSSProperties

const gridWrapStyle = {
  ...gridStyle,
  gridTemplateColumns: 'repeat(6, auto)',
  gridTemplateRows: 'repeat(2, auto)',
  gridGap: '0.25rem',
} as React.CSSProperties

const spanStyle = {
  ...flexStyle,
  marginLeft: '1rem',
  marginRight: '0.25rem',
  fontSize: '1rem',
  height: '1rem',
} as React.CSSProperties

export const Score = () => {
  const { _, reset, change } = useGame()
  const isLeftWinner = _.score[0] > _.score[1] !== (_.type === 'basic')

  return (
    <Html display>
      {/* <img alt="" src="/tmp.png" style={_debugStyle} /> */}
      <div style={wrapStyle}>
        <div>
          {_.end && isLeftWinner && 'winnter'}
          {_.score[0]}:{_.score[1]}
          {_.end && !isLeftWinner && 'winnter'}
          {_.end && _.score[0] === _.score[1] && 'draw'}
        </div>
        <div style={gridWrapStyle}>
          <button style={buttonStyle} onClick={reset[0]}>
            <Loop />
          </button>
          <span style={spanStyle}>seed</span>
          <button style={buttonStyle} onClick={change['stone-']}>
            <Minus />
          </button>
          <button style={buttonStyle} onClick={change['stone+']}>
            <Plus />
          </button>
          <span style={spanStyle}>kalah</span>
          <Switch value={_.type === 'kalah'} onSwitch={change['kalah']} />
          <button style={buttonStyle} onClick={reset[_.move - 1]}>
            <Previous />
          </button>
          <span style={spanStyle}>size</span>
          <button style={buttonStyle} onClick={change['length-']}>
            <Minus />
          </button>
          <button style={buttonStyle} onClick={change['length+']}>
            <Plus />
          </button>
          <span style={spanStyle}>oware</span>
          <Switch value={_.type === 'oware'} onSwitch={change['oware']} />
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
