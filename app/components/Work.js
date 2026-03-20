"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Production Dashboard",
    tech: "Next.js • MongoDB",
  },
  {
    title: "College Portal",
    tech: "React • Node.js",
  },
];

export default function Work() {
  return (
    <section className="py-20 px-4">
      <h2 className="text-2xl mb-10 text-center">Selected Work</h2>

      <div className="max-w-4xl mx-auto space-y-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="border-b border-gray-700 pb-6 hover:opacity-80 transition cursor-pointer"
          >
            <h3 className="text-xl">{p.title}</h3>
            <p className="text-gray-500 text-sm">{p.tech}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}