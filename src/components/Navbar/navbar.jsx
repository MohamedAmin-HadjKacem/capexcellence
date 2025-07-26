import React from 'react';
import logo from '../../assets/images/logo.png';
import phoneIcon from '../../assets/images/phone-call.png';
import mailIcon from '../../assets/images/envelope.png';
import locationIcon from '../../assets/images/marker.png';

import './Navbar.css';

function Navbar() {
  return (
    <header>
      {/* Barre supérieure */}
      <div className="navbar-top">
        <div className="left-infos">
          <span className="navbar-info d-flex align-items-center">
            <img src={phoneIcon} alt="Téléphone" className="icon-navbar" />
            (+216) 24 480 812
          </span>
          <span className="navbar-info d-flex align-items-center">
            <img src={mailIcon} alt="Email" className="icon-navbar" />
            Cap.Excellence.tn@gmail.com
          </span>
        </div>
        <div className="right-infos navbar-info d-flex align-items-center">
          <img src={locationIcon} alt="Adresse" className="icon-navbar" />
          Immeuble Premium, avenue de l’Euro, Les Berges du Lac 2, 1053 Tunis
        </div>
      </div>

      {/* Navbar principale */}
      <nav className="main-navbar">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={logo} alt="CapExcellence Logo" className="logo-navbar" />
          </a>
          {/* Liens centrés */}
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">
                Accueil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                À Propos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#programs">
                Nos Programmes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          {/* Boutons à droite */}
          <div className="navbar-btns d-flex align-items-center">
            <a href="#register" className="btn btn-outline-primary">Inscription</a>
            <a href="#account" className="btn btn-primary">Mon Compte</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;