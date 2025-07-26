import React from 'react'
import './WhyChoose.css'
import whyChooseImage from '../../assets/images/Rectangle 4.png'

const WhyChoose = () => {
  return (
    <div className="why-choose">
      <div className="why-choose__content">
        <span className="why-choose__label">Pourquoi Choisir CAP.EXCELLENCE ?</span>
        
        <h2 className="why-choose__title">
          Votre Partenaire pour la Réussite<br />
          et l'Épanouissement
        </h2>
        
        <p className="why-choose__description">
          Chez CAP.EXCELLENCE, nous nous engageons à offrir un accompagnement unique et 
          complet pour la réussite de chaque élève. Nous ne nous contentons pas de combler les 
          lacunes académiques ; nous cultivons également les compétences essentielles pour la 
          vie. Chaque élève bénéficie d'un suivi personnalisé, adapté à ses besoins spécifiques et 
          à son rythme d'apprentissage, garantissant des progrès réels et durables. Notre double 
          expertise liée au soutien scolaire rigoureux et au développement des soft skills telles que 
          la communication, le leadership et l'autonomie, préparent ainsi nos jeunes à exceller non 
          seulement dans leurs études, mais aussi dans leur parcours de vie.
        </p>

        <button className="why-choose__cta">Voir tous les cours</button>
      </div>
      
      <div className="why-choose__image">
        <img src={whyChooseImage} alt="Étudiants qui étudient ensemble" />
      </div>
    </div>
  )
}

export default WhyChoose