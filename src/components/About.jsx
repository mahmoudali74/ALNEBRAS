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
          className="text-6xl md:text-7xl font-extrabold text-white-400 mb-4"
        >
          About ALNEBRAS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-300 max-w-3xl px-6 text-lg leading-relaxed"
        >
          ALNEBRAS is a specialized contracting company that provides comprehensive engineering and construction services across multiple sectors. With a commitment to quality, safety, and efficiency, we deliver projects that meet international standards and client expectations.
        </motion.p>
      </section>

      {/* ---------------- ABOUT SECTION ---------------- */}
      <section className="py-24 bg-gradient-to-b from-black via-blue-950/60 to-black">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
              alt="About Alnebras"
              className="rounded-3xl shadow-lg hover:shadow-blue-700/40 transition-all"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white-400 mb-6">Who We Are</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              ALNEBRAS is a specialized contracting company that provides comprehensive engineering and construction services across multiple sectors. Our expertise covers civil, mechanical, and electromechanical works for infrastructure and industrial projects. We deliver projects that meet international standards and client expectations.
            </p>
            <p className="text-gray-400 text-sm">
              We are committed to quality, safety, innovation, and sustainability in all our work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------------- CORE VALUES ---------------- */}
      <section className="py-24 bg-black/90 text-center">
        <h2 className="text-4xl font-bold text-white-400 mb-12">Our Core Values</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-6 px-6">
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
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-blue-500/30 transition"
            >
              <i className={`fa-solid ${v.icon} text-4xl text-blue-400 mb-3`}></i>
              <h3 className="text-lg font-semibold text-gray-200">{v.label}</h3>
              <p className="text-gray-400 text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- COMMITMENT SECTION ---------------- */}
      <Parallax
        bgImage="/assets/photo_5782710222236355876_y.jpg"
        strength={200}
      >
        <div className="py-32 text-center bg-black/70">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold mb-8 text-blue-400"
          >
            Our Commitment
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed px-6"
          >
            At ALNEBRAS, we are dedicated to achieving excellence in every project we deliver. Our success is built on teamwork, technical expertise, and the trust of our clients. We aim to continuously improve our performance and expand our capabilities to meet the growing demands of the market.
          </motion.p>
        </div>
      </Parallax>
      {/* ---------------- STRATEGY FORMULATION SECTION ---------------- */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-10">

          {/* Left Side - Circle Image */}
          <div className="relative flex-shrink-0">
            <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-blue-500">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                alt="Strategy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Strategy Points */}
          <div className="flex flex-col gap-6 md:pl-10">
            <h2 className="text-4xl font-bold text-white mb-6">Strategy Formulation</h2>
            {strategyPoints.map((point, index) => (
              <div key={index} className="relative bg-blue-500 text-white p-6 rounded-md shadow-lg">
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
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white-400 mb-14">Our Fields of Expertise</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Civil & Infrastructure Works",
                desc: "Comprehensive civil and structural works for residential, commercial, and industrial projects — built with precision and durability.",
                icon: "fa-building",
              },
              {
                title: "Water & Environmental Systems",
                desc: "Design, construction, and maintenance of water and wastewater networks, pumping stations, and treatment plants. Reliable and sustainable solutions for communities.",
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
                className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-lg hover:shadow-blue-500/30 transition"
              >
                <i className={`fa-solid ${f.icon} text-5xl mb-4 text-blue-400`}></i>
                <h3 className="text-2xl font-semibold mb-3 text-blue-300">{f.title}</h3>
                <p className="text-gray-300 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



              {/* FOOTER */}
              <footer className="bg-gradient-to-b from-[#0a0a0a] to-[#020617] text-gray-300 pt-16 pb-6 border-t border-blue-900 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                  >
                    <h3 className="text-3xl font-extrabold text-white mb-4 tracking-wide">
                      ALNEBRAS
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
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
                    <h4 className="text-lg font-semibold text-blue-400 mb-4">
                      Quick Links
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="/" className="hover:text-blue-400 transition">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="/about" className="hover:text-blue-400 transition">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="/projects" className="hover:text-blue-400 transition">
                          Projects
                        </a>
                      </li>
                      <li>
                        <a href="/contact" className="hover:text-blue-400 transition">
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
                    <h4 className="text-lg font-semibold text-blue-400 mb-4">
                      Contact Us
                    </h4>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <i className="fa-solid fa-phone mr-2 text-blue-400"></i>
                        +20 101 066 0096
                      </li>
                      <li>
                        <i className="fa-solid fa-envelope mr-2 text-blue-400"></i>
                        alnebras.con@gmail.com
                      </li>
                      <li>
                        <i className="fa-solid fa-location-dot mr-2 text-blue-400"></i>
                        Badr City, Cairo, Egypt
                      </li>
                    </ul>
                  </motion.div>
      
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                  >
                    <h4 className="text-lg font-semibold text-blue-400 mb-4">
                      Follow Us
                    </h4>
                    <div className="flex space-x-5 text-2xl">
                      <a
                        href="https://wa.me/201010660096"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-green-400 transition transform hover:scale-125"
                      >
                        <i className="fa-brands fa-whatsapp"></i>
                      </a>
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-500 transition transform hover:scale-125"
                      >
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                      <a
                        href="mailto:alnebras.con@gmail.com"
                        className="hover:text-red-400 transition transform hover:scale-125"
                      >
                        <i className="fa-solid fa-envelope"></i>
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-300 transition transform hover:scale-125"
                      >
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </div>
                  </motion.div>
                </div>
      
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500"
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
