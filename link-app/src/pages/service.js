import React from 'react';
import '../styles/service.css'

const libraryServices = [
  {
    title: "Emprunt de Livres",
    description: "Accédez à des milliers de livres à emprunter gratuitement.",
    icon: "📚"

  },
  {
    title: "Salle de Lecture",
    description: "Espace calme et confortable pour lire ou étudier.",
    icon: "🪑 "
  },
  {
    title: "Accès Wi-Fi",
    description: "Connexion Internet gratuite dans toute la bibliothèque.",
    icon: "📶"
  },
  {
    title: "Postes Informatique",
    description: "Ordinateurs disponibles pour consultation et impression.",
    icon: "💻"
  }
];

function LibraryServiceMenu() {
  return (
    <div className="library-service-menu">
      <h2>Services de la Bibliothèque</h2>
      <div className="library-service-list">
        {libraryServices.map((service, index) => (
          <div key={index} className="library-service-card">
            <div className="library-service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LibraryServiceMenu;
