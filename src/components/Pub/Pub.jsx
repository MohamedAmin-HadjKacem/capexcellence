import React from 'react'
import './Pub.css'
import pubImage from '../../assets/images/tutoring.png'

const Pub = () => {
  return (
    <div className="pub-section">
      <div className="pub-content">
        <h2 className="pub-title">Prêt(e) à Inscrire Votre Enfant ?</h2>
        <p className="pub-description">
          Offrez à votre enfant un soutien scolaire personnalisé et le développement 
          de compétences essentielles pour son avenir.
        </p>
        <button className="pub-button">Je veux inscrire mon enfant</button>
      </div>
      <div className="pub-image-container">
        <img src={pubImage} alt="Parent et enfant étudiant ensemble" className="pub-image" />
      </div>
      <div className="pub-background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </div>
  )
}

export default Pub