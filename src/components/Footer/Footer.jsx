import React from 'react'
import './Footer.css'
import logo from '../../assets/images/logo.png'
import phone from '../../assets/images/phone-call.png'
import email from '../../assets/images/envelope.png'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import linkedin from '../../assets/images/linkedin.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src={logo} alt="Cap Excellence Logo" className="footer-logo" />
          <p className="footer-description">
            CAP.EXCELLENCE est un centre de soutien scolaire et 
            de développement des soft skills à La Marsa, Tunisie. 
            Nous accompagnons les élèves pour exceller 
            académiquement et renforcer leurs compétences 
            essentielles pour la vie.
          </p>
          <div className="footer-contact">
            <div className="contact-item">
              <img src={phone} alt="Téléphone" />
              <span>(+216) 24 480 812</span>
            </div>
            <div className="contact-item">
              <img src={email} alt="Email" />
              <span>Cap.Excellence.tn@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Liens Utiles</h3>
            <ul>
              <li><a href="#apropos">À Propos</a></li>
              <li><a href="#programmes">Nos Programmes</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#recrutement">Recrutement</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Cours</h3>
            <ul>
              <li><a href="#mathematiques">Mathématiques</a></li>
              <li><a href="#francais">Français</a></li>
              <li><a href="#anglais">Anglais</a></li>
              <li><a href="#sciences">Sciences</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Soft Skills</h3>
            <ul>
              <li><a href="#communication">Communication</a></li>
              <li><a href="#leadership">Leadership</a></li>
              <li><a href="#responsabilite">Responsabilité</a></li>
              <li><a href="#renforcement">Renforcement</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h3>Newsletter</h3>
            <p>Inscrivez-vous à notre newsletter pour recevoir les dernières informations sur nos nouveaux cours.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter votre adresse e-mail" />
              <button>Abonnez-vous</button>
            </div>
            <div className="newsletter-consent">
              <input type="checkbox" id="consent" />
              <label htmlFor="consent">J'accepte les conditions d'utilisation et la politique de confidentialité.</label>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          Copyright © 2024 Tous droits réservés par <span>CAP.EXCELLENCE</span>
        </div>
        <div className="social-links">
          <a href="#facebook"><img src={facebook} alt="Facebook" /></a>
          <a href="#instagram"><img src={instagram} alt="Instagram" /></a>
          <a href="#linkedin"><img src={linkedin} alt="LinkedIn" /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer 