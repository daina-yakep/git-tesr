import React from 'react';
import '../styles/home.css'
import logo from '../Assets/accueil.jpg'

function Home() {
  return (
  
    <header className='header'>
        
        <section className="home-section">

         <img src={logo} alt='' className='accueil' />

            <div className="home-content">
                <h1>BIENVENUE CHEZ BIBLIOCENTRE</h1>

                <p className='solgan'>Un monde d'histoire a decouvrir</p>
                <a href="#contact" className="cta-button"> Contacter nous</a>
            </div>

         </section>

    </header>
    
   ) ;
}

export default Home;
