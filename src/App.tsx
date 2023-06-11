import { Stage } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import { Game } from './Game'
import { Board } from './Board'
import { Capture } from './uis/Capture'
import { ExtraTurn } from './uis/ExtraTurn'
import { Score } from './uis/Score'

export const App = () => (
  <Physics timeStep={1 / 128}>
    <Stage adjustCamera={0.75} preset="upfront" environment={null}>
      <Game>
        <Board />
        <Capture />
        <ExtraTurn />
        <Score />
      </Game>
    </Stage>
  </Physics>
)

export default App
