"use client";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useRef,useEffect, useState } from "react";


export default function Skills() {
const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
];
const titleRef = useRef(null);
const [particles, setParticles] = useState([]);

useEffect(() => {
  const generated = Array.from({ length: 20 }).map(() => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: 2 + Math.random() * 3,
  }));
  setParticles(generated);
}, []);
 const ref = useRef(null);

  // 🎯 Mouse tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(y, { stiffness: 100, damping: 20 });
  const rotateY = useSpring(x, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const mouseX = e.clientX - rect.left - midX;
    const mouseY = e.clientY - rect.top - midY;

    x.set(mouseX / 20);
    y.set(-mouseY / 20);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

const reset = () => {
  titleRef.current.style.transform =
    "perspective(800px) rotateX(0) rotateY(0) scale(1)";
};

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto text-center px-6">
        
   <div className="relative flex flex-col items-center justify-center mb-20">

      {/* 🌌 PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
  <span
    key={i}
    className="absolute w-2 h-2 bg-green-400/30 rounded-full animate-ping"
    style={{
      top: `${p.top}%`,
      left: `${p.left}%`,
      animationDuration: `${p.duration}s`,
    }}
  />
))}
      </div>

      {/* 💥 TITLE */}
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 80, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
        }}
        className="relative px-12 py-6 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_0_40px_rgba(34,197,94,0.3)] hover:shadow-[0_0_80px_rgba(34,197,94,0.6)] transition-all duration-300">

        {/* ✨ Mouse Glow */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.25),transparent_70%)] opacity-0 hover:opacity-100 transition duration-300" />

        {/* 🔥 TEXT */}
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-wide bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_25px_rgba(34,197,94,0.6)]" >
          <Typewriter
            words={["Building UI with React", "Creating APIs with Node", "Managing Data with MongoDB"]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        {/* ⚡ Animated underline */}
        <div className="mt-4 h-1 w-32 mx-auto rounded-full bg-gradient-to-r from-green-400 to-cyan-400 animate-pulse"/>
      </motion.div>
    </div>
        {/* 🔥 GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-500/30 transition-all duration-500 hover:scale-110 hover:-translate-y-2">
              {/* 💎 INNER GLASS */}
              <div
                className="relative rounded-2xl px-6 py-8 min-h-[100px] flex items-center justify-center bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_10px_30px_rgba(0,0,0,0.4)] overflow-hidden">

                {/* 🌈 GLOW EFFECT */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-500/20  opacity-0 group-hover:opacity-100 blur-xl transition duration-500" ></div>

                {/* ✨ TOP LIGHT REFLECTION */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent opacity-20"></div>

                {/* ✨ SHINE SWEEP */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute top-0 left-[-120%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[120%] transition-all duration-1000"></div>
                </div>

                {/* 🔥 TEXT */}
            
  {/* effects stay same */}

  <div className="flex flex-col items-center gap-2 relative z-10">
    <div className="text-3xl md:text-4xl">
      {skill.icon}
    </div>
    <span className="text-white text-sm md:text-base font-semibold">
      {skill.name}
    </span>
  </div>
</div>
              </div>
          ))}
        </div>

      </div>
    </section>
  );
}