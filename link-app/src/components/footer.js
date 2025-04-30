// src/components/Footer.js
import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer-complex">

<div className="footer-middle">
      <div className="footer-top">
        <div className="footer-logo">
          <h2>📚 BIBLIOCENTRE</h2>
          <p>Explorez un monde infini de savoir et de fiction.</p>
        </div>
      </div>

      <div>
        <h4>Horaires :</h4>
          <ul>
            <li>Lundi - Vendredi : 9h - 18h</li>
            <li>Samedi : 10h - 17h</li>
            <li>Dimanche : Fermé</li>
          </ul>
      </div>

        <div>
          <h4>À propos</h4>
          <ul>
            <li><a href="/histoire">Notre histoire</a></li>
            <li><a href="/equipe">L’équipe</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4>Catalogue</h4>
          <ul>
            <li><a href="/nouveautes">Nouveautés</a></li>
            <li><a href="/classiques">Classiques</a></li>
            <li><a href="/jeunes">Jeunesse</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>Email : contact@biblio.com</li>
            <li>Tél : +33 1 23 45 67 89</li>
            <li><a href="/contact">Formulaire</a></li>
          </ul>
        
        </div>
        <div>
          <h4>Suivez-nous</h4>
          <div className="social-icons">
            <li><a href="https://web.facebook.com/"> facebook</a></li>
            <li><a href="https://web.twitter.com/"> twitter</a></li>
            <li><a href="https://web.instagram.com/">instagram</a></li>
            <li><a href="https://web.linkedin.com/">linkedin</a></li>
          </div>
        </div>
      </div>

      <div className="footer-bottom">

        <p> © {new Date().getFullYear()} BIBLIOCENTRE. Tous droits réservés.<a href="/mentions-legales">Mentions légales</a> | <a href="/confidentialite">Politique de confidentialité</a></p>

      </div>
    </footer>
  );
};

export default Footer;
