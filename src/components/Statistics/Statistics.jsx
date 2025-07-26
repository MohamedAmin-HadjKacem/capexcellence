import React from 'react'
import './Statistics.css'

const Statistics = () => {
  const stats = [
    {
      number: "65 972",
      label: "Étudiants inscrits",
      image: "/src/assets/images/students.png"
    },
    {
      number: "5 321",
      label: "Cours terminés",
      image: "/src/assets/images/online-learning.png"
    },
    {
      number: "44 239",
      label: "Étudiants espérants",
      image: "/src/assets/images/books.png"
    },
    {
      number: "65 972",
      label: "Étudiants inscrits",
      image: "/src/assets/images/students.png"
    }
  ]

  return (
    <div className="statistics">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <div className="stat-icon">
            <img src={stat.image} alt={stat.label} />
          </div>
          <div className="stat-number">{stat.number}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

export default Statistics