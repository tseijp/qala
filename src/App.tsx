import { Stage } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import { Game } from './Game'
import { Board } from './Board'
import { Just } from './Just'
import { Score } from './Score'
import { Steal } from './Steal'

export const App = () => (
  <Physics timeStep={1 / 128}>
    <Stage adjustCamera={0.75} preset="upfront" environment={null}>
      <Game>
        <Just />
        <Score />
        <Steal />
        <Board />
      </Game>
    </Stage>
  </Physics>
)

export default App
