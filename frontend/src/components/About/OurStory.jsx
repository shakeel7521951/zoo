// OurStory.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Target, Heart, Zap, ChevronRight, Users } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Color mapping for Tailwind
const colorMap = {
  emerald: {
    border: "border-emerald-500",
    bg: "bg-gradient-to-r from-emerald-100 to-emerald-200",
    text: "text-emerald-700 hover:text-emerald-900",
    badge: "from-emerald-100 to-emerald-200 text-emerald-900",
  },
  blue: {
    border: "border-blue-500",
    bg: "bg-gradient-to-r from-blue-100 to-blue-200",
    text: "text-blue-700 hover:text-blue-900",
    badge: "from-blue-100 to-blue-200 text-blue-900",
  },
  amber: {
    border: "border-amber-500",
    bg: "bg-gradient-to-r from-amber-100 to-amber-200",
    text: "text-amber-700 hover:text-amber-900",
    badge: "from-amber-100 to-amber-200 text-amber-900",
  },
};

// Section Title Component
function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-16 sm:mb-20" data-aos="fade-up">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
        {title}
      </h2>
      <p className="text-base sm:text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}

// Timeline events
const timeline = [
  {
    year: "1987",
    title: "NY Zoo Opens",
    text: "Founded with 40 species and a bold vision for urban conservation.",
    icon: <Heart className="w-6 h-6" />,
    color: "emerald",
  },
  {
    year: "2016",
    title: "Wildlife Rescue Program",
    text: "Expanded rehabilitation facilities for injured native animals.",
    icon: <Target className="w-6 h-6" />,
    color: "blue",
  },
  {
    year: "2024",
    title: "Net-Zero Initiative",
    text: "Committed to renewable energy and zero-waste operations by 2030.",
    icon: <Zap className="w-6 h-6" />,
    color: "amber",
  },
];

function OurStory() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  return (
    <section className=" sm:py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionTitle
          title="Our Story"
          subtitle="A journey of care, curiosity, and conservation spanning decades."
        />

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-emerald-300 via-emerald-200 to-transparent transform -translate-x-1/2" />
          <div className="space-y-20 sm:space-y-24">
            {timeline.map((event, i) => {
              const colors = colorMap[event.color];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: i * 0.25 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Connector Dot */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`absolute left-1/2 w-6 h-6 rounded-full border-4 ${colors.border} bg-white shadow-md z-10 transform -translate-x-1/2`}
                  />

                  {/* Year Badge */}
                  <div
                    className={`md:w-1/2 mb-6 md:mb-0 ${
                      i % 2 === 0 ? "md:pl-16 text-left" : "md:pr-16 text-right"
                    }`}
                  >
                    <span
                      className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${colors.badge} font-semibold shadow text-sm sm:text-base`}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.year}
                    </span>
                  </div>

                  {/* Content Card */}
                  <div className="md:w-1/2">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className={`relative bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border ${colors.border} hover:shadow-2xl transition-all duration-500 p-6 sm:p-8`}
                    >
                      {/* Icon Badge */}
                      <div
                        className={`absolute -top-6 left-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${colors.bg} ${colors.text} shadow-lg`}
                      >
                        {event.icon}
                      </div>

                      <h4 className="text-lg sm:text-xl font-bold text-slate-900 mt-6">
                        {event.title}
                      </h4>
                      <p className="mt-3 text-slate-600 text-sm sm:text-base">
                        {event.text}
                      </p>
                      <button
                        className={`mt-5 inline-flex items-center ${colors.text} font-medium transition-colors text-sm sm:text-base`}
                      >
                        Learn More <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Future Vision CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 sm:mt-32 relative rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Background Image */}
        <div
  className="absolute inset-0 bg-cover bg-center h-screen"
  style={{
    backgroundImage:
      "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBobenVgW1aqhB8_Ck1NcozmaEJ-009Pe7Dg&s')",
  }}
></div>


          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />
          {/* Content */}
          <div className="relative z-10 p-8 sm:p-12 text-center text-white">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-md">
              Our Future Vision
            </h3>
            <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto drop-shadow-sm">
              We're expanding conservation efforts, pioneering new education
              programs, and designing sustainable habitats to protect wildlife
              for generations.
            </p>
            <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-emerald-700 font-semibold rounded-xl shadow-lg hover:bg-slate-100 transition-colors duration-300">
              Support Our Mission
              <Heart className="w-5 h-5 ml-2" />
            </button>
          </div>
        </motion.div>

        {/* Stats Section */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mt-20 sm:mt-28"
          data-aos="fade-up"
        >
          {[
            {
              value: "37",
              label: "Years of Service",
              icon: <Calendar className="w-6 h-6 sm:w-7 sm:h-7" />,
              bgImage:
                "https://images.pexels.com/photos/20787/pexels-photo.jpg",
            },
            {
              value: "200+",
              label: "Animal Species",
              icon: <Heart className="w-6 h-6 sm:w-7 sm:h-7" />,
              bgImage:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAQSUGcKXtDohjvnLLLV-yrggz_PoaMAk4VQ&s",
            },
            {
              value: "1M+",
              label: "Visitors Annually",
              icon: <Users className="w-6 h-6 sm:w-7 sm:h-7" />,
              bgImage:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9F1zUwb4LmFVQJIg-iJKHbBUGuusbia72g&s",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 p-8 sm:p-10"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center shadow-lg"
                style={{ backgroundImage: `url('${stat.bgImage}')` }}
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40" />
              {/* Content */}
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-xl mb-4 mx-auto">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-white/90 font-medium text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStory;
