        import React, { useEffect } from 'react'
        import { Swiper, SwiperSlide } from 'swiper/react'
        import { Navigation, Pagination, Autoplay } from 'swiper/modules'
        import { FaTicketAlt, FaInfoCircle } from 'react-icons/fa'
        import 'swiper/css'
        import 'swiper/css/navigation'
        import 'swiper/css/pagination'
        import './Swiper.css'

        const VideoSwiper = () => {
          const slides = [
            {
              video: './videos/tiger.mp4',
              title: 'Roar with the Tigers',
              text: 'Step into the wild and feel the roar of our magnificent tigers.'
            },
            {
              video: './videos/giraffe.mp4',
              title: 'Grace with Giraffes',
              text: 'Discover the tallest animals on Earth and watch giraffes roam elegantly.'
            },
            {
              video: './videos/flamingo.mp4',
              title: 'Graceful Flamingos',
              text: 'Marvel at the elegance of our vibrant flamingo sanctuary.'
            }
          ]

  return (
    <div className='relative w-full h-[100vh] custom-swiper overflow-hidden'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        className='h-full'
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className='relative'>
            {/* Background Video */}
            <video
              className='absolute top-0 left-0 w-full h-full object-cover'
              src={slide.video}
              autoPlay
              loop
              muted
              playsInline
            />

            {/* Gradient Overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent'></div>

            {/* Content */}
            <div className='relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6'>
              <h1
                className='text-3xl md:text-6xl font-bold mb-4 drop-shadow-xl'
                data-aos='fade-up'
                data-aos-delay='200'
              >
                {slide.title}
              </h1>

              <p
                className='text-base md:text-xl mb-8 max-w-3xl drop-shadow-lg'
                data-aos='fade-up'
                data-aos-delay='300'
              >
                {slide.text}
              </p>

              <div
                className='flex gap-4'
                data-aos='fade-up'
                data-aos-delay='400'
              >
                <a
                  href='#tickets'
                  className='bg-green-900 flex items-center gap-2 px-6 py-3 rounded-lg shadow-lg hover:bg-green-950 transition text-sm md:text-lg'
                >
                  <FaTicketAlt /> Buy Tickets
                </a>

                <Link
                  to="/about"
                  className='bg-[#fdc700] text-black flex items-center gap-2 px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition text-sm md:text-lg'
                >
                  <FaInfoCircle /> Explore More
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default VideoSwiper
