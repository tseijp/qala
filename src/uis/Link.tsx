import React from 'react'
import { Github } from '../icons/Github'
import { CodeSandbox } from '../icons/CodeSandbox'
import { Twitter } from '../icons/Twitter'
import { flexStyle } from './styles'

const GITHUB_URL = 'https://github.com/tseijp/qala'

const CODESANDBOX_URL = 'https://codesandbox.io/s/github/tseijp/qala'

const TWITTER_URL = 'https://twitter.com/tseijp'

const linkWrapStyle = {
  ...flexStyle,
  flexDirection: 'row',
  position: 'absolute',
  height: '4rem',
  bottom: '4rem',
  left: '2rem',
  gap: '2rem',
} as React.CSSProperties

const linkIconStyle = {
  ...flexStyle,
  width: '2.5rem',
  height: '2.5rem',
  color: '#2e2e2e',
  cursor: 'pointer',
  pointerEvents: 'auto',
} as React.CSSProperties

export const Link = () => {
  return (
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
  )
}
