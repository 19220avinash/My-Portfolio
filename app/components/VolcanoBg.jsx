"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";

function Snow({ count, speed, size }) {
  const ref = useRef();

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = Math.random() * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  useFrame(() => {
    if (!ref.current) return;

    ref.current.position.y -= speed;
    ref.current.rotation.y += 0.0003;

    if (ref.current.position.y < -2) {
      ref.current.position.y = 2;
    }
  });

  return (
    <Points ref={ref} positions={particles}>
      <PointMaterial size={size} color="#ffffff" transparent opacity={0.8} />
    </Points>
  );
}

function CameraMotion() {
  useFrame(({ camera, mouse }) => {
    camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.02;
    camera.position.y += (mouse.y * 0.3 - camera.position.y) * 0.02;
    camera.position.z = 5 + Math.sin(Date.now() * 0.001) * 0.2;
  });
  return null;
}

export default function WinterBg() {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />

        <CameraMotion />

       <Snow count={800} speed={0.002} size={0.02} />
<Snow count={600} speed={0.004} size={0.03} />
<Snow count={300} speed={0.006} size={0.05} />
      </Canvas>
    </div>
  );
}