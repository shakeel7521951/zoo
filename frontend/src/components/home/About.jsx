import React from 'react'
import 'aos/dist/aos.css'
import { FaLeaf } from 'react-icons/fa' // Leaf icon

const AboutZoo = () => {
  return (
    <div className='w-[100%] mx-auto py-16 px-14 box-border relative overflow-x-hidden '>
      <p className='text-lg tracking-wide text-green-700 font-semibold mb-2'>
        <span className='mr-2'>#</span>Welcome To Zoofari
      </p>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative'>
        {/* Left Image */}
        <div
          data-aos='fade-right'
          data-aos-delay='200'
          className='relative flex justify-center'
        >
          <img
            className='w-full max-w-3xl rounded-2xl shadow-lg object-cover'
            src='./images/zebra.jpg'
            alt='Zoo'
          />
        </div>

        {/* Right Content Card */}
        <div
          data-aos='fade-left'
          data-aos-delay='400'
          className='relative lg:-ml-[69px]  bg-green-900 text-white p-10 rounded-2xl shadow-xl z-10'
        >
          {/* White Frame Border */}
          <div className='absolute inset-0 border-4 border-white rounded-2xl -z-10'></div>

          {/* Title */}
          <h1 className='text-3xl md:text-4xl font-extrabold mb-4 text-center lg:text-left'>
            Why You Should Visit Zoofari Park!
          </h1>

          {/* Description */}
          <p className='text-white/90 mb-6 leading-relaxed text-center lg:text-left'>
            At Zoofari, we are dedicated to creating a space where people of all
            ages can connect with nature and wildlife. Our mission is to provide
            not only entertainment but also education and awareness about animal
            care and conservation. With exciting exhibits, safe family
            facilities, and engaging activities, we strive to make every visit a
            joyful and meaningful experience for our guests.
          </p>

          {/* Features */}
          <div className='space-y-4'>
            <h5 className='flex items-center text-lg'>
              <FaLeaf className='text-white mr-3' /> 180 acres area covered
            </h5>
            <h5 className='flex items-center text-lg'>
              <FaLeaf className='text-white mr-3' /> More Than 100 Types of
              Animals
            </h5>
            <h5 className='flex items-center text-lg'>
              <FaLeaf className='text-white mr-3' /> All Animals are Under
              Security
            </h5>
          </div>

          {/* Button */}
          <div className='mt-8 text-center lg:text-left'>
            <a
              href='#'
              className='inline-block bg-white text-green-900 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-green-100 transition transform hover:-translate-y-1'
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutZoo
