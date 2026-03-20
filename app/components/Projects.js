"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

const projects = [
{
title: "College Portal",
desc: "Full-stack college platform with admin dashboard and JWT authentication",
tech: ["React", "Node.js","Express.js", "MongoDB"],
img:"college.jpg"
},
{
title: "Rice salinity stress Detection",
desc: "CNN-based salinity detection using deep learning",
tech: ["Python", "TensorFlow"],
img: "rice.jpg",
},
{
title: "Reel Register Management System",
desc: "MERN-based system for managing and storing real-time records efficient data handling",
tech: ["React", "Node.js","Express.js", "MongoDB"],
img: "work.png",
},
];

export default function Projects() {
return ( <section className="py-20 px-6 text-white relative"> <div className="max-w-7xl mx-auto">

    <h2 className="text-4xl text-center font-bold mb-5">Projects</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      {projects.map((project, i) => (
        <Card project={project} key={i} i={i} />
      ))}
    </div>

  </div>
</section>

);
}

function Card({ project, i }) {
const ref = useRef(null);

const handleMove = (e) => {
const rect = ref.current.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const rotateX = ((y / rect.height) - 0.5) * 10;
const rotateY = ((x / rect.width) - 0.5) * -10;

ref.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

};

const reset = () => {
ref.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
};

return (
<motion.div
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ delay: i * 0.2 }}
viewport={{ once: true }}
className="perspective-[1000px]"
> <div
     ref={ref}
     onMouseMove={handleMove}
     onMouseLeave={reset}
     className="group relative h-[420px] rounded-2xl transition-transform duration-300 flex flex-col"
   >
    {/* MAIN CARD */}
    <div className="relative h-full bg-white/10 backdrop-blur-2xl bg-gradient-to-r from-indigo-500/30 to-cyan-500/30 border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:scale-[1.02]">

      {/* IMAGE */}
      <div className="h-[45%] overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 flex-1 flex flex-col justify-between">

        {/* TITLE */}
        <h5 className="text-lg font-semibold">
          {project.title}
        </h5>

        {/* DESCRIPTION CARD */}
        <div className="mt-3 p-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md">
          <p className="text-gray-300 text-sm line-clamp-3 leading-relaxed">
            {project.desc}
          </p>
        </div>

        {/* TECH */}
        <div className="mt-3 flex flex-wrap gap-2 overflow-hidden">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 border border-white/20 rounded-full bg-white/10"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* GLOW */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="absolute w-40 h-40 bg-cyan-400/20 blur-3xl rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* GRADIENT */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition"></div>

    </div>
  </div>
</motion.div>
);
}
