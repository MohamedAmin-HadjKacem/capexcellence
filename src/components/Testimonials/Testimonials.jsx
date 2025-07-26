import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      text: "Grâce à CAP.EXCELLENCE, j'ai amélioré mes notes et développé ma confiance avec des compétences clés pour l'avenir. C'est un soutien complet qui m'a vraiment préparé(e) à réussir !",
      name: "Yasmine Chaouech",
      role: "Teacher",
      rating: 5,
      image: "/src/assets/images/Rectangle26.png"
    },
    {
      text: "Les cours de soutien et les ateliers m'ont aidé à comprendre mes leçons et à progresser. CAP.EXCELLENCE m'a donné les outils pour être plus autonome et confiant(e)!",
      name: "Adam Gharbi",
      role: "Teacher",
      rating: 5,
      image: "/src/assets/images/Rectangle24.png"
    },
    {
      text: "Mes notes ont grimpé et j'ai appris à travailler en équipe grâce aux ateliers de CAP.EXCELLENCE. C'est plus qu'un simple soutien scolaire, c'est un vrai coup de pouce pour l'avenir !",
      name: "Lina Mansour",
      role: "Teacher",
      rating: 5,
      image: "/src/assets/images/Rectangle28.png"
    },
    {
      text: "Avant CAP.EXCELLENCE, j'étais timide. Maintenant, je prends la parole facilement et mes résultats suivent ! Je suis vraie reconnaissant(e).",
      name: "Omar Zribi",
      role: "Teacher",
      rating: 5,
      image: "/src/assets/images/Rectangle43.png"
    },
    {
      text: "J'ai enfin compris les maths et j'ai adoré les ateliers sur la créativité. CAP.EXCELLENCE rend l'apprentissage amusant et efficace.",
      name: "Sarah Ben Ali",
      role: "Teacher",
      rating: 5,
      image: "/src/assets/images/Rectangle45.png"
    },
    {
      text: "Le soutien personnalisé m'a permis de surmonter mes difficultés en français. Les formateurs sont incroyables et très patients.",
      name: "Sami Bouaziz",
      role: "Teacher",
      rating: 5,
      image: "/src/assets/images/Rectangle36.png"
    },
    {
      text: "CAP.EXCELLENCE m'a donné la confiance nécessaire pour mes examens et m'a appris à mieux m'organiser. C'est une expérience très enrichissante.",
      name: "Nour Fares",
      role: "Teacher",
      rating: 5,
      image: "/src/assets/images/Rectangle35.png"
    },
    {
      text: "Grâce aux compétences en leadership acquises ici, je me sens prête à relever de nouveaux défis. Je recommande CAP.EXCELLENCE à tous ceux qui veulent exceller.",
      name: "Mehdi Haddad",
      role: "Teacher",
      rating: 5,
      image: "/src/assets/images/Rectangle37.png"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <span key={index} className="star">★</span>
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <span className="testimonials-label">L'Avis de nos Étudiants</span>
        <h2 className="testimonials-title">Ce que disent nos Élèves</h2>
        <p className="testimonials-subtitle">Vous trouverez quelques chose pour éveiller votre curiosité et enrichir votre parcours.</p>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-stars">
              {renderStars(testimonial.rating)}
            </div>
            <div className="testimonial-text">
              "{testimonial.text}"
            </div>
            <div className="testimonial-author">
              <img src={testimonial.image} alt={testimonial.name} />
              <div className="testimonial-info">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
