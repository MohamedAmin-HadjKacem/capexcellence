import React from 'react'
import './Offres.css'

const Offres = () => {
  return (
    <div className="offres-container">
      <div className="offre-card offre-student">
        <h2>Inscrivez Votre Enfant<br />chez CAP.EXCELLENCE</h2>
        <button className="offre-button">Je veux inscrire mon enfant</button>
      </div>

      <div className="offre-card offre-teacher">
        <h2>Rejoignez Notre<br />Équipe Pédagogique</h2>
        <button className="offre-button">Rejoindre l'équipe pédagogique</button>
      </div>
    </div>
  )
}

export default Offres