"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

  emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
  {
    from_name: form.name,
    from_email: form.email,
    message: form.message,
  },
  process.env.NEXT_PUBLIC_EMAILJS_KEY
)
      .then(
        () => {
          setLoading(false);
          alert("Message sent successfully 🚀");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          alert("Something went wrong 😢");
        }
      );
  };

  
  return (
    <section id="contact" className="py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-6">
          Get In Touch
        </h2>

        <p className="text-center text-gray-400 mb-5">
          Let’s build something amazing together 🚀
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="space-y-6  ">
          <Info icon={<FaEnvelope />}
               title="Email"
              value={
              <a  className="hover:underline text-white">
                19220avinash@gmail.com </a>}
            className="bg-gradient-to-r from-indigo-500/30 to-cyan-500/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:scale-[1.02]"/>

<Info
  icon={<FaPhoneAlt />}
  title="Phone"
  value={
    <a  className="hover:underline text-white">
      +91 9483973810
    </a>
  }
  className="bg-gradient-to-r from-indigo-500/30 to-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-[1.02]"/>

<Info
  icon={<FaMapMarkerAlt />}
  title="Location"
  value="Karnataka, India"
  className="bg-gradient-to-r from-indigo-500/30 to-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-[1.02]"
/>

<div className="flex gap-4  justify-center pt-4">

{/* GitHub */}
<a
  href="https://github.com/19220avinash"
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 bg-white/10 rounded-full hover:bg-green-500/20 transition"
>
  <FaGithub className="text-green-300 hover:text-green-400 drop-shadow-[0_0_6px_rgba(34,197,94,0.8)] transition" />
</a>

{/* LinkedIn */}
<a
  href="https://linkedin.com/in/Avinash-Poojary"
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 bg-white/10 rounded-full hover:bg-green-500/20 transition"
>
  <FaLinkedin className="text-green-300 hover:text-green-400 drop-shadow-[0_0_6px_rgba(34,197,94,0.8)] transition" />
</a>

{/* Instagram */}
<a
  href="https://instagram.com/a_v_i__h_e_b_r_i_07"
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 bg-white/10 rounded-full hover:bg-green-500/20 transition"
>
  <FaInstagram className="text-green-300 hover:text-green-400 drop-shadow-[0_0_6px_rgba(34,197,94,0.8)] transition" />
</a>

</div>
          </div>

       <motion.form
  onSubmit={handleSubmit}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  className="p-8 rounded-2xl bg-white/5 bg-gradient-to-r from-indigo-500/30 to-cyan-500/30 border border-white/10 space-y-6"
>
    <div className="w-full flex justify-center">
  <label className="text-xl font-semibold text-cyan-300 mb-">
    Share Your Opinion
  </label>
</div>
            <div className="space-y-2">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
             className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:border-cyan-400"
            />
</div>
<div className="space-y-2">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:border-cyan-400"
            />
</div>
           <div className="space-y-2">
             <label>Remarks</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your Message"
             className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:border-cyan-400"
            />
       </div>

        <button
  type="submit"
  disabled={loading}
className="w-40 mx-auto block py-3 rounded-[20px] bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold border border-white/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.7)] transition duration-300 flex items-center justify-center gap-2"
>
  {loading ? (
    <>
      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      Sending...
    </>
  ) : (
    "Send Message 🚀"
  )}
</button>
           

          </motion.form>
        </div>
      </div>
    {/* WHATSAPP FLOAT BUTTON */}
<a
  href="https://wa.me/919483973810"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-white/10 p-4 rounded-full shadow-lg z-50 animate-bounce hover:bg-green-500/20 transition"
>
  <FaWhatsapp
    size={22}
    className="text-green-300 hover:text-green-400 drop-shadow-[0_0_6px_rgba(34,197,94,0.8)] transition"
  />
</a>
    </section>
  );
}

function Info({ icon, title, value, className = "" }) {
  return (
    <div
      className={`flex items-center gap-4 p-4 rounded-xl backdrop-blur-xl border border-white/10 transition-all duration-300 ${className}`}
    >
      <div className="text-green-300 text-xl">{icon}</div>
      <div>
        <p className="text-sm text-gray-400">{title}</p>
        <p className="text-white">{value}</p>
      </div>
    </div>
  );
}