"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState,useRef } from "react";

export default function Hero() {

const data = [
  { img: "/avin.jpeg", tag: "I CODE", role: "ENGINEER" },
  { img: "/travel.jpg", tag: "I TRAVEL", role: "TRAVELER" },
  { img: "/Cricket.jpeg", tag: "I PLAY", role: "ATHLETE" },
  { img: "/expo.jpeg", tag: "I EXPLORE", role: "EXPLORER" },
];
  const [index, setIndex] = useState(0);
const [time, setTime] = useState(null);
const cardRef = useRef(null);

const handleMouseMove = (e) => {
  if (window.innerWidth < 768) return;
  const card = cardRef.current;
  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = -(y - centerY) / 10;
  const rotateY = (x - centerX) / 10;

  card.style.transform = `
    perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale(1.05)
  `;
};

const resetTilt = () => {
  cardRef.current.style.transform =
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
};

useEffect(() => {
  const updateTime = () => {
    setTime(
      new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    );
  };

  updateTime(); // initial
  const interval = setInterval(updateTime, 1000);

  return () => clearInterval(interval);
}, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen text-white relative overflow-hidden px-4 sm:px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center min-h-screen">

        {/* ================= LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 rounded-3xl  border-green-400/40 animate-pulse pointer-events-none"></div>
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-400/10 via-transparent to-transparent pointer-events-none"></div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold leading-none">
            AVINASH
          </h1>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold leading-none text-transparent stroke-text">
            POOJARY
          </h1>

          <p className="mt-4 text-cyan-300 italic">
            "Builder. Explorer. Always evolving."
          </p>

          <div className="flex flex-wrap gap-3 mt-4 mb-4">
            {["FULL STACK", "MSC - 2026", "OPEN TO WORK"].map((item) => (
              <span
                key={item}
                className="px-4 py-2 text-xs border border-cyan-400/30 rounded-full bg-cyan-400/5 text-cyan-300"
              >
                {item}
              </span>
            ))}
          </div>

         <p className="mt-6 text-cyan-200 italic max-w-lg leading-relaxed space-y-3 text-sm sm:text-base">

  <span className="block">
    I'm a full-stack developer with a deep love for building things that feel alive — interfaces that breathe, APIs that sing, and systems that scale.
  </span>

  <span className="block">
    Currently pursuing my Msc Computer Science at Mahatma Gandhi Memorial College Udupi. I work with React, PostmanAPI, MongoDB, and dive into AI pipelines whenever I get the chance.
  </span>

  {/* ➕ ADDED CONTENT */}
  <span className="block">
    I enjoy turning complex problems into simple, intuitive solutions, focusing on performance, scalability, and seamless user experience.
  </span>

  <span className="block">
    Beyond coding, I constantly explore new technologies, experiment with creative ideas, and push myself to build products that are both meaningful and impactful.
  </span>

  <span className="block">
    I believe in learning by building — every project I create is a step toward mastering my craft and delivering real-world value.
  </span>

</p>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center md:justify-end"
        >

       {/* 🔁 ROTATING CARD */}
<div className="relative mt-10 sm:mt-16 md:mt-28 flex justify-center">
  <AnimatePresence mode="wait">
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      key={data[index].img}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -30, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="relative bg-white/10 backdrop-blur-2xl border border-green-300/30 shadow-[0_0_20px_rgba(34,197,94,0.25)] hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] rounded-3xl p-3 shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-30 before:pointer-events-none "
      style={{ transformStyle: "preserve-3d" }}
    >

    <img
  src={data[index].img}
  className="w-40 h-52 sm:w-48 sm:h-60 md:w-56 md:h-64 object-cover rounded-2xl"
  style={{
    transform: "translateZ(40px)",
  }}
/>

      {/* TEXT */}
      <div className="mt-3 flex justify-between items-center">
    <AnimatePresence mode="popLayout">
   <motion.p
      style={{ transform: "translateZ(20px)" }}
    key={data[index].role}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4 }}
    className="text-cyan-300 text-xs tracking-wider"
  >
    {data[index].role}
  </motion.p>
</AnimatePresence>

        {/* 🔥 TAG ANIMATION */}
        <AnimatePresence mode="popLayout">
            <motion.span
              style={{ transform: "translateZ(30px)" }}
    key={data[index].tag}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4 }}
    className="text-white font-semibold text-sm"
  >
    {data[index].tag}
  </motion.span>
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-green-400/20 via-transparent to-cyan-400/20 blur-xl opacity-50"></div>
    </motion.div>
  </AnimatePresence>
</div>
          {/* STATUS */}
          <div className="mt-6 w-full max-w-[260px] sm:max-w-xs relative group">

  {/* 🌈 Glow Border */}
  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/30 via-blue-500/20 to-purple-500/30 blur-md opacity-60 group-hover:opacity-100 transition"></div>

  {/* 💎 Glass Card */}
  <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl p-5 text-sm text-gray-300 shadow-xl">

    {/* STATUS */}
    <div className="flex items-center gap-2">
      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
      <p className="text-green-400 font-medium"> System Online</p>
    </div>

    {/* INFO */}
    <div className="mt-4 space-y-2">

      <p className="flex justify-between">
        <span className="text-gray-400">Role</span>
        <span className="text-white">MSc Student</span>
      </p>

      <p className="flex justify-between">
        <span className="text-gray-400">Looking for</span>
        <span className="text-white">Intern / Full-time</span>
      </p>

      <p className="flex justify-between">
        <span className="text-gray-400">Timezone</span>
        <span className="text-cyan-300">
          IST {time ? `(${time})` : "(--:--:--)"}
        </span>
      </p>

    </div>

  </div>
</div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6">

  {/* PROJECTS */}
  <div className="relative w-24 sm:w-28 group">
    {/* 🌈 ROTATING BORDER */}
    <div className="absolute inset-0 rounded-xl p-[1px] overflow-hidden">
      <div className="w-full h-full rounded-xl animate-rotateBorder bg-[conic-gradient(from_0deg,_#4ade80,_#f97316,_#4ade80)]"></div>
    </div>

    {/* 💎 CARD */}
    <div className="relative bg-white/5 backdrop-blur-xl rounded-xl p-4 text-center h-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(74,222,128,0.5)]">
      <p className="text-2xl text-cyan-300 font-bold text-black"><b>4+</b></p>
      <p className="text-xs text-gray-400 mt-1 text-black"><b>Projects Shipped</b></p>
    </div>
  </div>

  {/* INTERNSHIP */}
  <div className="relative w-24 sm:w-28 group">
    <div className="absolute inset-0 rounded-xl p-[1px] overflow-hidden">
      <div className="w-full h-full rounded-xl animate-rotateBorder bg-[conic-gradient(from_0deg,_#4ade80,_#f97316,_#4ade80)]"></div>
    </div>

    <div className="relative bg-white/5 backdrop-blur-xl rounded-xl p-4 text-center h-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(249,115,22,0.5)]">
      <p className="text-2xl text-cyan-300 text-black font-bold"><b>1</b></p>
      <p className="text-xs text-gray-400 mt-1 text-black"><b>Internship</b></p>
    </div>
  </div>

  {/* LEARNING */}
  <div className="relative w-24 sm:w-28 group">
    <div className="absolute inset-0 rounded-xl p-[1px] overflow-hidden">
      <div className="w-full h-full rounded-xl animate-rotateBorder bg-[conic-gradient(from_0deg,_#4ade80,_#f97316,_#4ade80)]"></div>
    </div>

    <div className="relative bg-white/5 backdrop-blur-xl rounded-xl p-4 text-center h-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(74,222,128,0.5)]">
      <p className="text-2xl text-cyan-300 text-black font-bold"><b>∞</b></p>
      <p className="text-xs text-gray-400 text-black mt-1"><b>Learning</b></p>
    </div>
  </div>

</div>

        </motion.div>

      </div>
    </section>
  );
}