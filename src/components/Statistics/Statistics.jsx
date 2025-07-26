import React from 'react'
import './Statistics.css'

const Statistics = () => {
  const stats = [
    {
      number: "65 972",
      label: "Étudiants inscrits",
      icon: "👥"
    },
    {
      number: "5 321",
      label: "Cours terminés",
      icon: "📚"
    },
    {
      number: "44 239",
      label: "Étudiants espérants",
      icon: "📊"
    },
    {
      number: "65 972",
      label: "Étudiants inscrits",
      icon: "👥"
    }
  ]

  return (
    <div className="statistics">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <div className="stat-icon">{stat.icon}</div>
          <div className="stat-number">{stat.number}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

export default Statistics