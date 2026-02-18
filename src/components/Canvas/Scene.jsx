import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';

const Scene = ({ children }) => {
  return (
    <div className="w-full h-screen absolute top-0 left-0 -z-10">
      <Canvas
        frameloop='demand'
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <OrbitControls 
             enableZoom={false}
             maxPolarAngle={Math.PI / 2}
             minPolarAngle={Math.PI / 2}
          />
          {children}
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default Scene;
