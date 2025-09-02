// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import {
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaFileAlt,
//   FaComments,
//   FaQuestionCircle,
//   FaPaperPlane,
//   FaUser,
//   FaHeading,
//   FaLeaf,
//   FaPaw,
//   FaHeart,
//   FaPhoneAlt,
// } from "react-icons/fa";

// export default function ContactForm() {
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       easing: "ease-out-cubic",
//     });
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitted(true);
//     setTimeout(() => setIsSubmitted(false), 3000);
//   };

//   return (
//     <div className="relative max-w-8xl mx-auto py-12 px-4 bg-gradient-to-b from-green-50 to-emerald-50">
//       {/* Decorative elements */}
//       <div className="absolute left-4 sm:left-10 top-10 sm:top-20 opacity-10">
//         <FaPaw className="text-4xl sm:text-6xl text-green-600" />
//       </div>
//       <div className="absolute right-4 sm:right-10 bottom-10 sm:bottom-20 opacity-10">
//         <FaLeaf className="text-4xl sm:text-6xl text-green-600" />
//       </div>

//       {/* Heading */}
//       <div className="text-center mb-12 sm:mb-16 relative" data-aos="fade-up">
//         <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full"></div>
//         <h1
//           className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-serif bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-emerald-800"
//           data-aos="fade-down"
//           data-aos-delay="200"
//         >
//           Contact Our Zoo Team
//         </h1>
//         <p
//           className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
//           data-aos="fade-up"
//           data-aos-delay="300"
//         >
//           Have questions about tickets, animals, or events? Reach out and we'll
//           be happy to help!
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative">
//         {/* Contact Form */}
//         <div
//           className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-green-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
//           data-aos="fade-up"
//         >
//           <div className="bg-gradient-to-r from-green-600 to-emerald-700 py-6 px-6 sm:px-8 relative overflow-hidden">
//             <div className="absolute -right-4 -top-4 w-20 sm:w-24 h-20 sm:h-24 bg-green-500 rounded-full opacity-20"></div>
//             <div className="absolute -left-4 -bottom-4 w-12 sm:w-16 h-12 sm:h-16 bg-emerald-400 rounded-full opacity-20"></div>

//             <h2 className="text-white text-xl sm:text-2xl font-semibold flex items-center gap-2 relative z-10">
//               <FaPaperPlane className="text-yellow-300 animate-pulse" />
//               Send us a Message
//             </h2>
//             <p className="text-green-100 mt-1 text-sm sm:text-base relative z-10">
//               Our zookeepers reply as soon as possible
//             </p>
//           </div>

//           {/* Form */}
//           <form className="p-8 space-y-6" onSubmit={handleSubmit}>
//             {/* Name */}
//             <div className="relative group">
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 <FaUser className="text-green-500 group-hover:text-emerald-600 transition-colors duration-300" />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Your Full Name"
//                 className="w-full border border-green-200 rounded-xl pl-12 p-4 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 group-hover:shadow-lg group-hover:border-green-300"
//                 required
//               />
//             </div>

//             {/* Email */}
//             <div className="relative group">
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 <FaEnvelope className="text-green-500 group-hover:text-emerald-600 transition-colors duration-300" />
//               </div>
//               <input
//                 type="email"
//                 placeholder="Your Email Address"
//                 className="w-full border border-green-200 rounded-xl pl-12 p-4 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 group-hover:shadow-lg group-hover:border-green-300"
//                 required
//               />
//             </div>

//             {/* Topic */}
//             <div className="relative group">
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 <FaFileAlt className="text-green-500 group-hover:text-emerald-600 transition-colors duration-300" />
//               </div>
//               <select className="w-full border border-green-200 rounded-xl pl-12 p-4 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 group-hover:shadow-lg group-hover:border-green-300 appearance-none bg-white">
//                 <option>Choose a Topic</option>
//                 <option>Ticket Information</option>
//                 <option>Animal Adoption</option>
//                 <option>Zoo Events</option>
//                 <option>General Inquiry</option>
//               </select>
//             </div>

//             {/* Subject */}
//             <div className="relative group">
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 <FaHeading className="text-green-500 group-hover:text-emerald-600 transition-colors duration-300" />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Subject"
//                 className="w-full border border-green-200 rounded-xl pl-12 p-4 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 group-hover:shadow-lg group-hover:border-green-300"
//                 required
//               />
//             </div>

//             {/* Message */}
//             <div className="relative group">
//               <textarea
//                 rows={5}
//                 placeholder="Your Message"
//                 className="w-full border border-green-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 group-hover:shadow-lg group-hover:border-green-300"
//                 required
//               ></textarea>
//             </div>

//             {/* Button */}
//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 font-semibold transform hover:-translate-y-1 group"
//             >
//               <FaPaperPlane className="transform group-hover:translate-x-1 transition-transform duration-300" />
//               Send Message
//               <FaHeart className="text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2" />
//             </button>
//           </form>
//         </div>

//         {/* Contact Info + Quick Links */}
//         <div className="space-y-8">
//           {/* Contact Info */}
//           <div
//             className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-green-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
//             data-aos="zoom-in-up"
//             data-aos-delay="200"
//           >
//             <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-3 border-b border-green-200 flex items-center gap-2">
//               <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-full">
//                 <FaMapMarkerAlt className="text-white text-base sm:text-lg" />
//               </div>
//               Contact Information
//             </h2>
//             <ul className="space-y-4 sm:space-y-6 text-gray-700">
//               {[
//                 {
//                   icon: FaEnvelope,
//                   title: "Email",
//                   info: "info@wildlifezoo.org",
//                   details: "Replies within 24 hours",
//                 },
//                 {
//                   icon: FaPhoneAlt,
//                   title: "Phone",
//                   info: "+123 456 7890",
//                   details: "Call hours: 9AM - 5PM",
//                 },
//                 {
//                   icon: FaMapMarkerAlt,
//                   title: "Visit Us",
//                   info: "Wildlife Zoo Park, Main City, Country",
//                   details: "Open daily 9AM - 7PM",
//                 },
//               ].map((item, index) => (
//                 <li
//                   key={index}
//                   className="flex items-start gap-4 group hover:bg-green-50 p-3 rounded-xl transition-all duration-300"
//                 >
//                   <div className="bg-green-100 p-2 sm:p-3 rounded-full flex items-center justify-center mt-1 group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
//                     <item.icon className="text-green-600 text-base sm:text-lg" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-900">{item.title}</h3>
//                     <p className="text-gray-600 text-sm sm:text-base">
//                       {item.info}
//                     </p>
//                     <p className="text-xs sm:text-sm text-green-500 mt-1">
//                       {item.details}
//                     </p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div
//             className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-green-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
//             data-aos="zoom-in"
//             data-aos-delay="200"
//           >
//             <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-3 border-b border-green-200 flex items-center gap-2">
//               <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-full">
//                 <FaQuestionCircle className="text-white text-base sm:text-lg" />
//               </div>
//               Quick Support
//             </h2>
//             <ul className="space-y-3 sm:space-y-4">
//               {[
//                 {
//                   icon: FaFileAlt,
//                   title: "Download Tickets",
//                   description: "Access your zoo tickets",
//                 },
//                 {
//                   icon: FaComments,
//                   title: "Animal & FAQs",
//                   description: "Learn how you can support animals",
//                 },
//                 {
//                   icon: FaQuestionCircle,
//                   title: "Visit FAQs",
//                   description: "Find answers about zoo timings & events",
//                 },
//               ].map((item, index) => (
//                 <li
//                   key={index}
//                   className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-green-50 cursor-pointer transition-all duration-300 group border border-transparent hover:border-green-200"
//                 >
//                   <div className="bg-green-100 p-2 sm:p-3 rounded-full group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
//                     <item.icon className="text-green-600 text-base sm:text-lg" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-900 group-hover:text-emerald-800 transition-colors duration-300">
//                       {item.title}
//                     </h3>
//                     <p className="text-xs sm:text-sm text-gray-600 group-hover:text-green-700 transition-colors duration-300">
//                       {item.description}
//                     </p>
//                   </div>
//                   <FaPaw className="text-green-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFileAlt,
  FaComments,
  FaQuestionCircle,
  FaPaperPlane,
  FaUser,
  FaHeading,
  FaLeaf,
  FaPaw,
  FaHeart,
  FaPhoneAlt,
} from "react-icons/fa";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="relative max-w-8xl mx-auto py-12 px-4 bg-[#2D6A4F]">
      {/* Decorative elements */}
      <div className="absolute left-4 sm:left-10 top-10 sm:top-20 opacity-10">
        <FaPaw className="text-4xl sm:text-6xl text-yellow-400" />
      </div>
      <div className="absolute right-4 sm:right-10 bottom-10 sm:bottom-20 opacity-10">
        <FaLeaf className="text-4xl sm:text-6xl text-yellow-400" />
      </div>

      {/* Heading */}
      <div className="text-center mb-12 sm:mb-16 relative" data-aos="fade-up">
        <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-[#1B4332] to-[#2D6A4F] rounded-full"></div>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-serif bg-clip-text text-transparent bg-gradient-to-r from-[#F2EDE9] to-[#95D5B2]"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Contact Our Zoo Team
        </h1>
        <p
          className="text-base sm:text-lg md:text-xl text-[#F2EDE9] max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Have questions about tickets, animals, or events? Reach out and we'll
          be happy to help!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative">
        {/* Contact Form */}
        <div
          className="bg-[#081C15]/80 rounded-2xl shadow-2xl overflow-hidden border border-[#2D6A4F]/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 backdrop-blur-md"
          data-aos="fade-up"
        >
          <div className="bg-gradient-to-r from-[#1B4332] to-[#2D6A4F] py-6 px-6 sm:px-8 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-20 sm:w-24 h-20 sm:h-24 bg-[#2D6A4F] rounded-full opacity-20"></div>
            <div className="absolute -left-4 -bottom-4 w-12 sm:w-16 h-12 sm:h-16 bg-[#1B4332] rounded-full opacity-20"></div>

            <h2 className="text-white text-xl sm:text-2xl font-semibold flex items-center gap-2 relative z-10">
              <FaPaperPlane className="text-yellow-400 animate-pulse" />
              Send us a Message
            </h2>
            <p className="text-[#95D5B2] mt-1 text-sm sm:text-base relative z-10">
              Our zookeepers reply as soon as possible
            </p>
          </div>

          {/* Form */}
          <form className="p-8 space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaUser className="text-[#95D5B2] group-hover:text-yellow-400 transition-colors duration-300" />
              </div>
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full border border-[#2D6A4F]/40 bg-transparent text-[#F2EDE9] rounded-xl pl-12 p-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 group-hover:shadow-lg group-hover:border-[#95D5B2]/60"
                required
              />
            </div>

            {/* Email */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaEnvelope className="text-[#95D5B2] group-hover:text-yellow-400 transition-colors duration-300" />
              </div>
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full border border-[#2D6A4F]/40 bg-transparent text-[#F2EDE9] rounded-xl pl-12 p-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 group-hover:shadow-lg group-hover:border-[#95D5B2]/60"
                required
              />
            </div>

            {/* Topic */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaFileAlt className="text-[#95D5B2] group-hover:text-yellow-400 transition-colors duration-300" />
              </div>
              <select className="w-full border border-[#2D6A4F]/40 bg-transparent text-[#F2EDE9] rounded-xl pl-12 p-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 group-hover:shadow-lg group-hover:border-[#95D5B2]/60 appearance-none">
                <option className="bg-[#1B4332] text-[#F2EDE9]">Choose a Topic</option>
                <option className="bg-[#1B4332] text-[#F2EDE9]">Ticket Information</option>
                <option className="bg-[#1B4332] text-[#F2EDE9]">Animal Adoption</option>
                <option className="bg-[#1B4332] text-[#F2EDE9]">Zoo Events</option>
                <option className="bg-[#1B4332] text-[#F2EDE9]">General Inquiry</option>
              </select>
            </div>

            {/* Subject */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaHeading className="text-[#95D5B2] group-hover:text-yellow-400 transition-colors duration-300" />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-[#2D6A4F]/40 bg-transparent text-[#F2EDE9] rounded-xl pl-12 p-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 group-hover:shadow-lg group-hover:border-[#95D5B2]/60"
                required
              />
            </div>

            {/* Message */}
            <div className="relative group">
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full border border-[#2D6A4F]/40 bg-transparent text-[#F2EDE9] rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 group-hover:shadow-lg group-hover:border-[#95D5B2]/60"
                required
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#1B4332] to-[#2D6A4F] hover:from-[#2D6A4F] hover:to-[#1B4332] text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 font-semibold transform hover:-translate-y-1 group"
            >
              <FaPaperPlane className="transform group-hover:translate-x-1 transition-transform duration-300" />
              Send Message
              <FaHeart className="text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2" />
            </button>
          </form>
        </div>

        {/* Contact Info + Quick Links */}
        <div className="space-y-8">
          {/* Contact Info */}
          <div
            className="bg-[#081C15]/80 p-6 sm:p-8 rounded-2xl shadow-2xl border border-[#2D6A4F]/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 backdrop-blur-md"
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-[#F2EDE9] mb-4 sm:mb-6 pb-3 border-b border-[#2D6A4F]/40 flex items-center gap-2">
              <div className="bg-gradient-to-r from-[#1B4332] to-[#2D6A4F] p-2 rounded-full">
                <FaMapMarkerAlt className="text-white text-base sm:text-lg" />
              </div>
              Contact Information
            </h2>
            <ul className="space-y-4 sm:space-y-6 text-[#F2EDE9]">
              {[
                {
                  icon: FaEnvelope,
                  title: "Email",
                  info: "info@wildlifezoo.org",
                  details: "Replies within 24 hours",
                },
                {
                  icon: FaPhoneAlt,
                  title: "Phone",
                  info: "+123 456 7890",
                  details: "Call hours: 9AM - 5PM",
                },
                {
                  icon: FaMapMarkerAlt,
                  title: "Visit Us",
                  info: "Wildlife Zoo Park, Main City, Country",
                  details: "Open daily 9AM - 7PM",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 group hover:bg-[#2D6A4F]/30 p-3 rounded-xl transition-all duration-300"
                >
                  <div className="bg-[#2D6A4F]/40 p-2 sm:p-3 rounded-full flex items-center justify-center mt-1 group-hover:bg-yellow-400 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="text-[#F2EDE9] text-base sm:text-lg" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#F2EDE9]">{item.title}</h3>
                    <p className="text-sm sm:text-base text-[#95D5B2]">{item.info}</p>
                    <p className="text-xs sm:text-sm text-yellow-400 mt-1">{item.details}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div
            className="bg-[#081C15]/80 p-6 sm:p-8 rounded-2xl shadow-2xl border border-[#2D6A4F]/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 backdrop-blur-md"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-[#F2EDE9] mb-4 sm:mb-6 pb-3 border-b border-[#2D6A4F]/40 flex items-center gap-2">
              <div className="bg-gradient-to-r from-[#1B4332] to-[#2D6A4F] p-2 rounded-full">
                <FaQuestionCircle className="text-white text-base sm:text-lg" />
              </div>
              Quick Support
            </h2>
            <ul className="space-y-3 sm:space-y-4">
              {[
                {
                  icon: FaFileAlt,
                  title: "Download Tickets",
                  description: "Access your zoo tickets",
                },
                {
                  icon: FaComments,
                  title: "Animal & FAQs",
                  description: "Learn how you can support animals",
                },
                {
                  icon: FaQuestionCircle,
                  title: "Visit FAQs",
                  description: "Find answers about zoo timings & events",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-[#2D6A4F]/30 cursor-pointer transition-all duration-300 group border border-transparent hover:border-[#95D5B2]/40"
                >
                  <div className="bg-[#2D6A4F]/40 p-2 sm:p-3 rounded-full group-hover:bg-yellow-400 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="text-[#F2EDE9] text-base sm:text-lg" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#F2EDE9] group-hover:text-yellow-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#95D5B2] group-hover:text-white transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                  <FaPaw className="text-yellow-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
