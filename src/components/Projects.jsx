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
    title: "Landscaping Works, Roads",
    location: "Latin District, New Alamein City",
    images: [
      "/assets/photo_5782710222236355874_y.jpg",
      "/assets/photo_5782710222236355872_y.jpg",
      "/assets/photo_5782710222236355873_y.jpg"
    ],
    gradient: "from-blue-900 via-blue-700 to-blue-500",
  },
  {
    title: " Tourist Walking Pathways",
    location: "Latin District, New Alamein City",
    images: [
      "/assets/photo_5782710222236355871_y.jpg",
      "/assets/photo_5782710222236355875_y.jpg",
      "/assets/photo_5782710222236355904_y.jpg"
    ],
    gradient: "from-blue-900 via-blue-700 to-blue-500",
  },
  {
    title: "Metal Works and Steel Structures – 4 Steel Hangars",
    location: "Dahshour with Engineering Authority",
    images: [
      "/assets/photo_5782710222236355881_y.jpg",
      "/assets/WhatsApp Image 2025-11-03 at 3.04.00 PM.jpeg",
      "/assets/WhatsApp Image 2025-11-03 at 3.04.01 PM.jpeg"
    ],
    gradient: "from-gray-900 via-gray-700 to-gray-500",
  },
  {
    title: "Decorative Handrail on Road C19",
    location: "New Alamein City",
    images: [
      "/assets/photo_5782710222236355905_y.jpg",
      "/assets/WhatsApp Image 2025-11-03 at 3.05.36 PM.jpeg",
      "/assets/WhatsApp Image 2025-11-03 at 3.05.37 PM.jpeg"
    ],
    gradient: "from-green-900 via-green-700 to-green-500",
  },
  {
    title: "Construction of a Bus Stop",
    location: "New Alamein City",
    images: [
      "/assets/photo_5782710222236355879_x.jpg",
      "/assets/WhatsApp Image 2025-11-03 at 3.07.01 PM.jpeg",
    ],
    gradient: "from-purple-900 via-purple-700 to-purple-500",
  },
  {
    title: "Construction of 6 Luxury Residential Buildings in the Golf Area",
    location: "Murabet Al Khoyoul City – New Administrative Capital",
    images: [
      "/assets/WhatsApp Image 2025-11-03 at 3.08.19 PM (1).jpeg",
      "/assets/WhatsApp Image 2025-11-03 at 3.08.19 PM (2).jpeg",
      "/assets/WhatsApp Image 2025-11-03 at 3.08.19 PM.jpeg"
    ],
    gradient: "from-yellow-900 via-yellow-700 to-yellow-500",
  },
  {
    title: "3 Decorative Vehicle Bridges over the Lakes",
    location: "New Alamein City",
    images: [
      "/assets/WhatsApp Image 2025-11-03 at 3.09.47 PM (1).jpeg",
      "/assets/WhatsApp Image 2025-11-03 at 3.09.47 PM.jpeg",
      "/assets/WhatsApp Image 2025-11-03 at 3.09.48 PM.jpeg"
    ],
    gradient: "from-red-900 via-red-700 to-red-500",
  },
  {
    title: "Pedestrian Bridge on Coastal Road",
    location: "Matrouh – Alexandria",
    images: [
      "/assets/WhatsApp Image 2025-11-03 at 3.10.26 PM (1).jpeg",
      "/assets/WhatsApp Image 2025-11-03 at 3.10.26 PM (2).jpeg",
      "/assets/WhatsApp Image 2025-11-03 at 3.10.26 PM.jpeg",
      "/assets/WhatsApp Image 2025-11-03 at 3.17.15 PM.jpeg",
      "/assets/WhatsApp Image 2025-11-03 at 3.17.16 PM.jpeg"
    ],
    gradient: "from-indigo-900 via-indigo-700 to-indigo-500",
  },
  {
    title: "Finishing Works for the Towers Project",
    location: "New Alamein City",
    images: [
      "/assets/photo_5782710222236355870_y.jpg",
      "/assets/WhatsApp Image 2025-11-03 at 3.11.07 PM.jpeg",
    ],
    gradient: "from-cyan-900 via-cyan-700 to-cyan-500",
  },

  {
    title: "Construction of Rafel Entertainment Mall",
    location: "Nasr City, Cairo",
    images: [
      "/assets/WhatsApp Image 2025-11-03 at 3.13.00 PM.jpeg",
      "/assets/WhatsApp Image 2025-11-03 at 3.13.00 PM (1).jpeg",
      "/assets/WhatsApp Image 2025-11-03 at 3.13.00 PM (2).jpeg"
    ],
    gradient: "from-rose-900 via-rose-700 to-rose-500",
  },
  {
    title: "Construction of Jolie Ville Hotel",
    location: "Sharm El Sheikh",
    images: [
      "/assets/WhatsApp Image 2025-11-03 at 3.13.23 PM (1).jpeg",
      "/assets/WhatsApp Image 2025-11-03 at 3.13.23 PM (2).jpeg",
      "/assets/WhatsApp Image 2025-11-03 at 3.13.23 PM (2).jpeg"
    ],
    gradient: "from-orange-900 via-orange-700 to-orange-500",
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
    <div className="min-h-screen text-white bg-gray-900">
      {/* MAIN SLIDER */}
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Dots */}
        <div className="absolute z-20 flex space-x-2 -translate-x-1/2 top-4 sm:top-6 md:top-8 left-1/2">
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
            className="absolute flex items-center justify-center w-full h-full cursor-pointer"
          >
            <motion.img
              src={projects[current].images[0]}
              alt={projects[current].title}
              className="object-cover w-full h-full shadow-2xl rounded-3xl brightness-75"
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
              className="absolute inset-0 flex flex-col items-start justify-center max-w-full px-4 sm:px-8 md:px-16 lg:px-24 sm:max-w-3xl"
            >
              <h2 className="mb-2 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl sm:mb-3 drop-shadow-lg">
                {projects[current].title}
              </h2>
              <p className="text-sm text-blue-200 sm:text-base md:text-lg lg:text-xl drop-shadow-lg">
                {projects[current].location}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute z-10 p-2 transition -translate-y-1/2 rounded-full left-2 sm:left-5 top-1/2 bg-blue-500/30 sm:p-3 hover:bg-blue-500/60"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute z-10 p-2 transition -translate-y-1/2 rounded-full right-2 sm:right-5 top-1/2 bg-blue-500/30 sm:p-3 hover:bg-blue-500/60"
        >
          &#10095;
        </button>
      </div>

      {/* FEATURED PROJECTS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-full p-6 mx-auto mt-10 space-y-6 shadow-2xl bg-gray-900/90 sm:p-10 md:p-12 rounded-3xl sm:max-w-4xl"
      >
        <h2 className="mb-6 text-3xl font-bold text-center text-white sm:text-4xl md:text-5xl">
          Our Featured Projects
        </h2>
        <ul className="space-y-2 text-sm leading-relaxed text-gray-200 list-disc list-inside sm:space-y-3 md:space-y-4 sm:text-base md:text-lg">
          {projects.map((p, i) => (
            <li
              key={i}
              className="transition cursor-pointer hover:text-blue-400"
              onClick={() => setSelectedProject(p)}
            >
              {p.title}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-black/70"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative bg-gray-900 rounded-2xl shadow-2xl w-full max-w-[90%] sm:max-w-[400px] md:max-w-2xl p-2 sm:p-4"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute z-20 text-2xl text-white top-2 right-2 hover:text-red-500"
              >
                &times;
              </button>
              <h3 className="mb-4 text-lg font-bold text-center text-blue-400 sm:text-xl">
                {selectedProject.title}
              </h3>
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
                      className="w-full max-h-[70vh] object-cover rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* QUALITY & SAFETY + COMMITMENT + COMING SOON */}
      <div className="px-4 py-16 space-y-12 sm:py-20 sm:px-10 md:px-20 sm:space-y-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl p-6 mx-auto shadow-2xl bg-gray-900/80 backdrop-blur-sm sm:p-10 md:p-12 rounded-3xl"
        >
          <h2 className="mb-6 text-4xl font-bold text-white-400">
            Quality & Safety Policy
          </h2>
          <p className="text-lg leading-relaxed text-gray-200">
            At ALNEBRAS, quality and safety are at the heart of everything we do.
            We adhere to strict quality control procedures, continuous
            monitoring, and international standards to ensure every project
            meets the highest expectations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl p-6 mx-auto shadow-2xl bg-gray-900/80 backdrop-blur-sm sm:p-10 md:p-12 rounded-3xl"
        >
          <h2 className="mb-6 text-4xl font-bold text-white-400">
            Our Commitment
          </h2>
          <p className="text-lg leading-relaxed text-gray-200">
            At ALNEBRAS, we are dedicated to achieving excellence in every
            project we deliver. Our success is built on teamwork, technical
            expertise, and the trust of our clients.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl p-8 mx-auto text-center shadow-2xl bg-blue-900/90 sm:p-12 rounded-3xl"
        >
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Coming Soon: New Mega Projects
          </h2>
          <p className="text-lg text-gray-200 sm:text-xl">
            Stay tuned for our upcoming iconic constructions across Egypt and
            beyond. Excellence, safety, and innovation will continue to define
            every project.
          </p>
          <button className="px-6 py-3 mt-6 font-bold text-white transition-all bg-blue-500 rounded-full hover:bg-blue-400">
            Contact Us
          </button>
        </motion.div>
      </div>

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
              engineering and construction solutions with integrity, innovation,
              and excellence.
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
                <i className="mr-2 text-blue-400 fa-solid fa-phone"></i> +20 101
                066 0096
              </li>
              <li>
                <i className="mr-2 text-blue-400 fa-solid fa-envelope"></i>{" "}
                alnebras.con@gmail.com
              </li>
              <li>
                <i className="mr-2 text-blue-400 fa-solid fa-location-dot"></i>{" "}
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
                className="transition transform hover:text-green-400 hover:scale-125"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            
        
            </div>
          </motion.div>
        </div>

        <div className="pt-4 mt-10 text-sm text-center text-gray-500 border-t border-gray-700">
          © {new Date().getFullYear()} ALNEBRAS Construction. All Rights
          Reserved.
        </div>
      </footer>
    </div>
  );
}
