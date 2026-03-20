"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useRef } from "react";

export default function Education() {
   const ref = useRef(null);

  // 🎯 Tilt effect
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
  const chapters = [
    {
      id: "01",
      title: "MSc Computer Science",
      uni: "Manglore University",
      status: "ONGOING",
      progress: "80%",
    },
    {
      id: "02",
      title: "BCA",
      uni: "Mangalore University",
      status: "COMPLETED",
      progress: "100%",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen text-white px-6 py-20 relative overflow-hidden"
    >
      {/* 🌌 GRID BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto">
        {/* 🔥 HEADER */}
          <div className="flex flex-col items-center justify-center mb-10">
         <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 80, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
        }}
        className="relative px-12 py-8 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_0_40px_rgba(34,197,94,0.25)] hover:shadow-[0_0_80px_rgba(34,197,94,0.5)] transition-all duration-300 text-center">

        {/* ✨ Glow layer */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.2),transparent_70%)] opacity-0 hover:opacity-100 transition duration-300"/>

        {/* 🔥 TITLE */}
        <h1
          className="text-5xl md:text-6xl font-extrabold tracking-wide bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]"
        >
          <Typewriter
            words={["Education", "Learning Path", "Coding Journey", "Growth"]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>
         {/* ✨ SUBTEXT */}
        <p className="text-gray-300 mt-2 text-lg max-w-xl mx-auto">
          Every line of code began somewhere — here’s where.
        </p>

        {/* ⚡ LINE */}
        <div className="mt-2 h-1 w-32 mx-auto rounded-full bg-gradient-to-r from-green-400 to-cyan-400 animate-pulse"/>
      </motion.div>
</div>
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* 🧊 LEFT PANEL */}
          <div className="space-y-6 mt-1">

            {chapters.map((c, i) => (
              <div
                key={i}
                className="p-[1px] rounded-xl bg-gradient-to-r from-indigo-500/30 to-cyan-500/30"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4">
                  <p className="text-xs text-gray-400">CHAPTER {c.id}</p>

                  <h3 className="text-lg font-semibold mt-1">{c.title}</h3>
                  <p className="text-sm text-gray-400">{c.uni}</p>

                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-xs text-green-400">
                      {c.status}
                    </span>
                    <span className="text-xs text-gray-400">
                      {c.progress}
                    </span>
                  </div>

                  {/* progress bar */}
                  <div className="mt-2 h-[3px] bg-white/10 rounded-full">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-400 to-cyan-400"
                      style={{ width: c.progress }}
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* 🧠 TIMELINE */}
            <div className="bg-gradient-to-r from-indigo-500/30 to-cyan-500/30 backdrop-blur-xl border border-white/10 rounded-xl p-4">
              <p className="text-xs text-gray-400 mb-3">TIMELINE</p>

              <ul className="space-y-2 text-sm text-gray-300">
                <li>2024 — BCA Complete</li>
                <li>2024 — Msc Started</li>
                <li>2026 — Msc Target 🎯</li>
              </ul>
            </div>
          </div>

          {/* 🧊 RIGHT MAIN CARD */}
          <div className="md:col-span-2">
            <div className="p-[1px] rounded-2xl bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-cyan-500/30">
              <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8">

                {/* TITLE */}
                <h2 className="text-3xl font-bold mb-2">
                  Master of Science(Computer Science)
                </h2>

                <p className="text-gray-400 italic mb-6">
                  "Where AI meets architecture"
                </p>

                {/* OVERVIEW */}
                <div className="mb-6">
                  <h3 className="text-sm text-gray-400 mb-2">OVERVIEW</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Gaining hands-on experience with AI, APIs, and modern web systems.
                    Building scalable applications blending theory with real-world engineering.
                  </p>
                </div>

                {/* SKILLS */}
                <div className="mb-6">
                  <h3 className="text-sm text-gray-400 mb-3">SKILL LEVELS</h3>

                  {[
                    { name: "Full Stack Dev", val: "85%" },
                    { name: "AI / ML", val: "60%" },
                    { name: "System Design", val: "60%" },
                  ].map((s, i) => (
                    <div key={i} className="mb-3">
                      <div className="flex justify-between text-xs mb-1">
                        <span>{s.name}</span>
                        <span>{s.val}</span>
                      </div>
                      <div className="h-[3px] bg-white/10 rounded-full">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-400 to-cyan-400"
                          style={{ width: s.val }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* HIGHLIGHTS */}
                <div className="grid md:grid-cols-2 gap-4">
                   <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-sm text-gray-300">
    Implemented JWT-based authentication system for secure login and session handling
  </div>

                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-sm text-gray-300">
                    Implemented secure JWT authentication system
                  </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-sm text-gray-300">
    Developed a college portal  user management
  </div>
                </div>

                {/* TECH TAGS */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Python", "Next.js", "MongoDB", "FAST API", "React"].map(
                    (t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs border border-white/20 rounded-full bg-white/5"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* 🔥 BOTTOM CARDS */}
<div className="grid md:grid-cols-4 gap-6 mt-16 items-stretch">
 {[
  "MSc(Computer Science)",
  "Mahatma Gandhi Memorial College,Udupi",
  "Internship",
  "Open",
].map((item, i) => {
  const isCollege = i === 1;

  const Card = (
  <div
    className={`
      p-[1px] rounded-xl bg-gradient-to-r from-indigo-500/30 to-cyan-500/30 h-full group-hover:drop-shadow-[0_0_6px_rgba(0,255,255,0.8)]
      ${isCollege ? "group cursor-pointer" : ""}
    `}
  >
    <div className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl py-6 px-4 text-center flex flex-col justify-center hover:bg-white/10 transition">
      
      {/* 🔥 TITLE */}
      <p
        className={`
          text-lg font-semibold transition
          ${isCollege ? "group-hover:text-cyan-300 underline-offset-4 group-hover:underline" : ""}
        `}
      >
        {item}
      </p>

      {/* SUBTEXT */}
      <p className="text-xs text-gray-400 mt-2">
        {i === 0
          ? "Current Degree"
          : i === 1
          ? "Mangalore University"
          : i === 2
          ? "Experience"
          : "Opportunities"}
      </p>

    </div>
  </div>
);
  return isCollege ? (
    <a
      key={i}
      href="https://www.mgmudupi.ac.in"
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full text-white"
    >
      {Card}
    </a>
  ) : (
    <div key={i} className="h-full">
      {Card}
    </div>
  );
})}
</div>
      </div>
    </section>
  );
}        