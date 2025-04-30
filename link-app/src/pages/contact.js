import React from 'react';
import '../styles/contact.css'

function Contact() {
  return (

    <section className="contact-section" id="contact">

        <div className="contact-container">

            <h2>Contactez-moi</h2>
            <p>POUR PLUS D'INFORMATION, CONTACTER</p>

            <form className="contact-form">

                <input type="text" placeholder="Votre nom" required />
                <input type="email" placeholder="Votre e-mail" required />
                <textarea placeholder="Votre message" rows="2" required></textarea>

                <button type="submit">Envoyer</button>

            </form>

        </div>
    </section>

  );
}

export default Contact;
