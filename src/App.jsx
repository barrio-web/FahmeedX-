import React, { useState, useEffect } from 'react';
import Logo from './components/Logo';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Preload, Scroll, ScrollControls } from '@react-three/drei';

import CanvasLoader from "./components/CanvasLoader"
import { Scenes } from './components/Scenes';
import LoadingScreen from './components/LoadingScreen';
import { Controls } from './components/Controls';



function App() {
  const [show3DModel, setShow3DModel] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogoClick = () => {
    setShow3DModel(true);
  };

  useEffect(() => {
    if (isLoading) {
      const loadingTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 3000); // Simulate a 3-second loading time

      return () => clearTimeout(loadingTimeout);
    }
  }, [isLoading]);



  return (
    <div className="flex items-center justify-center w-screen h-screen ">
      {!show3DModel ? (
        <Logo onClick={handleLogoClick} />
      ) : (
        <>
          {isLoading && <LoadingScreen />}
          <Canvas camera={{ position: [0, 4, 11], fov: 100 }}>



            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={1.15} penumbra={1} />
            <ScrollControls pages={1} damping={0.1}>
              <Suspense >
                <Scenes />
              </Suspense>
              <Preload all />
              <Scroll html>
                <Controls />
              </Scroll>
            </ScrollControls>
          </Canvas>
        </>
      )}
    </div>
  );
}

export default App
