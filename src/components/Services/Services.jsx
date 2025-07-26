import React from 'react'
import './Service.css'
import img1 from '../../assets/images/Rectangle4.png'
import img2 from '../../assets/images/Rectangle5.png'
import img3 from '../../assets/images/Rectangle6.png'

const Services = () => {
  return (
    <div className="service-hero">
      <div className="service-hero__gallery">
        <div className="gallery-left">
          <img src={img1} alt="Enfants en classe" className="gallery-image gallery-image--small" />
        </div>
        <div className="gallery-center">
          <img src={img2} alt="Enseignante avec élèves" className="gallery-image gallery-image--medium" />
        </div>
        <div className="gallery-right">
          <img src={img3} alt="Élèves travaillant ensemble" className="gallery-image gallery-image--large" />
        </div>
      </div>
      <div className="service-hero__content">
        <span className="service-hero__subtitle">
          CAP.EXCELLENCE : L'Épanouissement Scolaire et Humain
        </span>
        <h2 className="service-hero__title">
          Développons Ensemble le Potentiel de Chaque Élève
        </h2>
        <p className="service-hero__desc">
          Chez CAP.EXCELLENCE, nous sommes bien plus qu'un simple centre de soutien scolaire. 
          Nous nous engageons à accompagner les élèves qui rencontrent des difficultés 
          académiques, en leur offrant un soutien personnalisé et ciblé. Notre mission ne s'arrête 
          pas là : nous cultivons également le développement de leurs soft skills, des 
          compétences essentielles qui sont cruciales pour leur réussite future, tant sur le plan 
          scolaire que personnel.
        </p>
        <div className="service-hero__buttons">
          <a href="#about" className="service-hero__button service-hero__button--primary">À propos de nous</a>
          <a href="#contact" className="service-hero__button service-hero__button--outline">Contactez-nous</a>
        </div>
      </div>
    </div>
  )
}

export default Services