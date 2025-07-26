import React from 'react';
import { Link } from 'react-router-dom';
import coursesIcon from '../../assets/images/Group 27.png'; // Updated icon for "Nos Cours"
import teacherIcon from '../../assets/images/chalkboard-user.png';
import locateIcon from '../../assets/images/region-pin-alt.png';
import priceIcon from '../../assets/images/Vector.png';
import whatsappIcon from '../../assets/images/whatsapp_1419661 1.png';
import './Quick.css';

function Quick() {
  return (
      <div className="navbar-bandeau d-flex align-items-center">
        <a href="#courses" className="btn btn-bandeau d-flex align-items-center">
          <img src={coursesIcon} alt="Nos Cours" className="icon-bandeau-white me-2" />
          <span>Nos Cours</span>
        </a>
        <div className="bandeau-links d-flex align-items-center ms-4">
          <a href="#teach" className="bandeau-link d-flex align-items-center">
            <img src={teacherIcon} alt="Enseigner" className="icon-bandeau-orange me-2" />
            Enseigner
          </a>
          <div className="bandeau-separator"></div>
          <a href="#locate" className="bandeau-link d-flex align-items-center">
            <img src={locateIcon} alt="Localisez Nous" className="icon-bandeau-orange me-2" />
            Localisez Nous
          </a>
          <div className="bandeau-separator"></div>
          <a href="#price" className="bandeau-link d-flex align-items-center">
            <img src={priceIcon} alt="Tarifs" className="icon-bandeau-orange me-2" />
            Tarifs
          </a>
          <div className="bandeau-separator"></div>
          <a href="#whatsapp" className="bandeau-link d-flex align-items-center">
            <img src={whatsappIcon} alt="Whatsapp" className="icon-bandeau-orange me-2" />
            Whatsapp
          </a>
        </div>
      </div>
  );
}

export default Quick;