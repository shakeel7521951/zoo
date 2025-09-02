import React from "react";
import { FaPaw, FaUsers, FaCertificate, FaShieldAlt } from "react-icons/fa";

const ZooFacts = () => {
  const stats = [
    { icon: <FaPaw className="text-[#2EB872] text-5xl mb-3" />, number: 12345, label: "Total Animals" },
    { icon: <FaUsers className="text-[#2EB872] text-5xl mb-3" />, number: 6789, label: "Daily Visitors" },
    { icon: <FaCertificate className="text-[#2EB872] text-5xl mb-3" />, number: 2345, label: "Total Memberships" },
    { icon: <FaShieldAlt className="text-[#2EB872] text-5xl mb-3" />, number: 4567, label: "Save Wildlife" },
  ];

  return (
    <section className="relative">
      {/* Background with black overlay */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16"
        style={{ backgroundImage: "url('./images/bg-1.jpg')" }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/75"></div>

        {/* Content */}
        <div className="relative container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((state, index) => (
              <div
                key={index}
                className="relative group p-6 flex flex-col items-center justify-center 
                           rounded-xl transition-all duration-500 
                           hover:scale-105 
                           cursor-pointer"
                data-aos="zoom-in"              
                data-aos-delay={index * 200}    
                data-aos-duration="1000"        
                data-aos-easing="ease-in-out"  
              >
                {/* Icon */}
                <div className="flex justify-center">{state.icon}</div>

                {/* Number */}
                <h1 className="text-white text-4xl font-extrabold mt-2 mb-1">
                  {state.number.toLocaleString()}
                </h1>

                {/* Label */}
                <p className="text-gray-300 text-lg font-medium">{state.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZooFacts;
