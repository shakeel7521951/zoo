// File: HeroSection.jsx
import { motion } from "framer-motion";
import {
  Ticket,
  ArrowRight,
  Clock,
  MapPin,
  Heart,
  Users,
  Star,
} from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // smoother, longer animations
      once: true,
      offset: 80, // trigger earlier
      easing: "ease-in-out-sine", // more natural easing
      disable: window.innerWidth < 640 ? true : false,
    });

    setTimeout(() => {
      AOS.refresh();
    }, 500);

    return () => {
      AOS.refreshHard();
    };
  }, []);

  const blobs = [
    {
      color: "bg-emerald-400",
      style: { top: "10%", left: "5%" },
      delay: 100,
      animation: "fade-down",
    },
    {
      color: "bg-amber-400",
      style: { top: "5%", right: "10%" },
      delay: 300,
      animation: "fade-down",
      extra: "animation-delay-2000",
    },
    {
      color: "bg-emerald-600",
      style: { bottom: "10%", left: "20%" },
      delay: 500,
      animation: "fade-up",
      extra: "animation-delay-4000",
    },
  ];

  return (
    <header
      className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-amber-50 py-12 sm:py-16 md:py-28"
      aria-label="Hero section for Wildlife Sanctuary"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 opacity-10">
        {blobs.map((blob, i) => (
          <div
            key={i}
            className={`absolute w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 ${blob.color} rounded-full mix-blend-multiply filter blur-xl animate-blob ${
              blob.extra || ""
            }`}
            style={blob.style}
            data-aos={blob.animation}
            data-aos-delay={blob.delay}
            data-aos-duration="1500"
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-slate-800 mb-4 sm:mb-6 leading-snug sm:leading-tight"
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            Welcome to {" "}
            <span className="text-emerald-700 relative">
              Wildlife
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                className="absolute -top-4 -right-6 hidden sm:inline-block"
              >
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500 fill-current" />
              </motion.span>
            </span>{" "}
            <span className="text-amber-600">Zoo</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg md:text-xl text-slate-700 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-2"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Discover the wonder of wildlife, conservation, and family adventure
            in the heart of the city.
          </motion.p>

          {/* Stats */}
          <div
            className="my-6 sm:my-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {[
              { icon: Users, value: "200+", label: "Animal Species" },
              { icon: Star, value: "37", label: "Years of Care" },
              { icon: Heart, value: "98%", label: "Visitor Satisfaction" },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex items-center bg-white/80 backdrop-blur-sm rounded-xl px-3 py-2 sm:px-4 sm:py-2 shadow-sm"
                data-aos="zoom-in"
                data-aos-delay={200 + i * 200}
              >
                <stat.icon className="w-5 h-5 text-emerald-600 mr-2" />
                <span className="font-bold text-slate-800 text-sm sm:text-base">
                  {stat.value}
                </span>
                <span className="ml-1 text-slate-600 text-xs sm:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-2"
            data-aos="flip-up"
            data-aos-delay="600"
          >
            <a
              href="/ticket"
              aria-label="Buy tickets"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-300 px-5 sm:px-6 py-3 sm:py-4 font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none text-sm sm:text-base"
            >
              <Ticket className="w-4 h-4 sm:w-5 sm:h-5" /> Buy Tickets
            </a>

            <a
              href="#adopt"
              aria-label="Adopt an animal"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 hover:bg-amber-700 focus:ring-4 focus:ring-amber-300 px-5 sm:px-6 py-3 sm:py-4 font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none text-sm sm:text-base"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" /> Adopt an Animal
            </a>

            <a
              href="#mission"
              aria-label="Learn more about our mission"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-slate-100 focus:ring-4 focus:ring-slate-300 border border-slate-200 px-5 sm:px-6 py-3 sm:py-4 font-medium text-slate-800 shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none text-sm sm:text-base"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Info cards */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto px-2">
            {/* Opening Hours */}
            <article
              className="group bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-slate-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 focus-within:ring-2 focus-within:ring-emerald-400"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-offset="150"
              aria-label="Opening Hours"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-gradient-to-tr from-emerald-100 to-emerald-200 rounded-xl mr-3 sm:mr-4 group-hover:from-emerald-200 group-hover:to-emerald-300 transition-colors duration-300">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-700" aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800">
                  Opening Hours
                </h3>
              </div>
              <p className="text-slate-700 text-start text-sm sm:text-base">
                9:00 AM – 6:00 PM <span className="font-medium">Daily</span>
              </p>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 text-start">
                Last entry at <span className="font-medium">5:00 PM</span>
              </p>
            </article>

            {/* Location */}
            <article
              className="group bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-slate-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 focus-within:ring-2 focus-within:ring-amber-400"
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-duration="1200"
              data-aos-offset="150"
              aria-label="Location"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-gradient-to-tr from-amber-100 to-amber-200 rounded-xl mr-3 sm:mr-4 group-hover:from-amber-200 group-hover:to-amber-300 transition-colors duration-300">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800">
                  Location
                </h3>
              </div>
              <p className="text-slate-700 text-start text-sm sm:text-base">
                123 Conservation Way, <span className="font-medium">Green City</span>
              </p>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 text-start">
                Free parking available
              </p>
            </article>
          </div>

          {/* Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            data-aos="zoom-in-up"
            data-aos-delay="400"
            className="mt-12 sm:mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 sm:p-8 text-center text-white shadow-xl"
          >
            <div className="max-w-3xl mx-auto">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-5 sm:mb-6 bg-white/20 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                Business Hours
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
                <div className="bg-white/10 p-3 sm:p-4 rounded-lg" data-aos="fade-up" data-aos-delay="200">
                  <p className="font-semibold text-sm sm:text-base">Monday - Friday</p>
                  <p className="text-blue-100 text-xs sm:text-sm">9:00 AM - 6:00 PM</p>
                </div>
                <div className="bg-white/10 p-3 sm:p-4 rounded-lg" data-aos="fade-up" data-aos-delay="400">
                  <p className="font-semibold text-sm sm:text-base">Saturday</p>
                  <p className="text-blue-100 text-xs sm:text-sm">10:00 AM - 4:00 PM</p>
                </div>
                <div className="bg-white/10 p-3 sm:p-4 rounded-lg" data-aos="fade-up" data-aos-delay="600">
                  <p className="font-semibold text-sm sm:text-base">Sunday</p>
                  <p className="text-blue-100 text-xs sm:text-sm">Closed</p>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-4 sm:mt-6 py-2 sm:py-3 px-4 sm:px-6 bg-white/20 rounded-full inline-flex items-center text-xs sm:text-sm"
              >
                <span className="h-2 w-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                <span className="font-medium">Now open daily from 9AM to 6PM</span>
              </motion.div>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                <button className="px-5 sm:px-6 py-2 sm:py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-slate-100 transition-colors duration-300 focus:ring-4 focus:ring-white focus:outline-none text-sm sm:text-base">
                  Get Directions
                </button>
                <button className="px-5 sm:px-6 py-2 sm:py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-300 focus:ring-4 focus:ring-white focus:outline-none text-sm sm:text-base">
                  Contact Us
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        [data-aos] {
          pointer-events: none;
        }
        [data-aos].aos-animate {
          pointer-events: auto;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </header>
  );
}
