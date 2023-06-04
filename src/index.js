import { createRoot } from "react-dom/client";
import { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Canvas } from "@react-three/fiber";
import { Game } from "./Game";
import { Board } from "./Board";
import { Just } from "./Just";
import { Score } from "./Score";
import { Steal } from "./Steal";

createRoot(document.getElementById("root")).render(
  <Canvas
    camera={{ position: [0, 10, 5] }}
    style={{ top: 0, left: 0, position: "fixed" }}
    gl={{ localClippingEnabled: true }}
    shadows
  >
    <ambientLight />
    <pointLight position={[10, 10, 10]} castShadow />
    <color attach="background" args={["#e2e2e2"]} />
    <OrbitControls />
    <Suspense fallback="loading">
      <Physics timeStep={1 / 128}>
        <Stage adjustCamera={0.8} preset="upfront">
          <Game>
            <Just />
            <Score />
            <Steal />
            <Board />
          </Game>
        </Stage>
      </Physics>
    </Suspense>
  </Canvas>
);
