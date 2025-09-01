import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ZooHero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center text-center text-white px-6 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1564166174574-a9666f590437?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D')", 
        // 🦁 Zoo entrance with animals in background
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B4332]/70 to-[#081C15]/60"></div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTMwIDMwYTI4IDI4IDAgMTEtNTYgMCAyOCAyOCAwIDAxNTYgMCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBmaWxsPSJub25lIi8+PC9zdmc+')] opacity-20 mix-blend-soft-light"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4">
        {/* Decorative circles */}
        <div
          className="absolute -top-10 -left-10 w-28 h-28 border-4 border-[#F2EDE9]/10 rounded-full"
          data-aos="zoom-in"
          data-aos-delay="600"
        ></div>
        <div
          className="absolute -bottom-8 -right-8 w-20 h-20 border-4 border-[#F2EDE9]/10 rounded-full"
          data-aos="zoom-in"
          data-aos-delay="700"
        ></div>

        {/* Heading */}
        <h1
          className="text-5xl md:text-7xl font-bold leading-tight tracking-tight"
          data-aos="fade-up"
          style={{
            textShadow: "0 4px 12px rgba(0,0,0,0.3)",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Welcome to the{" "}
          <span className="text-[#F2EDE9]">Wildlife Zoo</span>
        </h1>

        {/* Separator */}
        <div
          className="w-24 h-1 bg-gradient-to-r from-[#1B4332] to-[#2D6A4F] mx-auto my-8 rounded-full"
          data-aos="fade-up"
          data-aos-delay="100"
        ></div>

        {/* Paragraph */}
        <p
          className="mt-6 text-xl md:text-2xl text-[#F2EDE9] leading-relaxed max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Discover exotic animals, learn about conservation, and experience the
          beauty of wildlife up close.{" "}
          <span className="font-semibold text-[#95D5B2] bg-gradient-to-r from-[#2D6A4F]/30 to-[#1B4332]/10 px-2 py-1 rounded-md">
            Adventure awaits you!
          </span>
        </p>

        {/* Buttons */}
        <div
          className="mt-12 flex flex-row justify-center gap-6 items-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {/* Gradient Button */}
          <button
            type="button"
            className="relative bg-gradient-to-r from-[#1B4332] to-[#2D6A4F] text-white px-7 py-4 sm:px-10 sm:py-4 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#2D6A4F] to-[#1B4332] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <span className="relative z-10 whitespace-nowrap">
              Explore Animals
            </span>
          </button>

          {/* Outline Button */}
          <button
            type="button"
            className="relative border-2 border-[#F2EDE9] text-white px-7 py-4 sm:px-10 sm:py-4 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <span className="relative z-10 whitespace-nowrap">
              Plan Your Visit
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
