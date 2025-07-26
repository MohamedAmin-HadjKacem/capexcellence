import React from 'react'
import './Fondateur.css'
import fondateurImage from '../../assets/images/Rectangle 35.png'

const Fondateur = () => {
  return (
    <div className="fondateur">
      <div className="fondateur__image-container">
        <img src={fondateurImage} alt="Fondateur de Cap Excellence" className="fondateur__image" />
        <div className="fondateur__background-shapes"></div>
      </div>

      <div className="fondateur__content">
        <span className="fondateur__label">Mot du fondateur du centre Cap excellence</span>

        <h2 className="fondateur__title">
          Au Cœur de Cap Excellence :<br />
          Partage, Confiance et Réussite
        </h2>

        <div className="fondateur__text">
          <p>Chers parents, chers élèves,</p>
          
          <p>C'est avec une immense joie que je vous souhaite la bienvenue au Centre de Soutien 
          Scolaire Cap Excellence.</p>
          
          <p>Car le soutien c'est bien plus qu'un centre d'accompagnement scolaire : c'est un lieu de 
          partage, de confiance et de réussite. Ici, chaque élève est accueilli avec bienveillance, 
          écouté avec attention et accompagné avec méthode pour surmonter ses difficultés et 
          progresser à son rythme.</p>
          
          <p>Notre ambition est simple : redonner à chaque jeune le goût d'apprendre, la confiance en 
          soi, et les clés de la réussite. Grâce à une équipe pédagogique engagée et 
          expérimentée, nous construisons ensemble un environnement où l'élève se sent 
          soutenu, valorisé et encouragé.</p>
          
          <p>Chers parents, votre rôle est essentiel dans cette aventure. Ensemble, avec vous et vos 
          enfants, nous formons une véritable équipe tournée vers l'avenir.</p>
          
          <p>Chers élèves, sachez que chaque effort compte. Chaque progrès, aussi petit soit-il, est 
          une victoire.</p>
          
          <p>Je vous souhaite à toutes et à tous une belle année, riche en apprentissages, en 
          découvertes et en réussites.</p>
          
          <p>Avec toute ma bienveillance,</p>
        </div>

        <div className="fondateur__signature">
          <span className="fondateur__name">M. Noureddine Bellahbib</span>
          <span className="fondateur__role">Fondateur et directeur du Centre de Soutien Scolaire Cap Excellence</span>
        </div>
      </div>
    </div>
  )
}

export default Fondateur