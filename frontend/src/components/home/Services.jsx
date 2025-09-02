import React from "react"
import {
  FaParking,
  FaCamera,
  FaMapMarkedAlt,
  FaUtensils,
  FaShoppingBag,
  FaWifi,
  FaFutbol,
  FaHotel
} from "react-icons/fa"

const Services = () => {
  const leftServices = [
    { icon: FaParking, title: "Car Parking", desc: "Safe & spacious parking." },
    { icon: FaCamera, title: "Animal Photos", desc: "Capture zoo memories." },
    { icon: FaMapMarkedAlt, title: "Guide Services", desc: "Professional guides available." },
    { icon: FaUtensils, title: "Food & Beverages", desc: "Delicious meals & drinks." }
  ]

  const rightServices = [
    { icon: FaShoppingBag, title: "Zoo Shopping", desc: "Souvenirs, toys, and more." },
    { icon: FaWifi, title: "Free Hi-Speed WiFi", desc: "Stay connected anytime." },
    { icon: FaFutbol, title: "Playground", desc: "Fun play area for children." },
    { icon: FaHotel, title: "Rest House", desc: "Relax & refresh comfortably." }
  ]

  return (
    <div className="w-[100%] bg-gray-50 py-20 px-6 md:px-12 lg:px-20 box-border overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16">
        <p className="text-green-700 font-semibold uppercase tracking-wide mb-2">
          # Our Services
        </p>
        <h1 className="text-4xl font-extrabold text-green-900 mb-4">
          Explore Our Facilities
        </h1>
        <p className="text-gray-600 max-w-2xl">
          We provide top-notch services to make your visit comfortable,
          enjoyable, and memorable. From relaxation spots to family fun, we
          ensure a delightful experience for everyone.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto">
        {/* Left Services */}
        <div data-aos="fade-right" data-aos-delay="1000" className="lg:col-span-4 space-y-6">
          {leftServices.map((service, i) => (
            <div
              key={i}
              className="group bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-2xl transition duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative flex items-center space-x-4 mb-3">
                <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-600 transition duration-300">
                  <service.icon className="text-green-700 text-xl group-hover:text-white" />
                </div>
                <h2 className="text-lg font-semibold text-green-900 group-hover:text-green-700 transition">
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-600 relative">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div data-aos="zoom-in" className="lg:col-span-4 flex justify-center">
          <div className="relative w-72 h-72 lg:w-80 lg:h-80">
            <img
              src="./images/service.jpg"
              alt="service"
              className="w-full h-full rounded-full object-cover shadow-xl border-8 border-white"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-green-200/40 via-transparent to-green-50/10 pointer-events-none"></div>
          </div>
        </div>

        {/* Right Services */}
        <div data-aos="fade-left"  data-aos-delay="1000" className="lg:col-span-4 space-y-6">
          {rightServices.map((service, i) => (
            <div
              key={i}
              className="group bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-2xl transition duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative flex items-center space-x-4 mb-3">
                <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-600 transition duration-300">
                  <service.icon className="text-green-700 text-xl group-hover:text-white" />
                </div>
                <h2 className="text-lg font-semibold text-green-900 group-hover:text-green-700 transition">
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-600 relative">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
