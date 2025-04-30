// src/components/About.js
import React from 'react';
import '../styles/about.css';
import propos from '../Assets/tt.jpg'; // Mets ton image ici

const About = () => {
  return (
    <section className="about">
      <img src={propos} alt="" className="propos" />
      <div className="text">
        <h1>À propos </h1>
        <p>
            Passionnés par la connaissance, la culture et la transmission, nous sommes une équipe dévouée au cœur de votre bibliothèque. Chaque jour, nous mettons notre énergie au service de la curiosité de tous : enfants, étudiants, chercheurs ou simples amoureux des livres.

            De l’accueil à l’organisation des collections, en passant par l’animation d’ateliers et la recommandation de lectures, notre mission est de rendre la bibliothèque vivante, accessible et enrichissante.

            Notre objectif ? Offrir bien plus qu’un lieu de lecture : un véritable espace d’échange, de découverte et de partage.
        </p>
      </div>
    </section>
  );
};

export default About;
