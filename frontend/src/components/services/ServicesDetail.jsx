// ServicesDetail.jsx
import React, { useMemo, useState } from "react";
import { FaSearch, FaTimes, FaSortAmountDown, FaSortAmountUp, FaMapMarkerAlt, FaWeight, FaHeart, FaShieldAlt, FaTruck, FaDollarSign, FaInfoCircle } from "react-icons/fa";
import lion from "../../assets/ServicesImages/lion.jpg";
import elephant from "../../assets/ServicesImages/elephant.jpg";
import giraffe from "../../assets/ServicesImages/giraffe.jpg";
import zebra from "../../assets/ServicesImages/zebra.jpg";
import tiger from "../../assets/ServicesImages/tiger.jpg";
import markhor from "../../assets/ServicesImages/markhor.jpg";
import peacock from "../../assets/ServicesImages/peacock.jpg";
import leopard from "../../assets/ServicesImages/leopard.jpg";
import parrot from "../../assets/ServicesImages/parrot.jpg";
import rhino from "../../assets/ServicesImages/rhino.jpg";
import CartButtons from "./CartButtons";

const ServicesDetail = () => {
    const animals = [
        {
            id: 1,
            name: "Lion",
            type: "Mammal",
            origin: "Asia/Africa",
            price: 5500,
            image: lion,
            description: "Powerful, regal, and iconic — the king of many savannas.",
            des_long: `Scientific Name: Panthera leo
Height & Weight: 1.2m at shoulder, 150–250 kg
Habitat: Savannas, grasslands, open woodlands
Diet: Carnivore; 5–7 kg meat/day
Life Expectancy: 10–14 years (wild), 15–20 years (captivity)
Behavior: Social, lives in prides; territorial
Permits Required: CITES Appendix II, local zoo permit
Enclosure Size: Minimum 1000 m², with shade and enrichment
Veterinary Needs: Regular health check, vaccination, parasite control
Transport: Crate 3m x 2m, sedation recommended
Maintenance Cost: Approx. $2000/month
Special Notes: Requires experienced handlers; high-risk predator`
        },
        {
            id: 2,
            name: "Elephant",
            type: "Mammal",
            origin: "Asia/Africa",
            price: 15000,
            image: elephant,
            description: "Gentle giant with complex social behaviour. Requires large habitat.",
            des_long: `Scientific Name: Elephas maximus / Loxodonta africana
Height & Weight: 2.5–3.3m, 2,500–6,000 kg
Habitat: Grasslands, forests, savannas
Diet: Herbivore; 150–300 kg vegetation/day; water access essential
Life Expectancy: 60–70 years
Behavior: Highly social; communicates using low-frequency sounds
Permits Required: CITES Appendix II, wildlife permit
Enclosure Size: Minimum 5000 m², bathing area, enrichment
Veterinary Needs: Specialized elephant vet, foot care, tusk monitoring
Transport: Large reinforced crate, requires crane or transport vehicle
Maintenance Cost: Approx. $5000/month
Special Notes: Needs daily care, very high maintenance`
        },
        {
            id: 3,
            name: "Giraffe",
            type: "Mammal",
            origin: "Africa",
            price: 12000,
            image: giraffe,
            description: "Tall, graceful browser with a calm temperament in managed care.",
            des_long: `Scientific Name: Giraffa camelopardalis
Height & Weight: 4.5–6m, 800–1,200 kg
Habitat: Savannas, open woodlands
Diet: Herbivore; 10–15 kg leaves/day in captivity
Life Expectancy: 25–30 years
Behavior: Social, forms loose herds; calm and alert
Permits Required: Wildlife permit, local authority approval
Enclosure Size: Minimum 1000 m², tall feeders required
Veterinary Needs: Regular check-ups, hoof care
Transport: Tall, reinforced crate; special transport
Maintenance Cost: Approx. $1500/month
Special Notes: Needs high fences and walking space`
        },
        {
            id: 4,
            name: "Zebra",
            type: "Mammal",
            origin: "Africa",
            price: 4500,
            image: zebra,
            description: "Striped, social, and energetic — popular in safari exhibits.",
            des_long: `Scientific Name: Equus quagga
Height & Weight: 1.3–1.5m, 220–450 kg
Habitat: Grasslands, savannas
Diet: Herbivore; 5–7 kg hay/day
Life Expectancy: 20–25 years
Behavior: Highly social; lives in herds; fast runners
Permits Required: Wildlife permit
Enclosure Size: Minimum 800 m²; need companions
Veterinary Needs: Hoof care, vaccinations
Transport: Standard equine crate, stress-reducing measures
Maintenance Cost: Approx. $800/month
Special Notes: Very social; should not be housed alone`
        },
        {
            id: 5,
            name: "Bengal Tiger",
            type: "Mammal",
            origin: "Asia",
            price: 20000,
            image: tiger,
            description: "Powerful predator, needs experienced care and secure enclosure.",
            des_long: `Scientific Name: Panthera tigris tigris
Height & Weight: 0.9–1.1m, 100–250 kg
Habitat: Tropical forests, grasslands, mangroves
Diet: Carnivore; 5–7 kg meat/day
Life Expectancy: 15–20 years
Behavior: Solitary and territorial
Permits Required: CITES Appendix I, endangered species permit
Enclosure Size: Minimum 1200 m², secure fencing, enrichment
Veterinary Needs: Regular vet care, vaccination, parasite control
Transport: Reinforced crate, sedation recommended
Maintenance Cost: Approx. $2000/month
Special Notes: Highly dangerous; expert handlers required`
        },
        {
            id: 6,
            name: "Markhor",
            type: "Mammal",
            origin: "Pakistan",
            price: 8000,
            image: markhor,
            description: "Pakistan’s national wild goat — rare and majestic.",
            des_long: `Scientific Name: Capra falconeri
Height & Weight: 70–100 cm, 32–110 kg
Habitat: Mountainous regions, rocky terrain
Diet: Herbivore; shrubs, leaves, grasses
Life Expectancy: 12–14 years
Behavior: Agile climber; shy
Permits Required: Wildlife permit
Enclosure Size: Minimum 200 m²; rocky structures
Veterinary Needs: Standard care; monitor for hoof issues
Transport: Standard crate, low stress
Maintenance Cost: Approx. $500/month
Special Notes: Conservation sensitive; not aggressive`
        },
        {
            id: 7,
            name: "Peacock",
            type: "Bird",
            origin: "Asia",
            price: 500,
            image: peacock,
            description: "Vibrant ornamental bird — great for display aviaries.",
            des_long: `Scientific Name: Pavo cristatus
Height & Weight: 1–1.2 m, 4–6 kg
Habitat: Forest edges, farmlands
Diet: Omnivore; grains, insects, fruits; daily feeding
Life Expectancy: 15–20 years
Behavior: Social; males display large tail feathers
Permits Required: Usually none, check local laws
Enclosure Size: Minimum 50 m²; safe roosting area
Veterinary Needs: Routine care
Transport: Small cage; low stress
Maintenance Cost: Approx. $50/month
Special Notes: Popular ornamental bird; display-friendly`
        },
        {
            id: 8,
            name: "Snow Leopard",
            type: "Mammal",
            origin: "Asia",
            price: 30000,
            image: leopard,
            description: "High-value endangered species; requires special permits and care.",
            des_long: `Scientific Name: Panthera uncia
Height & Weight: 60 cm, 22–55 kg
Habitat: Mountain ranges, rocky cliffs, alpine forests
Diet: Carnivore; 2–5 kg meat/day
Life Expectancy: 15–18 years
Behavior: Solitary, elusive
Permits Required: CITES Appendix I, endangered species permit
Enclosure Size: Minimum 1000 m²; secure and climate-controlled
Veterinary Needs: Specialist care required
Transport: Crate, sedation recommended
Maintenance Cost: Approx. $3000/month
Special Notes: Rare; expert handlers needed`
        },
        {
            id: 9,
            name: "Parrot (Macaw)",
            type: "Bird",
            origin: "South America",
            price: 800,
            image: parrot,
            description: "Highly intelligent and colorful companion bird (legalities vary).",
            des_long: `Scientific Name: Ara spp.
Height & Weight: 30–90 cm, 0.5–1.5 kg
Habitat: Rainforests, woodland edges
Diet: Fruits, nuts, seeds; 50–100 g/day
Life Expectancy: 50–60 years
Behavior: Very social, mimics sounds
Permits Required: Check local laws
Enclosure Size: Minimum 20 m² cage/aviary
Veterinary Needs: Routine care, mental enrichment
Transport: Cage, stress-reducing measures
Maintenance Cost: Approx. $50/month
Special Notes: Highly social; requires mental stimulation`
        },
        {
            id: 10,
            name: "Rhinoceros",
            type: "Mammal",
            origin: "Africa/Asia",
            price: 20000,
            image: rhino,
            description: "Rare and powerful; high maintenance, for major sanctuaries only.",
            des_long: `Scientific Name: Rhinocerotidae
Height & Weight: 1.5–1.8 m, 800–2,500 kg
Habitat: Grasslands, savannas, forests
Diet: Herbivore; 30–50 kg vegetation/day
Life Expectancy: 35–50 years
Behavior: Solitary; can be aggressive
Permits Required: CITES Appendix I, local wildlife permit
Enclosure Size: Minimum 2000 m²; secure fencing
Veterinary Needs: Specialist care, routine health monitoring
Transport: Large crate, sedation recommended`
        }
    ];

    const [query, setQuery] = useState("");
    const [typeFilter, setTypeFilter] = useState("All");
    const [sortOrder, setSortOrder] = useState("none");
    const [selected, setSelected] = useState(null);

    const types = useMemo(() => ["All", ...new Set(animals.map(a => a.type))], [animals]);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        let list = animals.filter(a => {
            const matchesQuery = !q || a.name.toLowerCase().includes(q) || a.origin.toLowerCase().includes(q);
            const matchesType = typeFilter === "All" || a.type === typeFilter;
            return matchesQuery && matchesType;
        });
        if (sortOrder === "asc") list = list.slice().sort((x, y) => x.price - y.price);
        if (sortOrder === "desc") list = list.slice().sort((x, y) => y.price - x.price);
        return list;
    }, [animals, query, typeFilter, sortOrder]);

    const currency = (n) => `$${Number(n).toLocaleString()}`;

    return (
        <section className="w-full min-h-screen bg-gradient-to-b from-white to-green-50 py-8 md:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 md:gap-6 mb-8 md:mb-10">
                    <div className="max-w-2xl">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                            Curated <span className="text-emerald-600">Wildlife</span> Collection
                        </h1>
                        <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-600">World-class animals for exhibitions, sanctuaries, and premium displays. Pricing listed as estimates — permits & transport extra.</p>
                    </div>

                    {/* Search / Filters */}
                    <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                        <div className="relative flex-1">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                                <FaSearch />
                            </span>
                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search name or origin..."
                                className="w-full pl-10 pr-4 py-2 md:py-3 rounded-full border border-gray-200 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-200 text-sm md:text-base"
                            />
                        </div>
                        <div className="flex gap-2">
                            <select
                                value={typeFilter}
                                onChange={(e) => setTypeFilter(e.target.value)}
                                className="flex-1 py-2 px-3 rounded-full border border-gray-200 bg-white shadow-sm text-sm md:text-base"
                            >
                                {types.map(t => <option key={t} value={t}>{t}</option>)}
                            </select>
                            <button
                                onClick={() => setSortOrder(prev => prev === "none" ? "asc" : prev === "asc" ? "desc" : "none")}
                                className="inline-flex items-center justify-center gap-1 md:gap-2 px-3 py-2 rounded-full border border-gray-200 bg-white shadow-sm text-sm md:text-base"
                                title="Toggle sort (none → asc → desc)"
                            >
                                {sortOrder === "asc" ? <FaSortAmountUp /> : sortOrder === "desc" ? <FaSortAmountDown /> : <FaSortAmountDown />}
                                <span className="sr-only">Sort</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                    {filtered.map(product => (
                        <div
                            key={product.id}
                            className="relative group rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-transform transform hover:-translate-y-1 bg-white"
                        >
                            {/* Image */}
                            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                <div className="absolute left-3 bottom-3 flex gap-2">
                                    <span className="bg-white/80 text-gray-800 px-2 py-1 rounded-full text-xs">
                                        {product.type}
                                    </span>
                                    <span className="bg-emerald-700 text-white px-2 py-1 rounded-full text-xs">
                                        {currency(product.price)}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-semibold">{product.name}</h3>
                                <p className="mt-1 text-gray-600 text-sm line-clamp-3">{product.description}</p>

                                <div className="mt-4 flex justify-between items-center">
                                    <button
                                        onClick={() => setSelected(product)}
                                        className="text-sm text-emerald-600 hover:underline flex items-center gap-1"
                                    >
                                        <FaInfoCircle className="text-xs" /> View Details
                                    </button>
                                    <CartButtons product={product} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selected && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelected(null)}
                    />

                    {/* Modal */}
                    <div className="relative w-full max-w-5xl bg-white rounded-xl md:rounded-2xl shadow-2xl z-10 border border-gray-200 max-h-[90vh] overflow-y-auto mx-2">
                        <div className="flex flex-col md:flex-row">
                            {/* Image */}
                            <div className="w-full md:w-1/2 h-56 sm:h-72 md:h-auto">
                                <img
                                    src={selected.image}
                                    alt={selected.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="w-full md:w-1/2 p-4 sm:p-6 flex flex-col">
                                {/* Header */}
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h2 className="text-xl sm:text-2xl font-bold">{selected.name}</h2>
                                        <p className="text-emerald-600 text-sm">{selected.origin}</p>
                                        <p className="mt-2 text-sm sm:text-base text-gray-700 italic border-l-4 border-emerald-400 pl-3">
                                            {selected.description}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setSelected(null)}
                                        className="p-1 md:p-2 rounded-full hover:bg-gray-100 flex-shrink-0"
                                    >
                                        ✕
                                    </button>
                                </div>

                                {/* Details */}
                                <div className="space-y-2 flex-grow overflow-y-auto pr-1">
                                    {selected.des_long.split("\n").map((line, idx) => {
                                        const separatorIndex = line.indexOf(":");
                                        if (separatorIndex === -1) return null;

                                        const key = line.substring(0, separatorIndex).trim();
                                        const value = line.substring(separatorIndex + 1).trim();

                                        return (
                                            <div
                                                key={idx}
                                                className="flex flex-col xs:flex-row xs:justify-between text-xs sm:text-sm"
                                            >
                                                <span className="font-semibold text-gray-800 xs:pr-2">{key}</span>
                                                <span className="text-gray-700 text-right break-words">{value}</span>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Footer */}
                                <div className="mt-5 flex flex-col sm:flex-row gap-2">
                                    <button className="flex-1 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 text-sm sm:text-base">
                                        Add to Cart
                                    </button>
                                    <button className="flex-1 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 text-sm sm:text-base">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ServicesDetail;