import React from "react";

const Contact = () => {
  const hours = [
    { day: "Monday", time: "9:00AM - 6:00PM" },
    { day: "Tuesday", time: "9:00AM - 6:00PM" },
    { day: "Wednesday", time: "9:00AM - 6:00PM" },
    { day: "Thursday", time: "9:00AM - 6:00PM" },
    { day: "Friday", time: "9:00AM - 6:00PM" },
    { day: "Saturday", time: "9:00AM - 6:00PM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <section
      className="relative py-16"
      style={{
        backgroundImage: "url('./images/bg-2(1).jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Visiting Hours */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Visiting Hours
            </h1>
            <ul className="space-y-3">
              {hours.map((item, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center px-4 py-3 rounded-lg bg-white/20 backdrop-blur-md text-white shadow-md"
                >
                  <span>{item.day}</span>
                  <span
                    className={`${
                      item.time === "Closed"
                        ? "text-red-400 font-semibold"
                        : "text-gray-100"
                    }`}
                  >
                    {item.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Contact Info
            </h1>
            <div className="space-y-3">
              <div className="flex justify-between items-center px-4 py-3 rounded-lg bg-white/20 backdrop-blur-md text-white shadow-md">
                <span className="font-semibold">Office</span>
                <span>123 Street, New York, USA</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3 rounded-lg bg-white/20 backdrop-blur-md text-white shadow-md">
                <span className="font-semibold">Zoo</span>
                <span>123 Street, New York, USA</span>
              </div>
              <div className="flex justify-between px-4 py-3 rounded-lg bg-white/20 backdrop-blur-md text-white shadow-md">
                <span className="font-semibold">Ticket</span>
                <div className="text-right">
                  <p className="mb-1">+012 345 6789</p>
                  <p>ticket@example.com</p>
                </div>
              </div>
              <div className="flex justify-between px-4 py-3 rounded-lg bg-white/20 backdrop-blur-md text-white shadow-md">
                <span className="font-semibold">Support</span>
                <div className="text-right">
                  <p className="mb-1">+012 345 6789</p>
                  <p>support@example.com</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
