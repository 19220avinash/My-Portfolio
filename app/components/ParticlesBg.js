"use client";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBg() {
  const particlesInit = async (engine) => {
    await loadSlim(engine); // ✅ FIXED
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 50 },
          color: { value: "#a855f7" },
          links: {
            enable: true,
            distance: 120,
            opacity: 0.3,
          },
          move: { enable: true, speed: 1 },
          size: { value: 2 },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}