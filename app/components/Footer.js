"use client";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full text-white bg-black/40 backdrop-blur-xl border-t border-white/10">

      {/* 🔥 GRADIENT LINE */}
      <div className="pointer-events-none fixed inset-0 z-50 animate-flash"></div>
      <div className="h-[2px] w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></div>

      <div className="flex flex-col items-center gap-3 py-5">

        {/* TEXT WITH ANIMATION */}
      <div className="text-sm text-gray-400 hover:text-white transition flex items-center gap-2">

  <span>Built, broken, rebuilt</span>

  {/* ⚡ LIGHTNING */}
  <div className="relative flex items-center">
    
    <span className="text-yellow-300 animate-[lightning-real_1.6s_infinite] z-10">
      ⚡
    </span>

    {/* 🌩 GLOW */}
    <div className="absolute w-6 h-6 bg-yellow-300/30 blur-xl rounded-full animate-ping pointer-events-none"></div>

  </div>

  <span className="text-green-300 hover:text-green-400 font-medium">
    Avinash Poojary
  </span>

</div>

        {/* 🌐 ICONS */}
        <div className="flex gap-4">

          <a
            href="https://github.com/19220avinash"
            target="_blank"
            rel="noopener noreferrer"
           className="group p-2 rounded-full bg-white/10 hover:bg-white/20 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)]"
          >
            <FaGithub className="text-green-300 group-hover:text-green-400 transition" />
          </a>

          <a
            href="https://linkedin.com/in/Avinash-Poojary"
            target="_blank"
            rel="noopener noreferrer"
           className="group p-2 rounded-full bg-white/10 hover:bg-white/20 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)]"
          >
            <FaLinkedin className="text-green-300 group-hover:text-green-400 transition" />
          </a>

          <a
            href="https://instagram.com/a_v_i__h_e_b_r_i_07"
            target="_blank"
            rel="noopener noreferrer"
           className="group p-2 rounded-full bg-white/10 hover:bg-white/20 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)]"
          >
            <FaInstagram className="text-green-300 group-hover:text-green-400 transition" />
          </a>

        </div>

      </div>
    </footer>
  );
}