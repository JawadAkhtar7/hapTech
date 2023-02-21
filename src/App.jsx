import React from 'react'
import { Routes, Route } from 'react-router-dom';

// Components :
import Home from './Pages/Home/Home';
import ConntactUs from "./Pages/ContactUs/ContactUs"
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

// CSS :
import "./App.css";





const App = () => {
  return (
    <div className='appContainer'>
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