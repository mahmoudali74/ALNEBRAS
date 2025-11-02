/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import heroBg from "/assets/66b65de1-0be6-47da-b5ed-070e73a54cd8.png";
import { Parallax } from "react-parallax";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Home() {
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Performance",
        data: [500, 650, 550, 970, 1200],
        borderColor: "#ffffff",
        backgroundColor: "rgba(255,255,255,0.2)",
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { color: "#ffffff" }, grid: { display: false } },
      y: {
        min: 0,
        max: 1400,
        ticks: { color: "#ffffff", stepSize: 200 },
        grid: { color: "rgba(255,255,255,0.2)" },
      },
    },
  };

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed w-full z-50 transition-all ${scrolled ? "bg-black/70 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
          <h1 className="text-2xl font-extrabold text-white-400 tracking-wide">ALNEBRAS</h1>
          <ul className="hidden md:flex space-x-10 text-sm font-medium">
            <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="/projects" className="hover:text-blue-400 transition">Projects</a></li>
          </ul>
          <div className="md:hidden text-2xl">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </motion.nav>

      <main className="bg-black text-white font-[Poppins] overflow-hidden">
        {/* HERO */}
        <section
          className="relative h-[80vh] sm:h-[90vh] md:h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-black/70" />
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="z-10 px-4 sm:px-6 md:px-8 max-w-full sm:max-w-3xl md:max-w-4xl"
          >
            <p className="text-blue-400 tracking-widest text-xs sm:text-sm md:text-base mb-4 uppercase">
              Engineering • Construction • Innovation
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-snug sm:leading-tight md:leading-tight">
              Building a Future of Excellence
            </h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-10">
              ALNEBRAS is a specialized contracting company providing comprehensive
              engineering and construction services across civil, mechanical, and
              electromechanical sectors. With a commitment to quality, safety, and
              sustainability, we deliver world-class projects that exceed client
              expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 px-8 sm:px-10 py-2 sm:py-3 rounded-full font-semibold shadow-lg transition text-sm sm:text-base"
              >
                Discover More
              </motion.a>
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white px-8 sm:px-10 py-2 sm:py-3 rounded-full font-semibold hover:bg-white/10 transition text-sm sm:text-base"
              >
                Our Projects
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* Vision / Mission / Values */}
        <section className="py-24 bg-gradient-to-b from-black via-blue-950/80 to-black text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold mb-16 text-white-400">
              Our Vision, Mission & Values
            </h2>
            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
              {[
                { icon: "👁️", title: "Vision", text: "To be a leading and trusted contracting company recognized for excellence, innovation, and reliability in engineering and construction solutions that shape the future." },
                { icon: "🚀", title: "Mission", text: "To deliver high-quality projects with precision, innovation, and sustainability—building lasting partnerships and exceeding client expectations through excellence and integrity." },
                { icon: "💎", title: "Core Values", text: "Integrity • Quality • Safety • Innovation • Sustainability — these are the cornerstones of our identity, guiding every project we build and every relationship we form." },
              ].map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-10 shadow-lg hover:shadow-blue-500/20 transition"
                >
                  <div className="text-5xl mb-4 text-blue-400">{v.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3 text-blue-300">{v.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{v.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Slider */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-10 text-white">Featured Projects</h2>
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3500 }}
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={1}
              className="rounded-2xl overflow-hidden"
            >
              {[
                { title: "New Alamein", img: "/assets/photo_5782710222236355874_y.jpg" },
                { title: "Tourist Walkways – New Alamein", img: "/assets/photo_5782710222236355870_y.jpg" },
                { title: "Steel Hangars – Dahshour", img: "/assets/photo_5782710222236355881_y.jpg" },
                { title: "Pedestrian Bridge – Alexandria", img: "/assets/photo_5782710222236355878_y.jpg" },
                { title: "Rafel Mall – Nasr City", img: "/assets/photo_5782710222236355879_x.jpg" },
              ].map((p, i) => (
                <SwiperSlide key={i}>
                  <div className="relative">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-2xl opacity-90 hover:opacity-100 transition"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <h3 className="text-2xl font-semibold px-4">{p.title}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Performance Chart */}
        <section className="py-24 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="flex-1 bg-blue-500 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Performance Metrics</h3>
              <div className="bg-blue-700 p-6 rounded-2xl w-full max-w-full mx-auto">
                <Line data={data} options={options} height={200} />
              </div>
            </div>
            <div className="flex-1 md:pl-10">
              <h2 className="text-4xl font-bold mb-6 text-white">Performance Metrics</h2>
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
                At ALNEBRAS, performance is measured by results — on-time delivery, adherence to quality standards,
                safety compliance, and client satisfaction. We continuously monitor our processes, evaluate outcomes,
                and apply data-driven improvements to maintain efficiency and excellence across all operations.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose ALNEBRAS */}
        <section className="py-24 bg-gradient-to-b from-black to-blue-950 text-white text-center">
          <h2 className="text-4xl font-bold mb-14 text-white-400">Why Choose ALNEBRAS</h2>
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto px-6">
            {[
              { icon: "fa-solid fa-helmet-safety", title: "Expertise", text: "A team of seasoned engineers and project managers delivering exceptional results through deep technical knowledge and precision execution." },
              { icon: "fa-solid fa-award", title: "Quality Assurance", text: "We adhere to strict international quality standards to ensure every project meets the highest level of safety and excellence." },
              { icon: "fa-solid fa-clock", title: "Timely Delivery", text: "Our disciplined planning and advanced tools guarantee on-time project completion without compromising quality." },
            ].map((c, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white/10 backdrop-blur-md p-8 sm:p-10 rounded-2xl shadow-md hover:shadow-blue-500/20 transition"
              >
                <i className={`${c.icon} text-5xl mb-5 text-blue-400`}></i>
                <h3 className="text-2xl font-semibold mb-3 text-blue-300">{c.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Parallax Section */}
        <Parallax bgImage="/assets/photo_5782710222236355872_y.jpg" strength={300}>
          <div className="h-[300px] sm:h-[400px] md:h-[500px] flex flex-col justify-center items-center text-white text-center px-4 sm:px-6 md:px-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Building Tomorrow with Excellence
            </motion.h2>
            <p className="text-gray-300 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed">
              Every structure we create stands as a symbol of precision, durability, and trust — shaping Egypt’s future one project at a time.
            </p>
          </div>
        </Parallax>

        {/* FOOTER */}
        <footer className="bg-gradient-to-b from-[#0a0a0a] to-[#020617] text-gray-300 pt-16 pb-6 border-t border-blue-900 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <h3 className="text-3xl font-extrabold text-white mb-4 tracking-wide">ALNEBRAS</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                A leading Egyptian contracting company delivering world-class engineering and construction solutions with integrity, innovation, and excellence.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <h4 className="text-lg font-semibold text-blue-400 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
                <li><a href="/about" className="hover:text-blue-400 transition">About Us</a></li>
                <li><a href="/projects" className="hover:text-blue-400 transition">Projects</a></li>
                <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
              <h4 className="text-lg font-semibold text-blue-400 mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li><i className="fa-solid fa-phone mr-2 text-blue-400"></i>+20 101 066 0096</li>
                <li><i className="fa-solid fa-envelope mr-2 text-blue-400"></i>alnebras.con@gmail.com</li>
                <li><i className="fa-solid fa-location-dot mr-2 text-blue-400"></i>Badr City, Cairo, Egypt</li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}>
              <h4 className="text-lg font-semibold text-blue-400 mb-4">Follow Us</h4>
              <div className="flex space-x-5 text-2xl justify-center md:justify-start">
                <a href="https://wa.me/201010660096" target="_blank" rel="noreferrer" className="hover:text-green-400 transition transform hover:scale-125"><i className="fa-brands fa-whatsapp"></i></a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition transform hover:scale-125"><i className="fa-brands fa-facebook"></i></a>
                <a href="mailto:alnebras.con@gmail.com" className="hover:text-red-400 transition transform hover:scale-125"><i className="fa-solid fa-envelope"></i></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-300 transition transform hover:scale-125"><i className="fa-brands fa-linkedin"></i></a>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} ALNEBRAS Contracting — All Rights Reserved.</p>
          </motion.div>
        </footer>
      </main>
    </>
  );
}
