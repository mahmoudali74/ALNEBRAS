// UltimateProjectsPage.jsx
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const projects = [
  {
    title: "Landscaping Works, Roads, and Tourist Walking Pathways",
    location: "Latin District, New Alamein City",
    images: [
      "/assets/photo_5782710222236355874_y.jpg",
      "/assets/photo_5782710222236355875_y.jpg",
    ],
    gradient: "from-blue-900 via-blue-700 to-blue-500",
  },
  {
    title: "Metal Works and Steel Structures – 4 Steel Hangars",
    location: "Dahshour with Engineering Authority",
    images: [
      "/assets/photo_5782710222236355881_y.jpg",
      "/assets/photo_5782710222236355882_y.jpg",
    ],
    gradient: "from-gray-900 via-gray-700 to-gray-500",
  },
  {
    title: "Decorative Handrail on Road C19",
    location: "New Alamein City",
    images: [
      "/assets/photo_5782710222236355871_y.jpg",
      "/assets/photo_5782710222236355872_y.jpg",
    ],
    gradient: "from-green-900 via-green-700 to-green-500",
  },
  {
    title: "Construction of a Bus Stop",
    location: "New Alamein City",
    images: [
      "/assets/photo_5782710222236355879_x.jpg",
      "/assets/photo_5782710222236355880_x.jpg",
    ],
    gradient: "from-purple-900 via-purple-700 to-purple-500",
  },
  {
    title: "3 Decorative Vehicle Bridges over the Lakes",
    location: "New Alamein City",
    images: [
      "/assets/photo_5782710222236355904_y.jpg",
      "/assets/photo_5782710222236355905_y.jpg",
    ],
    gradient: "from-red-900 via-red-700 to-red-500",
  },
  {
    title: "Pedestrian Bridge on Coastal Road",
    location: "Matrouh – Alexandria",
    images: [
      "/assets/photo_5782710222236355905_y.jpg",
      "/assets/photo_5782710222236355906_y.jpg",
    ],
    gradient: "from-indigo-900 via-indigo-700 to-indigo-500",
  },
];

export default function UltimateProjectsPage() {
  const [current, setCurrent] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* MAIN SLIDER */}
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Dots */}
        <div className="absolute top-4 sm:top-6 md:top-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`rounded-full transition ${idx === current
                  ? "bg-blue-400 w-3 h-3 sm:w-4 sm:h-4 shadow-lg"
                  : "bg-gray-400/50 w-2 h-2 sm:w-3 sm:h-3 hover:bg-blue-300"
                }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.95, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.95, rotateY: -15 }}
            transition={{ duration: 1 }}
            className="absolute w-full h-full flex items-center justify-center cursor-pointer"
          >
            <motion.img
              src={projects[current].images[0]}
              alt={projects[current].title}
              className="w-full h-full object-cover rounded-3xl shadow-2xl brightness-75"
              whileHover={{
                scale: 1.05,
                rotateZ: 1,
                filter: "brightness(1.15)",
              }}
              transition={{ duration: 0.5 }}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-r ${projects[current].gradient} opacity-60 rounded-3xl`}
            />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-8 md:px-16 lg:px-24 max-w-full sm:max-w-3xl"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 drop-shadow-lg">
                {projects[current].title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-200 drop-shadow-lg">
                {projects[current].location}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 bg-blue-500/30 sm:p-3 p-2 rounded-full hover:bg-blue-500/60 transition z-10"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 bg-blue-500/30 sm:p-3 p-2 rounded-full hover:bg-blue-500/60 transition z-10"
        >
          &#10095;
        </button>
      </div>

      {/* Featured Projects Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900/90 p-6 sm:p-10 md:p-12 rounded-3xl shadow-2xl max-w-full sm:max-w-4xl mx-auto space-y-6 mt-10"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white text-center">
          Our Featured Projects
        </h2>
        <ul className="list-disc list-inside space-y-2 sm:space-y-3 md:space-y-4 text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
          {projects.map((p, i) => (
            <li
              key={i}
              className="cursor-pointer hover:text-blue-400 transition"
              onClick={() => setSelectedProject(p)}
            >
              {p.title}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* MODAL POPUP */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-2"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative bg-gray-900 rounded-2xl shadow-2xl w-full max-w-[90%] sm:max-w-[400px] md:max-w-2xl p-2 sm:p-4"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-2 text-white text-2xl hover:text-red-500 z-20"
              >
                &times;
              </button>

              <h3 className="text-center text-blue-400 text-lg sm:text-xl font-bold mb-4">
                {selectedProject.title}
              </h3>

              {/* Swiper for project images */}
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                pagination={{ clickable: true }}
                navigation
                autoplay={{ delay: 4000 }}
                loop
                className="rounded-lg"
              >
                {selectedProject.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`${selectedProject.title} ${idx + 1}`}
                      className="w-full max-h-[60vh] sm:max-h-[70vh] md:max-h-[80vh] object-cover rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* QUALITY & SAFETY */} <div className="py-16 sm:py-20 px-4 sm:px-10 md:px-20 space-y-12 sm:space-y-16"> <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="bg-gray-900/80 backdrop-blur-sm p-6 sm:p-10 md:p-12 rounded-3xl shadow-2xl max-w-full sm:max-w-3xl md:max-w-4xl mx-auto" > <h2 className="text-4xl font-bold mb-6 text-white-400"> Quality & Safety Policy </h2> <p className="text-gray-200 text-lg leading-relaxed"> At ALNEBRAS, quality and safety are at the heart of everything we do. We adhere to strict quality control procedures, continuous monitoring, and international standards to ensure every project meets the highest expectations. Our safety policy promotes accident-free worksites and protects both our employees and the environment. </p> </motion.div> <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="bg-gray-900/80 backdrop-blur-sm p-6 sm:p-10 md:p-12 rounded-3xl shadow-2xl max-w-full sm:max-w-3xl md:max-w-4xl mx-auto" > <h2 className="text-4xl font-bold mb-6 text-white-400"> Our Commitment </h2> <p className="text-gray-200 text-lg leading-relaxed"> At ALNEBRAS, we are dedicated to achieving excellence in every project we deliver. Our success is built on teamwork, technical expertise, and the trust of our clients. We aim to continuously improve our performance and expand our capabilities to meet the growing demands of the market. </p> </motion.div> {/* Coming Soon */} <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-blue-900/90 p-8 sm:p-12 rounded-3xl shadow-2xl max-w-full sm:max-w-3xl md:max-w-4xl mx-auto text-center" > <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white"> Coming Soon: New Mega Projects </h2> <p className="text-gray-200 text-lg sm:text-xl"> Stay tuned for our upcoming iconic constructions across Egypt and beyond. Excellence, safety, and innovation will continue to define every project. </p> <button className="mt-6 bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-6 rounded-full transition-all"> Contact Us </button> </motion.div> </div> {/* FOOTER */} <footer className="bg-gradient-to-b from-[#0a0a0a] to-[#020617] text-gray-300 pt-16 pb-6 border-t border-blue-900 overflow-hidden"> <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12"> <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} > <h3 className="text-3xl font-extrabold text-white mb-4 tracking-wide"> ALNEBRAS </h3> <p className="text-gray-400 leading-relaxed text-sm"> A leading Egyptian contracting company delivering world-class engineering and construction solutions with integrity, innovation, and excellence. </p> </motion.div> <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} > <h4 className="text-lg font-semibold text-blue-400 mb-4"> Quick Links </h4> <ul className="space-y-2 text-sm"> <li> <a href="/" className="hover:text-blue-400 transition"> Home </a> </li> <li> <a href="/about" className="hover:text-blue-400 transition"> About Us </a> </li> <li> <a href="/projects" className="hover:text-blue-400 transition"> Projects </a> </li> <li> <a href="/contact" className="hover:text-blue-400 transition"> Contact </a> </li> </ul> </motion.div> <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} > <h4 className="text-lg font-semibold text-blue-400 mb-4"> Contact Us </h4> <ul className="space-y-3 text-sm"> <li> <i className="fa-solid fa-phone mr-2 text-blue-400"></i> +20 101 066 0096 </li> <li> <i className="fa-solid fa-envelope mr-2 text-blue-400"></i> alnebras.con@gmail.com </li> <li> <i className="fa-solid fa-location-dot mr-2 text-blue-400"></i> Badr City, Cairo, Egypt </li> </ul> </motion.div> <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }} > <h4 className="text-lg font-semibold text-blue-400 mb-4"> Follow Us </h4> <div className="flex space-x-5 text-2xl"> <a href="https://wa.me/201010660096" target="_blank" rel="noreferrer" className="hover:text-green-400 transition transform hover:scale-125" > <i className="fa-brands fa-whatsapp"></i> </a> <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition transform hover:scale-125" > <i className="fa-brands fa-facebook"></i> </a> <a href="mailto:alnebras.con@gmail.com" className="hover:text-red-400 transition transform hover:scale-125" > <i className="fa-solid fa-envelope"></i> </a> <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-300 transition transform hover:scale-125" > <i className="fa-brands fa-linkedin"></i> </a> </div> </motion.div> </div> <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500" > <p>© {new Date().getFullYear()} ALNEBRAS Contracting — All Rights Reserved.</p> </motion.div> </footer>
    </div>
  );
}
