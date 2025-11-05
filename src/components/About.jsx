/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
const strategyPoints = [
  "ALNEBRAS is powered by a skilled and experienced team that delivers high-quality engineering and construction solutions with professionalism and precision.",
  "We apply strict quality control and safety procedures to ensure every project meets international standards and is completed efficiently and safely.",
  "By adopting modern technologies and effective project management, we provide innovative, reliable, and cost-effective results that build long-term client trust."
];
export default function About() {
  return (
    <main className="bg-black text-white font-[Poppins] overflow-hidden">
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative h-[80vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-black via-blue-950/70 to-black">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-4 text-6xl font-extrabold md:text-7xl text-white-400"
        >
          About Alnbres
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-3xl px-6 text-lg leading-relaxed text-gray-300"
        >
          Alnbres is a specialized contracting company that provides comprehensive engineering and construction services across multiple sectors. With a commitment to quality, safety, and efficiency, we deliver projects that meet international standards and client expectations.
        </motion.p>
      </section>

      {/* ---------------- ABOUT SECTION ---------------- */}
      <section className="py-24 bg-gradient-to-b from-black via-blue-950/60 to-black">
        <div className="grid items-center max-w-6xl gap-16 px-6 mx-auto md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
              alt="About Alnebras"
              className="transition-all shadow-lg rounded-3xl hover:shadow-blue-700/40"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-4xl font-bold text-white-400">Who We Are</h2>
            <p className="mb-6 leading-relaxed text-gray-300">
              ALNEBRAS is a specialized contracting company that provides comprehensive engineering and construction services across multiple sectors. Our expertise covers civil, mechanical, and electromechanical works for infrastructure and industrial projects. We deliver projects that meet international standards and client expectations.
            </p>
            <p className="text-sm text-gray-400">
              We are committed to quality, safety, innovation, and sustainability in all our work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------------- CORE VALUES ---------------- */}
      <section className="py-24 text-center bg-black/90">
        <h2 className="mb-12 text-4xl font-bold text-white-400">Our Core Values</h2>
        <div className="grid max-w-6xl gap-6 px-6 mx-auto md:grid-cols-5">
          {[
            { icon: "fa-handshake", label: "Integrity", desc: "Honesty, transparency and accountability in every interaction." },
            { icon: "fa-award", label: "Quality", desc: "Rigorous standards and skilled craftsmanship for durable results." },
            { icon: "fa-shield-heart", label: "Safety", desc: "Strict health and safety practices on every site." },
            { icon: "fa-lightbulb", label: "Innovation", desc: "Leveraging modern technologies and creative solutions." },
            { icon: "fa-leaf", label: "Sustainability", desc: "Environmentally responsible methods and materials." },
          ].map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 transition shadow-lg bg-white/10 backdrop-blur-lg rounded-2xl hover:shadow-blue-500/30"
            >
              <i className={`fa-solid ${v.icon} text-4xl text-blue-400 mb-3`}></i>
              <h3 className="text-lg font-semibold text-gray-200">{v.label}</h3>
              <p className="text-sm text-gray-400">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- COMMITMENT SECTION ---------------- */}
      <Parallax
        bgImage="/assets/photo_5782710222236355904_y.jpg"
        strength={200}
      >
        <div className="py-32 text-center bg-black/70">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8 text-5xl font-bold text-blue-400"
          >
            Our Commitment
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="max-w-3xl px-6 mx-auto text-lg leading-relaxed text-gray-300"
          >
            At ALNEBRAS, we are dedicated to achieving excellence in every project we deliver. Our success is built on teamwork, technical expertise, and the trust of our clients. We aim to continuously improve our performance and expand our capabilities to meet the growing demands of the market.
          </motion.p>
        </div>
      </Parallax>
      {/* ---------------- STRATEGY FORMULATION SECTION ---------------- */}
      <section className="py-24 bg-gray-900">
        <div className="flex flex-col items-center max-w-6xl gap-10 px-6 mx-auto md:flex-row md:items-start">

          {/* Left Side - Circle Image */}
          <div className="relative flex-shrink-0">
            <div className="w-64 h-64 overflow-hidden border-8 border-blue-500 rounded-full">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                alt="Strategy"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right Side - Strategy Points */}
          <div className="flex flex-col gap-6 md:pl-10">
            <h2 className="mb-6 text-4xl font-bold text-white">Strategy Formulation</h2>
            {strategyPoints.map((point, index) => (
              <div key={index} className="relative p-6 text-white bg-blue-500 rounded-md shadow-lg">
                {/* Optional connector line */}
                <span className={`hidden md:block absolute left-[-2.5rem] top-1/2 w-10 h-0.5 bg-blue-500`} />
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- EXPERTISE SECTION ---------------- */}
      <section className="py-24 bg-gradient-to-b from-black via-blue-950/50 to-black">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <h2 className="text-4xl font-bold text-white-400 mb-14">Our Fields of Expertise</h2>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Civil & Infrastructure Works",
                desc: "Comprehensive civil and structural works for residential, commercial, and industrial projects — built with precision and durability.",
                icon: "fa-building",
              },
              {
                title: "Steel Structures & Environmental Systems",
                desc: "Execution/Construction of steel structures with all sections and profiles..",
                icon: "fa-water",
              },
              {
                title: "Electromechanical & Industrial Services",
                desc: "Complete electromechanical and electronic works for buildings, industrial facilities, and infrastructure projects ensuring operational efficiency.",
                icon: "fa-gears",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="p-10 transition shadow-lg bg-white/10 backdrop-blur-md rounded-2xl hover:shadow-blue-500/30"
              >
                <i className={`fa-solid ${f.icon} text-5xl mb-4 text-blue-400`}></i>
                <h3 className="mb-3 text-2xl font-semibold text-blue-300">{f.title}</h3>
                <p className="leading-relaxed text-gray-300">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* FOOTER */}
      <footer className="bg-gradient-to-b from-[#0a0a0a] to-[#020617] text-gray-300 pt-16 pb-6 border-t border-blue-900 overflow-hidden">
        <div className="grid gap-12 px-6 mx-auto max-w-7xl md:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="mb-4 text-3xl font-extrabold tracking-wide text-white">
              ALNEBRAS
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              A leading Egyptian contracting company delivering world-class
              engineering and construction solutions with integrity,
              innovation, and excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h4 className="mb-4 text-lg font-semibold text-blue-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="transition hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="transition hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/projects" className="transition hover:text-blue-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="transition hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h4 className="mb-4 text-lg font-semibold text-blue-400">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <i className="mr-2 text-blue-400 fa-solid fa-phone"></i>
                +20 101 066 0096
              </li>
              <li>
                <i className="mr-2 text-blue-400 fa-solid fa-envelope"></i>
                alnebras.con@gmail.com
              </li>
              <li>
                <i className="mr-2 text-blue-400 fa-solid fa-location-dot"></i>
                Badr City, Cairo, Egypt
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <h4 className="mb-4 text-lg font-semibold text-blue-400">
              Follow Us
            </h4>
            <div className="flex space-x-5 text-2xl">
              <a
                href="https://wa.me/201010660096"
                target="_blank"
                rel="noreferrer"
                className="text-5xl transition transform hover:text-green-400 hover:scale-125"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>




            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="pt-6 mt-10 text-sm text-center text-gray-500 border-t border-gray-800"
        >
          <p>
            © {new Date().getFullYear()} ALNEBRAS Contracting — All Rights
            Reserved.
          </p>
        </motion.div>
      </footer>
    </main>
  );
}
