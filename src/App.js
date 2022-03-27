import './App.css';
import { Canvas } from "react-three-fiber"
import { ScrollControls, useScroll, Environment, Stats, Scroll } from "@react-three/drei";
import { Suspense } from "react"
import Model from "./historyFrame";
import Text from "./text.js";




function App() {
  const scroll = useScroll();
  return (
    <>
      <Canvas style={{ height: 625 }} >
        <fog attach="fog" args={['#17171b', 30, 40]} />
        <color attach="background" args={['#17171b']} />
        <pointLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <ScrollControls pages={5} distance={1} >
            <group>
              <Model position={[-5, 0, 0]} />
              <Model position={[-5, 0, -32]} />
              <Model position={[-5, 0, -66]} />
              <Model position={[-5, 0, -96]} />


            </group>
            <Environment preset="dawn" background = "only" >
            </Environment>
            <Scroll html>
              <Text />
            </Scroll>
          </ScrollControls>
        </Suspense>
        {/* <OrbitControls /> */}
        <Stats />
      </Canvas>
      {/* <button onClick={(e) => Load_model}>skip history</button> */}
    </>
  );
}

export default App;
