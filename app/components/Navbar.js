"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import RotatingLogo from "./RotatingLogo";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    {id:"skills",label:"Skills"},
    {id:"education",label:"Education"},
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

 useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollProgress((scrollY / height) * 100);

    let current = "home";

    navItems.forEach(({ id }) => {
      const sec = document.getElementById(id);
      if (sec) {
        const top = sec.offsetTop - 120; // offset for navbar
        if (scrollY >= top) {
          current = id;
        }
      }
    });

    setActive(current);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [navItems]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
    setOpen(false);
  };

  return (
    <>
      {/* 🔥 Scroll Progress */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[60]">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 🔥 Logo */}
      <div className="fixed top-5 left-5 z-50">
        <RotatingLogo />
      </div>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-3xl"
      >
        <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">

          <div className="flex items-center justify-between px-6 py-3 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/10">

            {/* 🧭 Desktop Nav */}
            <div className="hidden md:flex flex-1 justify-center items-center gap-6">
              {navItems.map((item, i) => (
                <motion.button
                  key={i}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-4 py-1.5 text-sm"
                >
                  {active === item.id && (
                    <motion.span
                      layoutId="pill"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                      className="absolute inset-0 bg-white/10 rounded-full"
                    />
                  )}

                  <span
                    className={`relative z-10 ${
                      active === item.id
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>

                  {active === item.id && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full" />
                  )}
                </motion.button>
              ))}
            </div>

            {/* 📱 Mobile Toggle */}
            <div
              className="md:hidden text-white text-2xl cursor-pointer ml-auto"
              onClick={() => setOpen(!open)}
            >
              ☰
            </div>
          </div>
        </div>

        {/* 📱 Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: open ? "auto" : 0,
            opacity: open ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden mt-2 rounded-xl bg-black/90 backdrop-blur-xl border border-white/10"
        >
          <div className="px-6 py-4 flex flex-col gap-3">
            {navItems.map((item, i) => (
              <motion.button
                key={i}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)} // ✅ FIXED
                className={`text-left px-3 py-2 rounded-lg transition ${
                  active === item.id // ✅ FIXED
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label} {/* ✅ FIXED */}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}