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
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed w-full z-50 transition-all ${scrolled ? "bg-black/70 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
      >
        <div className="flex items-center justify-between px-6 py-4 mx-auto text-white max-w-7xl">
          <a className="flex items-center text-3xl text-blue-400">
            <img
              src="/assets/123.png"
              alt="ALNEBRAS"
              className="h-20 w-auto md:h-24 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-transform duration-300 hover:scale-105"
            />
          </a>
          {/* القوائم للكبير */}
          <ul className="hidden space-x-10 text-sm font-medium md:flex">
            <li><a href="/" className="transition hover:text-blue-400">Home</a></li>
            <li><a href="/about" className="transition hover:text-blue-400">About</a></li>
            <li><a href="/projects" className="transition hover:text-blue-400">Projects</a></li>
          </ul>

          {/* أيقونة الهامبرجر للقوائم الصغيرة */}
          <div className="text-2xl cursor-pointer md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>

        {/* القوائم للموبايل */}
        {isOpen && (
          <ul className="px-6 py-4 space-y-3 text-white bg-black md:hidden">
            <li><a href="/" className="transition hover:text-blue-400">Home</a></li>
            <li><a href="/about" className="transition hover:text-blue-400">About</a></li>
            <li><a href="/projects" className="transition hover:text-blue-400">Projects</a></li>
          </ul>
        )}
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
            className="z-10 max-w-full px-4 sm:px-6 md:px-8 sm:max-w-3xl md:max-w-4xl"
          >
            <p className="mb-4 text-xs tracking-widest text-blue-400 uppercase sm:text-sm md:text-base">
              Engineering • Construction • Innovation
            </p>
            <h1 className="mb-4 text-3xl font-extrabold leading-snug sm:text-4xl md:text-5xl lg:text-6xl sm:mb-6 sm:leading-tight md:leading-tight">
              Building a Future of Excellence
            </h1>
            <p className="mb-8 text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg lg:text-xl sm:mb-10">
              ALNEBRAS is a specialized contracting company providing comprehensive
              engineering and construction services across civil, mechanical, and
              electromechanical sectors. With a commitment to quality, safety, and
              sustainability, we deliver world-class projects that exceed client
              expectations.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-2 text-sm font-semibold transition bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 sm:px-10 sm:py-3 sm:text-base"
              >
                Discover More
              </motion.a>
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-2 text-sm font-semibold transition border-2 border-white rounded-full sm:px-10 sm:py-3 hover:bg-white/10 sm:text-base"
              >
                Our Projects
              </motion.a>
            </div>
          </motion.div>
        </section>
        {/* Our Team Slider */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl px-6 mx-auto text-center">
            <h2 className="mb-10 text-4xl font-bold text-white">Our Team</h2>
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3500 }}
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={1}
              className="overflow-hidden rounded-2xl"
            >
              {[
                { name: "Our Team", img: "/assets/photo_5782710222236355876_y.jpg" },

              ].map((member, i) => (
                <SwiperSlide key={i}>
                  <div className="relative">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-2xl opacity-90 hover:opacity-100 transition"
                    />

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Vision / Mission / Values */}
        <section className="py-24 text-white bg-gradient-to-b from-black via-blue-950/80 to-black">
          <div className="max-w-6xl px-6 mx-auto text-center">
            <h2 className="mb-16 text-5xl font-bold text-white-400">
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
                  className="p-8 transition shadow-lg bg-white/10 backdrop-blur-md rounded-2xl sm:p-10 hover:shadow-blue-500/20"
                >
                  <div className="mb-4 text-5xl text-blue-400">{v.icon}</div>
                  <h3 className="mb-3 text-2xl font-semibold text-blue-300">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-300 sm:text-base">{v.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Slider */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl px-6 mx-auto text-center">
            <h2 className="mb-10 text-4xl font-bold text-white">Featured Projects</h2>
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3500 }}
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={1}
              className="overflow-hidden rounded-2xl"
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
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <h3 className="px-4 text-2xl font-semibold">{p.title}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Performance Chart */}
        <section className="py-24 text-white bg-gray-900">
          <div className="flex flex-col items-center max-w-6xl gap-10 px-6 mx-auto md:flex-row md:items-start">
            <div className="flex-1 p-6 bg-blue-500 shadow-lg rounded-2xl">
              <h3 className="mb-4 text-xl font-semibold">Performance Metrics</h3>
              <div className="w-full max-w-full p-6 mx-auto bg-blue-700 rounded-2xl">
                <Line data={data} options={options} height={200} />
              </div>
            </div>
            <div className="flex-1 md:pl-10">
              <h2 className="mb-6 text-4xl font-bold text-white">Performance Metrics</h2>
              <p className="text-lg leading-relaxed text-white/80 sm:text-xl">
                At ALNEBRAS, performance is measured by results — on-time delivery, adherence to quality standards,
                safety compliance, and client satisfaction. We continuously monitor our processes, evaluate outcomes,
                and apply data-driven improvements to maintain efficiency and excellence across all operations.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose ALNEBRAS */}
        <section className="py-24 text-center text-white bg-gradient-to-b from-black to-blue-950">
          <h2 className="text-4xl font-bold mb-14 text-white-400">Why Choose ALNEBRAS</h2>
          <div className="grid max-w-6xl gap-10 px-6 mx-auto sm:grid-cols-1 md:grid-cols-3">
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
                className="p-8 transition shadow-md bg-white/10 backdrop-blur-md sm:p-10 rounded-2xl hover:shadow-blue-500/20"
              >
                <i className={`${c.icon} text-5xl mb-5 text-blue-400`}></i>
                <h3 className="mb-3 text-2xl font-semibold text-blue-300">{c.title}</h3>
                <p className="text-sm leading-relaxed text-gray-300 sm:text-base">{c.text}</p>
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
              className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Building Tomorrow with Excellence
            </motion.h2>
            <p className="max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
              Every structure we create stands as a symbol of precision, durability, and trust — shaping Egypt’s future one project at a time.
            </p>
          </div>
        </Parallax>

        {/* FOOTER */}
        <footer className="bg-gradient-to-b from-[#0a0a0a] to-[#020617] text-gray-300 pt-16 pb-6 border-t border-blue-900 overflow-hidden">
          <div className="grid gap-12 px-6 mx-auto max-w-7xl sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <h3 className="mb-4 text-3xl font-extrabold tracking-wide text-white">ALNEBRAS</h3>
              <p className="text-sm leading-relaxed text-gray-400">
                A leading Egyptian contracting company delivering world-class engineering and construction solutions with integrity, innovation, and excellence.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <h4 className="mb-4 text-lg font-semibold text-blue-400">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="transition hover:text-blue-400">Home</a></li>
                <li><a href="/about" className="transition hover:text-blue-400">About Us</a></li>
                <li><a href="/projects" className="transition hover:text-blue-400">Projects</a></li>
                <li><a href="/contact" className="transition hover:text-blue-400">Contact</a></li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
              <h4 className="mb-4 text-lg font-semibold text-blue-400">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li><i className="mr-2 text-blue-400 fa-solid fa-phone"></i>+20 101 066 0096</li>
                <li><i className="mr-2 text-blue-400 fa-solid fa-envelope"></i>alnebras.con@gmail.com</li>
                <li><i className="mr-2 text-blue-400 fa-solid fa-location-dot"></i>Badr City, Cairo, Egypt</li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}>
              <h4 className="mb-4 text-lg font-semibold text-blue-400">Follow Us</h4>
              <div className="flex justify-center space-x-5 text-2xl md:justify-start">
                <a href="https://wa.me/201010660096" target="_blank" rel="noreferrer" className="transition transform hover:text-green-400 hover:scale-125"><i className="fa-brands fa-whatsapp"></i></a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="transition transform hover:text-blue-500 hover:scale-125"><i className="fa-brands fa-facebook"></i></a>
                <a href="mailto:alnebras.con@gmail.com" className="transition transform hover:text-red-400 hover:scale-125"><i className="fa-solid fa-envelope"></i></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition transform hover:text-blue-300 hover:scale-125"><i className="fa-brands fa-linkedin"></i></a>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className="pt-6 mt-10 text-sm text-center text-gray-500 border-t border-gray-800">
            <p>© {new Date().getFullYear()} ALNEBRAS Contracting — All Rights Reserved.</p>
          </motion.div>
        </footer>
      </main>
    </>
  );
}
