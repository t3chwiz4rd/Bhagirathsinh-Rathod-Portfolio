import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface SkillsGlobeProps {
  skills: string[];
}

const SkillsGlobe = ({ skills }: SkillsGlobeProps) => {
  return (
    <div className="w-[500px] h-[500px] mx-auto">
      <Canvas camera={{ position: [0, 0, 7], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <SkillsTextCloud skills={skills} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
};

const SkillsTextCloud = ({ skills }: { skills: string[] }) => {
  // Generate evenly distributed points on sphere
  const radius = 3.5;
  const positions = skills.map((_, i) => {
    const phi = Math.acos(-1 + (2 * i) / skills.length);
    const theta = Math.sqrt(skills.length * Math.PI) * phi;

    return [
      radius * Math.cos(theta) * Math.sin(phi),
      radius * Math.cos(phi),
      radius * Math.sin(theta) * Math.sin(phi),
    ] as [number, number, number];
  });

  return (
    <>
      {skills.map((skill, i) => (
        <BillboardText key={skill} text={skill} position={positions[i]} />
      ))}
    </>
  );
};

const BillboardText = ({
  text,
  position,
}: {
  text: string;
  position: [number, number, number];
}) => {
  const ref = useRef<THREE.Mesh>(null);
  const { camera } = useThree();
  const [hovered, setHovered] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    checkTheme(); // initial check

    // Observe changes in class on html element (for theme toggle)
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const baseColor = isDarkMode ? '#22c55e' : '#22c55e'; // Bright green / Dark green
  const hoverColor = isDarkMode ? '#eeeeee' : '#333333'; // Gray on hover

  useFrame(() => {
    if (ref.current) {
      ref.current.quaternion.copy(camera.quaternion);
    }
  });

  return (
    <Text
      ref={ref}
      position={position}
      fontSize={0.3}
      color={hovered ? hoverColor : baseColor}
      scale={hovered ? 1.2 : 1}
      anchorX="center"
      anchorY="middle"
      // font="/fonts/JetBrainsMono-Regular.woff"
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {text}
    </Text>
  );
};

export default SkillsGlobe;
