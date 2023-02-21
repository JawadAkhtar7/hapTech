import React from 'react'

// Assets :
import BackImg from "../../Assets/back.jpg"
import ArticalsSection from './Components/ArticalsSection/ArticalsSection';
import BusinessSection from './Components/BusinessSection/BusinessSection';

// Components :
import HeroSection from './Components/HeroSection/HeroSection';

// CSS :
import "./Home.scss";





const Home = () => {
  return (
    <>
      <div className="homePageContainer">
        <HeroSection />
        <BusinessSection />
        {/* <ArticalsSection /> */}
      </div>
    </>
  )
}

export default Home
