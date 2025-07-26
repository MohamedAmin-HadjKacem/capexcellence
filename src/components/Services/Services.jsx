import React from 'react'
import './Service.css'
import img1 from '../../assets/images/Rectangle 4.png'
import img2 from '../../assets/images/Rectangle 5.png'
import img3 from '../../assets/images/Rectangle 6.png'

const Services = () => {
  return (
    <div className="service-hero">
      <div className="service-hero__gallery">
        <div className="service-hero__gallery--top">
          <img src={img1} alt="Enfants en classe" />
        </div>
        <div className="service-hero__gallery--middle">
          <img src={img2} alt="Enseignante avec élèves" />
        </div>
        <div className="service-hero__gallery--bottom">
          <img src={img3} alt="Élèves travaillant ensemble" />
        </div>
      </div>
      <div className="service-hero__content">
        <span className="service-hero__subtitle">
          CAP.EXCELLENCE : L'Épanouissement Scolaire et Humain
        </span>
        <h1 className="service-hero__title">
          Développons Ensemble le Potentiel<br />de Chaque Élève
        </h1>
        <p className="service-hero__desc">
          Chez CAP.EXCELLENCE, nous sommes bien plus qu'un simple centre de soutien scolaire. 
          Nous nous engageons à accompagner les élèves qui rencontrent des difficultés 
          académiques, en leur offrant un soutien personnalisé et ciblé. Notre mission ne s'arrête 
          pas là : nous cultivons également le développement de leurs soft skills, des 
          compétences essentielles qui sont cruciales pour leur réussite future, tant sur le plan 
          scolaire que personnel.
        </p>
        <div className="service-hero__buttons">
          <a href="#about" className="btn btn-primary">À propos de nous</a>
          <a href="#contact" className="btn btn-outline">Contactez-nous</a>
        </div>
      </div>
    </div>
  )
}

export default Services