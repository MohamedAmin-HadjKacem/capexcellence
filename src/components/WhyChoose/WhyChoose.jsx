import React from 'react'
import './WhyChoose.css'
import whyChooseImage1 from '../../assets/images/Rectangle18.png'
import whyChooseImage2 from '../../assets/images/Rectangle19.png'

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
      
      <div className="why-choose__images">
        <img 
          src={whyChooseImage1} 
          alt="Étudiant souriant avec un casque" 
          className="why-choose__image why-choose__image--front"
        />
        <img 
          src={whyChooseImage2} 
          alt="Étudiante étudiant avec un casque" 
          className="why-choose__image why-choose__image--back"
        />
      </div>
    </div>
  )
}

export default WhyChoose