import React from 'react';
import { Float, Box, Torus, Octahedron } from '@react-three/drei';

const Computers = () => {
  return (
    <group dispose={null}>
      {/* Abstract Tech Shapes replacing the computer model for now */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Box position={[0, 0, 0]} args={[2.5, 1.5, 0.1]}>
             <meshStandardMaterial color="#915eff" wireframe />
        </Box>
        <Box position={[0, -0.85, 0.8]} args={[2.5, 0.1, 1]} rotation={[0.4, 0, 0]}>
             <meshStandardMaterial color="#915eff" wireframe />
        </Box>
      </Float>
      
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={1.5}>
          <Octahedron position={[4, 1.5, -2]} args={[0.8, 0]}>
              <meshStandardMaterial color="#aaa6c3" wireframe />
          </Octahedron>
      </Float>
      
      <Float speed={1.8} rotationIntensity={2} floatIntensity={2}>
          <Torus position={[-4, 0.5, -1]} args={[0.8, 0.2, 16, 32]}>
              <meshStandardMaterial color="#f272c8" wireframe />
          </Torus>
      </Float>
      
      {/* Lights affecting these objects */}
      <pointLight position={[10, 10, 10]} intensity={1} />
      <ambientLight intensity={0.5} />
    </group>
  );
};

export default Computers;
