// File: MissionVision.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Leaf, Users, Shield, Target, Eye, Heart, Ticket } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function MissionVision() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const coreValues = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Conservation First",
      desc: "We safeguard endangered species through research and habitat restoration.",
      color: "emerald",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Education & Community",
      desc: "Hands-on learning, school programs, and inclusive experiences for all ages.",
      color: "blue",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ethical Care",
      desc: "World-class veterinary care and welfare standards lead everything we do.",
      color: "amber",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Our Mission & Vision
          </h2>
          <p className="text-lg text-slate-600 mt-4 max-w-3xl mx-auto">
            Dedicated to wildlife conservation, education, and ethical animal
            care for a sustainable future.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    data-aos="fade-right"
    className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300"
  >
    <div className="flex items-center mb-6">
      <div className="inline-flex items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 p-3 mr-4">
        <Target className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
    </div>
    <p className="text-slate-700 text-lg">
      To protect endangered species, advance scientific research, and
      inspire communities to actively participate in conservation
      efforts through education and engaging experiences.
    </p>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    data-aos="fade-left"
    className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300"
  >
    <div className="flex items-center mb-6">
      <div className="inline-flex items-center justify-center rounded-xl bg-amber-100 text-amber-700 p-3 mr-4">
        <Eye className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
    </div>
    <p className="text-slate-700 text-lg">
      A world where wildlife thrives in healthy habitats, and people
      live in harmony with nature, valuing biodiversity as essential to
      our collective future.
    </p>
  </motion.div>
</div>


        {/* Core Values */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Our Core Values
          </h3>
          <p className="text-slate-600 max-w-3xl mx-auto">
            These principles guide everything we do at Wildlife Sanctuary
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="rounded-2xl bg-white shadow-lg p-8 border hover:shadow-xl transition-all duration-300 group"
            >
              <div
                className={`inline-flex items-center justify-center rounded-2xl bg-${card.color}-100 text-${card.color}-700 p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {card.title}
              </h3>
              <p className="text-slate-600">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-10 text-center text-white"
        >
          <div className="max-w-3xl mx-auto">
            <Heart className="w-12 h-12 mx-auto mb-6 text-white" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join Our Conservation Efforts
            </h3>
            <p className="text-emerald-100 text-lg mb-6">
              Your support helps us continue our vital work in animal care,
              conservation, and education.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
             
              <a
                href="#adopt"
                className="px-6 py-3 bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-600 transition-colors duration-300 flex items-center gap-2 justify-center"
              >
                <Heart className="w-5 h-5" /> Adopt an Animal
              </a>
              <a
                href="#tickets"
                className="px-6 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-300 flex items-center gap-2 justify-center"
              >
                <Ticket className="w-5 h-5" /> Buy Tickets
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default MissionVision;
