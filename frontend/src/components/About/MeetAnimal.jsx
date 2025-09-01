import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Heart, MapPin, Utensils, AlertCircle } from "lucide-react";

// Section title component
function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-12" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>
      <p className="text-lg text-slate-600 mt-2 max-w-3xl mx-auto">{subtitle}</p>
    </div>
  );
}

// Status badge component
function StatusBadge({ status }) {
  const statusColors = {
    Vulnerable: "bg-amber-100 text-amber-800",
    Endangered: "bg-red-100 text-red-800",
    "Least Concern": "bg-emerald-100 text-emerald-800",
    "Near Threatened": "bg-blue-100 text-blue-800",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium shadow-sm ${statusColors[status]}`}
    >
      <AlertCircle className="w-4 h-4 mr-1" aria-hidden="true" />
      {status}
    </span>
  );
}

// Main component
function MeetAnimals() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

   const animals = [
    {
      name: "African Lion",
      img: "https://images.pexels.com/photos/29016100/pexels-photo-29016100.jpeg",
      habitat: "Savannahs and grasslands",
      diet: "Carnivore",
      status: "Vulnerable",
      description: "The majestic king of the savannah, known for its impressive mane and powerful roar.",
    },
    {
      name: "Asian Elephant",
      img: "https://images.pexels.com/photos/31730947/pexels-photo-31730947.jpeg",
      habitat: "Forests and grasslands",
      diet: "Herbivore",
      status: "Endangered",
      description: "Highly intelligent and social creatures with strong family bonds and excellent memory.",
    },
    {
      name: "Macaw Parrot",
      img: "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg",
      habitat: "Rainforests",
      diet: "Omnivore",
      status: "Least Concern",
      description: "Vibrantly colored birds known for their intelligence and ability to mimic human speech.",
    },
    {
      name: "Gentoo Penguin",
      img: "https://images.pexels.com/photos/20414000/pexels-photo-20414000.jpeg",
      habitat: "Antarctic regions",
      diet: "Carnivore",
      status: "Near Threatened",
      description: "The fastest swimming penguins, capable of reaching speeds up to 36 km/h underwater.",
    },
    {
      name: "Giant Panda",
      img: "https://images.pexels.com/photos/23910288/pexels-photo-23910288.jpeg",
      habitat: "Temperate forests in China",
      diet: "Herbivore (mainly bamboo)",
      status: "Vulnerable",
      description: "Known for their distinctive black-and-white fur and bamboo diet, pandas are a global conservation icon.",
    },
    {
      name: "Komodo Dragon",
      img: "https://images.pexels.com/photos/4011962/pexels-photo-4011962.jpeg",
      habitat: "Indonesian islands",
      diet: "Carnivore",
      status: "Endangered",
      description: "The world's largest lizard, capable of hunting large prey with venomous bites.",
    },
    {
      name: "Blue Whale",
      img: "https://images.pexels.com/photos/32228839/pexels-photo-32228839.jpeg",
      habitat: "Oceans worldwide",
      diet: "Carnivore (krill)",
      status: "Endangered",
      description: "The largest animal ever known to have lived on Earth, reaching up to 30 meters in length.",
    },
    {
      name: "Red Kangaroo",
      img: "https://images.pexels.com/photos/6394755/pexels-photo-6394755.jpeg",
      habitat: "Australian deserts and grasslands",
      diet: "Herbivore",
      status: "Least Concern",
      description: "The largest marsupial, known for its powerful hind legs and ability to leap great distances.",
    },
  ];




  const stats = [
    { value: "120+", label: "Animal Species" },
    { value: "15", label: "Conservation Programs" },
    { value: "98%", label: "Visitor Satisfaction" },
    { value: "2000+", label: "Animals Rescued" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Title */}
        <SectionTitle
          title="Meet Our Animals"
          subtitle="From majestic lions to playful penguins—get to know our residents and learn how we're protecting their future."
        />

        {/* Animal Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {animals.map((animal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group rounded-3xl overflow-hidden bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 "
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={animal.img}
                  alt={`Photo of ${animal.name}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <StatusBadge status={animal.status} />
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  {animal.name}
                </h4>
                <p className="text-slate-600 text-sm mb-3">
                  {animal.description}
                </p>
                <div className="mt-3 text-sm text-slate-700 space-y-2">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-emerald-600" />
                    <span>{animal.habitat}</span>
                  </div>
                  <div className="flex items-center">
                    <Utensils className="w-4 h-4 mr-2 text-amber-600" />
                    <span>{animal.diet}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conservation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-16 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl p-10 text-center border border-emerald-100 shadow-md"
        >
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-6">
              <Heart className="w-8 h-8 text-emerald-700" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-4">
              Conservation Matters
            </h3>
            <p className="text-emerald-700 text-lg mb-6">
              Every animal at our zoo plays a vital role in global conservation
              efforts. By visiting and supporting us, you contribute to species
              preservation and habitat protection worldwide.
            </p>
            <button
              className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-300 text-white font-semibold rounded-xl transition-colors duration-300"
              aria-label="Support our mission by donating"
            >
              Support Our Mission
              <Heart className="w-5 h-5 ml-2" aria-hidden="true" />
            </button>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="bg-white p-6 rounded-2xl text-center shadow-sm border border-slate-100 hover:shadow-md transition"
            >
              <div className="text-3xl font-bold text-emerald-700 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

export default MeetAnimals;
