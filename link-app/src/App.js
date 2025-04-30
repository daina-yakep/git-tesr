import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Service from './pages/service';
import Catalogue from './pages/catalogue';
import Contact from './pages/contact';
import Footer from './components/footer';

import  Dashboard from './pages/dashboard';

import './App.css'
import logos from './Assets/logo 2.png'

function App() {
  return (

    
    <Router>

      <div>
        
        <header className='head'>

            <img src={logos} alt='' className='lmj-logo' />
            <h1 className='logo'>BIBLIOCENTRE</h1>
          
          <ul className='ul'>
            <li><Link className='a' to="/">Accueil</Link></li>
            <li><Link className='a' to="/about">À propos</Link></li>
            <li><Link className='a' to="/catalogue">Catalogue</Link></li>
            <li><Link className='a' to="/service">Service</Link></li>
            <li><Link className='a' to="/contact">Contact</Link></li>

      

          </ul>

        </header>

      </div>

      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/dashboard" element={<Dashboard />} />
   

        </Routes>

        <div>
          <Footer />
        </div>

      </div>
    </Router>

  );
}

export default App;
