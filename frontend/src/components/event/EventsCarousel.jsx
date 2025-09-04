// src/components/Event/EventsCarousel.jsx
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Model from "../common/Model";
import AOS from "aos";
import "aos/dist/aos.css";




const events = [
    {
        id: 1,
        title: "Penguin Feeding Show",
        subTitle: "Live Performance",
        desc: "Watch adorable penguins being fed by our zookeepers. Fun for all ages!",
        date: "Sep 15, 2025",
        video: "https://www.pexels.com/download/video/17035739/", // 🔹 Local or hosted video
    },
    {
        id: 2,
        title: "Lion Roar Experience",
        subTitle: "Close-Up Adventure",
        desc: "Get close to the King of the Jungle in a safe, thrilling environment.",
        date: "Sep 20, 2025",
        video: "https://www.pexels.com/download/video/33655775/",
    },
    {
        id: 3,
        title: "Giraffe Meet & Greet",
        subTitle: "Family Fun",
        desc: "Feed and interact with our friendly giraffes. A perfect photo opportunity!",
        date: "Sep 25, 2025",
        video: "https://www.pexels.com/download/video/7008029/",
    },
    {
        id: 4,
        title: "Zoo Funfair & Carnival 🎪",
        subTitle: "Stalls, Rides & Games",
        desc: "A full-day festival with food stalls, rides, live music, and clowns!",
        date: "Oct 5, 2025",
        video: "https://www.pexels.com/download/video/3116906/",
    },
];

export default function EventsCarousel() {
    const [isOpen, setIsOpen] = useState(false)


    useEffect(() => {
        AOS.init({ duration: 1000, once: false }),
            setTimeout(() => AOS.refresh(), 500);
    }, []);


    return (
        <div className="w-full ">
            <Swiper
                modules={[Autoplay, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => {
                    AOS.refreshHard(); // 🔥 Force refresh on slide change
                }}
            >
                {events.map((event) => (
                    <SwiperSlide key={event.id}>
                        <div className="relative md:h-[730px] h-[560px]">

                            <video
                                src={event.video}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-[560px] md:h-[730px] object-cover"
                            ></video>

                            {/* Overlay */}
                            <div className="absolute top-0 left-0 w-full h-full bg-black/70 flex flex-col justify-center items-center text-white text-center px-4">
                                <h1 className="md:text-[50px] text-3xl font-extrabold md:mt-14" data-aos="fade-down">
                                    {event.title}{" "}
                                    <span className="text-green-600">{event.subTitle}</span>

                                </h1>
                                <p className="md:text-2xl md:mt-8 font-serif mt-4 max-w-[900px]" data-aos="fade-down">
                                    {event.desc}
                                </p>
                                <p className="text-lg mt-4 text-[#fdc500] font-semibold">{event.date}</p>
                                <div className="flex flex-row gap-3 mt-7 md:mt-10 items-center">
                                    <button

                                        className="bg-green-700 px-3 py-3 md:px-5 md:py-3 rounded-full font-semibold transition-all text-[18px] duration-700 hover:scale-110 hover:bg-[#0b750b]"
                                        onClick={() => setIsOpen(true)}
                                    >
                                        Get Tickets
                                    </button>

                                    <Link
                                        to="/contact"
                                        className="border-2 border-white px-3 py-3 md:px-5 md:py-3 rounded-full hover:bg-white hover:text-black font-semibold text-[18px] transition-all duration-700 hover:scale-110"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
            <Model isOpen={isOpen} onClose={() => setIsOpen(false)}></Model>

        </div >
    );
}
