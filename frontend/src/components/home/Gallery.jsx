import React from 'react'

const animals = [
  { src: './images/g1.jpg', name: 'Crowned Crane' },
  { src: './images/g2.jpg', name: 'Rhinoceros' },
  { src: './images/g3.jpg', name: 'Flamingo' },
  { src: './images/g4.jpg', name: 'Crocodile' },
  { src: './images/g5.jpg', name: 'Lemur' },
  { src: './images/g6.jpg', name: 'Fox' },
  { src: './images/g7.jpg', name: 'Hornbill' },
  { src: './images/g8.jpg', name: 'Meerkats' }
]

const ZooGallery = () => {
  return (
    <section className="py-16 bg-gray-50 lg:mt-16">
      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-16 px-6 md:px-12 lg:px-20 lg:text-left text-center">
        <p className="text-green-700 font-semibold uppercase tracking-wide mb-2">
          # Gallery
        </p>
        <h1 className="text-4xl font-extrabold text-green-900 mb-4">
          Explore Our Animal Gallery
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto lg:mx-0">
          Step into the wild and discover the beauty of nature’s most
          fascinating creatures. Our gallery showcases animals from across the
          world, each captured in stunning detail to bring their charm and
          character closer to you.
        </p>
      </div>

      {/* Gallery Layout: 3 cols → (3 | 2 | 3) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column: 3 images */}
        <div className="flex flex-col gap-6">
          {animals.slice(0, 3).map((animal, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-xl"
            >
              <img
                src={animal.src}
                alt={animal.name}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">
                <h2 className="text-white text-lg font-semibold p-4">
                  {animal.name}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Center Column: 2 images */}
        <div className="flex flex-col gap-6 justify-center">
          {animals.slice(3, 5).map((animal, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-xl"
            >
              <img
                src={animal.src}
                alt={animal.name}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">
                <h2 className="text-white text-lg font-semibold p-4">
                  {animal.name}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: 3 images */}
        <div className="flex flex-col gap-6">
          {animals.slice(5, 8).map((animal, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-xl"
            >
              <img
                src={animal.src}
                alt={animal.name}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">
                <h2 className="text-white text-lg font-semibold p-4">
                  {animal.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load More Button */}
      <div className="text-center mt-16">
        <a
          href="masonary_gallery.html"
          className="bg-green-900 hover:bg-green-800 text-white px-10 py-4 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105"
        >
          Load More
        </a>
      </div>
    </section>
  )
}

export default ZooGallery
