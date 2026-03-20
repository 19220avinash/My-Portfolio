"use client";

import { useEffect, useRef } from "react";

export default function RotatingLogo() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = ((y / rect.height) - 0.5) * 6;
      const rotateY = ((x / rect.width) - 0.5) * -6;

      el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const reset = () => {
      el.style.transform = "rotateX(0deg) rotateY(0deg)";
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", reset);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-24 h-24 flex items-center justify-center group transition-transform duration-300"
    >
      {/* 🔵 Rotating SVG */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full animate-spin-slow group-hover:animate-spin-reverse"
      >
        <defs>
          {/* ✅ Smaller circle */}
          <path
            id="circlePath"
           d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
          />

          {/* 🌈 Soft white gradient */}
          <linearGradient id="grad" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#e5e5e5" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>

        {/* ✨ Text */}
        <text
          fill="url(#grad)"
          fontSize="13"
          fontWeight="700"   // ✅ bold fix
          letterSpacing="0"  // ✅ no spacing
          className="drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
        >
          <textPath
            href="#circlePath"
            startOffset="0%"
            textLength="360"
          >
            AVINASH • PORTFOLIO •   
          </textPath>
        </text>
      </svg>

      {/* 💡 Glow */}
      <div className="absolute w-full h-full rounded-full border border-white/20 blur-sm animate-pulse-glow"></div>

      {/* 🧠 Center */}
      <span className="absolute text-white font-bold text-xs tracking-wider">
        AVI
      </span>
    </div>
  );
}