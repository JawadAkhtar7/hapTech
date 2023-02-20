import React from 'react'

// Components :
import Home from './Pages/Home/Home';

// CSS :
import "./App.css";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';





const App = () => {
  return (
    <div className='appContainer'>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App