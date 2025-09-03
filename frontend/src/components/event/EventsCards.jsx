// src/components/Event/EventsCards.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import lion from "../../assets/EventsImages/lion.jpg"
import penguin2 from "../../assets/EventsImages/penguin2.jpg"
import funfair from "../../assets/EventsImages/funfair.jpg"
import giraffe from "../../assets/EventsImages/giraffe.jpg"

export default function EventsCards() {
    // Upcoming Event Banner Data
    const upcomingEvent = {
        title: "Zoo Funfair & Carnival 🎪",
        subTitle: "2025",
        desc: "Join us for a full day of fun rides, animal shows, food stalls, and live performances!",
        date: "2025-10-05T10:00:00",
    };

    // All Events
    const allEvents = [
        {
            id: 1,
            title: "Penguin Feeding Show",
            subTitle: "Live Performance",
            desc: "Watch adorable penguins being fed by our zookeepers. Fun for all ages!",
            date: "Sep 15, 2025",
            category: "Shows",
            image: penguin2,
        },
        {
            id: 2,
            title: "Lion Roar Experience",
            subTitle: "Close-Up Adventure",
            desc: "Get close to the King of the Jungle in a safe, thrilling environment.",
            date: "Sep 20, 2025",
            category: "Animal Encounters",
            image: lion,
        },
        {
            id: 3,
            title: "Giraffe Meet & Greet",
            subTitle: "Family Fun",
            desc: "Feed and interact with our friendly giraffes. A perfect photo opportunity!",
            date: "Sep 25, 2025",
            category: "Animal Encounters",
            image: giraffe,
        },
        {
            id: 4,
            title: "Zoo Funfair & Carnival 🎪",
            subTitle: "Stalls, Rides & Games",
            desc: "A full-day festival with food stalls, rides, live music, and clowns!",
            date: "Oct 5, 2025",
            category: "Carnivals",
            image: funfair,
        },
    ];

    // Filter Logic
    const categories = ["All", "Shows", "Animal Encounters", "Carnivals"];
    const [activeCategory, setActiveCategory] = useState("All");
    const [filteredEvents, setFilteredEvents] = useState(allEvents);

    const handleFilter = (category) => {
        setActiveCategory(category);
        if (category === "All") setFilteredEvents(allEvents);
        else
            setFilteredEvents(allEvents.filter((event) => event.category === category));
    };

    // Countdown Timer
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(upcomingEvent.date));

    function calculateTimeLeft(eventDateStr) {
        const eventDate = new Date(eventDateStr);
        const now = new Date();
        const diff = eventDate - now;
        if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60),
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(upcomingEvent.date));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full bg-gradient-to-b from-slate-50 to-slate-100  min-h-screen pb-12">
            {/* 🎨 Upcoming Event Banner */}
            <div className="relative w-full h-[400px] bg-gradient-to-bl from-[#0D542B] to-[#0c8f42] overflow-hidden flex flex-col justify-center items-center text-center text-white px-4 shadow-xl">
                {/* Decorative Floating Icons */}
                <div className="absolute top-10 left-5 animate-bounce text-3xl">🎈</div>
                <div className="absolute top-20 right-10 animate-bounce delay-1000 text-3xl">🎪</div>
                <div className="absolute bottom-10 left-20 animate-bounce delay-2000 text-3xl">🎡</div>
                <div className="absolute bottom-20 right-16 animate-bounce delay-1500 text-3xl">🐘</div>

                {/* Event Text */}
                <div className="relative z-10 flex flex-col items-center justify-center ">
                    <h2 className="text-2xl font-bold text-[#fdc500]">Upcoming Event: Zoo Funfair 🎪</h2>
                    <h1 className="md:text-4xl text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-400">
                        {upcomingEvent.title} <span className="text-[#fdc500]">{upcomingEvent.subTitle}</span>
                    </h1>
                    <p className="text-md md:text-lg text-center mt-4 max-w-3xl mb-4 text-slate-100">
                        {upcomingEvent.desc}
                    </p>

                    {/* Countdown */}
                    <div className="flex gap-4 mb-6 mt-4 flex-wrap justify-center">
                        {Object.entries(timeLeft).map(([unit, value]) => (
                            <div
                                key={unit}
                                className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md min-w-[60px] border border-white/20"
                            >
                                <p className="text-2xl font-bold text-white">{value}</p>
                                <p className="uppercase text-xs md:text-sm text-slate-200">{unit}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <button className="bg-gradient-to-br from-[#0D542B] to-[#fdc500]  px-6 md:px-8 py-2 md:py-3 rounded-full text-md md:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                        Get Tickets Now
                    </button>
                </div>
            </div>


            {/* Filter Bar */}
            <div className="flex justify-center gap-4 py-16 flex-wrap">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => handleFilter(cat)}
                        className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${activeCategory === cat
                            ? "bg-green-900 text-white shadow-md"
                            : "bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Events List (Cards) */}
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 mb-10">
                {filteredEvents.map((event) => (
                    <div
                        key={event.id}
                        className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
                    >
                        {/* Image Container */}
                        <div className="relative h-56 overflow-hidden">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-4 right-4 bg-green-900 text-[#FDC500] px-3 py-1 rounded-full text-sm font-medium">
                                {event.category}
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>

                        {/* Details */}
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h2 className="text-xl font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">{event.title}</h2>
                                <span className="text-sm font-bold text-green-900 bg-[#fdc500] px-2 py-1 rounded ">
                                    {event.date}
                                </span>
                            </div>
                            <p className="text-slate-600 text-sm mb-4">{event.subTitle}</p>
                            <p className="text-slate-700 mb-5">{event.desc}</p>
                            <div className="flex justify-between items-center">
                                <Link
                                    to="/tickets"
                                    className="bg-green-900 hover:bg-emerald-800 text-white px-5 py-2.5 rounded-full font-medium transition-all duration-300 hover:shadow-md"
                                >
                                    Get Tickets
                                </Link>
                                <span className="text-slate-400 text-sm">
                                    <i className="far fa-clock mr-1"></i> 2 hours
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}