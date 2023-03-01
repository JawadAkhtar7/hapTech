import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';

// Assets | ICONS :
import HeroBackImg from "./Assets/heroBack.jpg"

// Components :
import Home from './Pages/Home/Home';
import ConntactUs from "./Pages/ContactUs/ContactUs"
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

// CSS :
import "./App.css";





const App = () => {
  let location = useLocation()

  return (
    <div className='appContainer'>
      {
        location.pathname !== "/contact" &&
        <div className="heroBack">
          <img src={HeroBackImg} alt="ERROR" />
        </div>
      }
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ConntactUs />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App