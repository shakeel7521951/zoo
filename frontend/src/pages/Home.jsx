import React from 'react'
import Header from '../components/home/Header'
import VideoSwiper from '../components/home/Swiper/Swiper'
import AboutZoo from '../components/home/About'
import Services from '../components/home/Services'
import ZooFacts from '../components/home/ZooFacts'
import ZooGallery from '../components/home/Gallery'
import Contact from '../components/home/Contact'


const Home = () => {
  return (
    <div>
      <Header/>
      <VideoSwiper/>
      <AboutZoo/>
      <Services/>
      <ZooFacts/>
      <ZooGallery/>
      <Contact/>
    </div>
  )
}

export default Home