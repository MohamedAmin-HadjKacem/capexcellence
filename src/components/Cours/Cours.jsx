import React from 'react'
import './Cours.css'
import mathImage from '../../assets/images/Rectangle9.png'
import francaisImage from '../../assets/images/Rectangle11.png'
import anglaisImage from '../../assets/images/Rectangle13.png'
import sciencesImage from '../../assets/images/Rectangle15.png'
import communicationImage from '../../assets/images/Rectangle60.png'
import leadershipImage from '../../assets/images/Rectangle61.png'
import autonomieImage from '../../assets/images/Rectangle62.png'
import creativiteImage from '../../assets/images/Rectangle63.png'

const Cours = () => {
  const courses = [
    {
      category: "Mathématiques",
      title: "Maîtrise des Maths :",
      subtitle: "De l'Arithmétique à l'Algèbre",
      description: "De l'arithmétique à l'algèbre pour une solide compréhension.",
      image: mathImage
    },
    {
      category: "Français",
      title: "Français Sans Faute :",
      subtitle: "Compréhension, Rédaction et Grammaire",
      description: "Améliorez l'expression écrite, orale, grammaire et orthographe.",
      image: francaisImage
    },
    {
      category: "Anglais",
      title: "Anglais Pratique :",
      subtitle: "Renforcez vos Bases et Développez votre Fluency",
      description: "Renforcez vos bases et gagnez en fluidité pour communiquer en confiance.",
      image: anglaisImage
    },
    {
      category: "Sciences",
      title: "Sciences Expliquées :",
      subtitle: "Physique, Chimie et SVT Simplifiées",
      description: "Physique, Chimie, SVT simplifiées pour une meilleure compréhension.",
      image: sciencesImage
    },
    {
      category: "Communication",
      title: "Maîtrise de la",
      subtitle: "Communication Efficace",
      description: "Apprenez à exprimer vos idées clairement, écouter activement et interagir constructivement dans toutes les situations.",
      image: communicationImage
    },
    {
      category: "Leadership",
      title: "Développement du Leadership",
      subtitle: "en Action",
      description: "Développez votre initiative, votre capacité à motiver les autres et à travailler en équipe pour atteindre des objectifs communs.",
      image: leadershipImage
    },
    {
      category: "Responsabilité",
      title: "Acquisition de l'Autonomie",
      subtitle: "et de la Responsabilité",
      description: "Gérez votre temps, prenez des décisions éclairées et assumez vos responsabilités pour devenir plus indépendant.",
      image: autonomieImage
    },
    {
      category: "Renforcement",
      title: "Stimulation de la Créativité",
      subtitle: "et de l'Innovation",
      description: "Analysez les informations, évaluez des arguments et prenez des décisions pertinentes et réfléchies.",
      image: creativiteImage
    }
  ]

  return (
    <div className="cours-section">
      <div className="cours-header">
        <h2>Découvrez nos Cours Phares</h2>
        <div className="cours-header-content">
          <p>Vous trouverez forcément de quoi éveiller votre curiosité et développer vos compétences.</p>
          <a href="#" className="voir-cours">Voir tous les cours</a>
        </div>
      </div>

      <div className="cours-grid">
        {courses.map((course, index) => (
          <div className="cours-card" key={index}>
            <div className="cours-card-image">
              <img src={course.image} alt={course.title} />
              <span className="cours-category">{course.category}</span>
            </div>
            <div className="cours-card-content">
              <h3>{course.title}</h3>
              <h4>{course.subtitle}</h4>
              <p>{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cours