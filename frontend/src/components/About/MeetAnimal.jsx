import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Heart, MapPin, Utensils, AlertCircle } from "lucide-react";

// Section title component
function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-12" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-extrabold text-green-900">
        {title}
      </h2>
      <p className="text-lg text-slate-600 mt-2 max-w-3xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}

// Status badge component
function StatusBadge({ status }) {
  const statusColors = {
  Vulnerable: "bg-yellow-700 text-white",      // darker yellow
  Endangered: "bg-red-800 text-white",        // dark red
  "Least Concern": "bg-green-900 text-white", // dark green
  "Near Threatened": "bg-blue-800 text-white" // dark blue
};

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold shadow-sm ${statusColors[status]}`}
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
      duration: 900,
      once: true,
      offset: 120,
    });
  }, []);

  const animals = [
    {
      name: "African Lion",
      img: "https://images.pexels.com/photos/29016100/pexels-photo-29016100.jpeg",
      habitat: "Savannahs and grasslands",
      diet: "Carnivore",
      status: "Vulnerable",
      description:
        "The majestic king of the savannah, known for its impressive mane and powerful roar.",
    },
    {
      name: "Asian Elephant",
      img: "https://images.pexels.com/photos/31730947/pexels-photo-31730947.jpeg",
      habitat: "Forests and grasslands",
      diet: "Herbivore",
      status: "Endangered",
      description:
        "Highly intelligent and social creatures with strong family bonds and excellent memory.",
    },
    {
      name: "Macaw Parrot",
      img: "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg",
      habitat: "Rainforests",
      diet: "Omnivore",
      status: "Least Concern",
      description:
        "Vibrantly colored birds known for their intelligence and ability to mimic human speech.",
    },
    {
      name: "Gentoo Penguin",
      img: "https://images.pexels.com/photos/20414000/pexels-photo-20414000.jpeg",
      habitat: "Antarctic regions",
      diet: "Carnivore",
      status: "Near Threatened",
      description:
        "The fastest swimming penguins, capable of reaching speeds up to 36 km/h underwater.",
    },
    {
      name: "Giant Panda",
      img: "https://images.pexels.com/photos/23910288/pexels-photo-23910288.jpeg",
      habitat: "Temperate forests in China",
      diet: "Herbivore (mainly bamboo)",
      status: "Vulnerable",
      description:
        "Known for their distinctive black-and-white fur and bamboo diet, pandas are a global conservation icon.",
    },
    {
      name: "Komodo Dragon",
      img: "https://images.pexels.com/photos/4011962/pexels-photo-4011962.jpeg",
      habitat: "Indonesian islands",
      diet: "Carnivore",
      status: "Endangered",
      description:
        "The world's largest lizard, capable of hunting large prey with venomous bites.",
    },
    {
      name: "Blue Whale",
      img: "https://images.pexels.com/photos/32228839/pexels-photo-32228839.jpeg",
      habitat: "Oceans worldwide",
      diet: "Carnivore (krill)",
      status: "Endangered",
      description:
        "The largest animal ever known to have lived on Earth, reaching up to 30 meters in length.",
    },
    {
      name: "Red Kangaroo",
      img: "https://images.pexels.com/photos/6394755/pexels-photo-6394755.jpeg",
      habitat: "Australian deserts and grasslands",
      diet: "Herbivore",
      status: "Least Concern",
      description:
        "The largest marsupial, known for its powerful hind legs and ability to leap great distances.",
    },
  ];

  const stats = [
    { value: "120+", label: "Animal Species" },
    { value: "15", label: "Conservation Programs" },
    { value: "98%", label: "Visitor Satisfaction" },
    { value: "2000+", label: "Animals Rescued" },
  ];

  // Card animation variants
  const cardVariants = {
    offscreen: { y: 40, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.3, duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle
          title="Meet Our Animals"
          subtitle="From majestic lions to playful penguins—get to know our residents and learn how we're protecting their future."
        />

        {/* Animal Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {animals.map((animal, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-md ring-1 ring-slate-200 hover:ring-[#fdc500] hover:shadow-xl transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={animal.img}
                  alt={`Photo of ${animal.name}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-[#fdc500]/20 opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute top-4 right-4">
                  <StatusBadge status={animal.status} />
                </div>
              </div>
              <div className="p-5 relative z-10">
                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-green-900 transition-colors duration-500">
                  {animal.name}
                </h4>
                <p className="text-slate-600 text-sm mb-3 group-hover:text-green-900 transition-colors duration-500">
                  {animal.description}
                </p>
                <div className="mt-3 text-sm text-slate-700 space-y-2">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-[#fdc500] group-hover:text-green-900 transition-colors duration-500" />
                    <span>{animal.habitat}</span>
                  </div>
                  <div className="flex items-center">
                    <Utensils className="w-4 h-4 mr-2 text-green-900 group-hover:text-[#fdc500] transition-colors duration-500" />
                    <span>{animal.diet}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conservation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          data-aos="fade-up"
          className="mt-20 rounded-3xl p-12 text-center shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-r from-green-900 to-[#fdc500]"
        >
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6 shadow-md">
              <Heart className="w-10 h-10 text-[#fdc500]" />
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Conservation Matters
            </h3>
            <p className="text-white/90 text-lg mb-6">
              Every animal at our zoo plays a vital role in global conservation
              efforts. By visiting and supporting us, you contribute to species
              preservation and habitat protection worldwide.
            </p>
            <motion.button
              whileHover={{ scale: 1.08, y: -3 }}
              className="inline-flex items-center px-8 py-4 bg-[#fdc500] hover:bg-yellow-400 text-green-900 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Support our mission by donating"
            >
              Support Our Mission
              <Heart className="w-5 h-5 ml-2" aria-hidden="true" />
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.25 },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white p-8 rounded-2xl text-center shadow-md border border-slate-100 hover:border-[#fdc500] hover:shadow-lg transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay={i * 150}
            >
              <div className="text-4xl font-extrabold text-green-900 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

export default MeetAnimals;
