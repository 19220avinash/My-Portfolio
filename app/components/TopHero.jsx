"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import WinterBg from "./VolcanoBg";

export default function TopHero() {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 500], [1, 0.9]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <motion.section
      style={{ scale, opacity }}
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 relative overflow-hidden"
    >
      {/* ❄️ WINTER BACKGROUND */}
      <WinterBg />

      {/* 🌌 DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-black/60 to-black z-[1]" />

      {/* 💡 GLOW BEHIND TEXT */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 z-[1]" />

      {/* ✨ CONTENT */}
      <div className="relative z-10 flex flex-col items-center">

        {/* 🚀 ANNOUNCEMENT */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}   
          className="-mt-25 mb-4 px-4 py-1 border border-gray-700 rounded-full text-sm text-white-400 bg-white/5 backdrop-blur"
        >
          🚀 Open to new opportunities
        </motion.div>

        {/* 🧠 HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 mb-5 text-4xl md:text-6xl lg:text-7xl font-semibold text-center leading-tight max-w-4xl"
        >
          From idea to interface <br />
          built with{" "}
          <span className="italic text-gray-400">clarity</span>{" "}
          and{" "}
          <span className="italic text-blue-400">code</span>
        </motion.h1>

       <motion.h4
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
  className="mt-6 text-gray-400 text-center flex items-center justify-center gap-2 flex-wrap"
>
  Hello, I’m{" "}
  <span className="text-white font-medium flex items-center gap-2">
    Avinash
    <img
      src="/avin.jpeg"
      alt="Avinash"
     className="w-12 h-12 rounded-full object-cover border border-gray-600"
    />
  </span>
  a Full Stack Developer
</motion.h4>

        {/* 🎯 BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex gap-4 flex-wrap justify-center"
        >
          <a
            href="https://github.com/19220avinash"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full border text-black border-gray-600 bg-gradient-to-r from-blue-400 to-cyan-400 hover:opacity-60 transition no-underline"
          >
            Let’s Connect →
          </a>

         <a
  href="/AvinashResume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-6 py-3 rounded-[50px] border border-gray-600 text-black bg-gradient-to-r from-blue-400 to-cyan-400 hover:opacity-60 transition no-underline"
>
  View Resume
</a>
        </motion.div>

      </div>
    </motion.section>
  );
}