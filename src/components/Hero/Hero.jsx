import React from 'react';
import heroImg from '../../assets/images/Rectangle 1.png';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section position-relative">
      <div className="hero-bg">
        <img src={heroImg} alt="Enseignante et enfants" className="hero-bg-img"/>
        <div className="hero-overlay"></div>
      </div>
      <div className="container hero-content d-flex align-items-center">
        <div className="hero-text col-lg-6 col-12">
          <p className="hero-subtitle mb-2">Dépassez les défis, révélez votre potentiel.</p>
          <h1 className="hero-title mb-3">CAP.EXCELLENCE :<br />Votre Partenaire pour l'Excellence</h1>
          <p className="hero-desc mb-4">
            Vous ou votre enfant rencontrez des difficultés scolaires ? CAP.EXCELLENCE est là pour offrir un soutien ciblé et attentif. Notre mission est double : consolider les acquis académiques et renforcer les compétences comportementales indispensables à l’épanouissement scolaire et personnel.
          </p>
          <a href="#inscription" className="btn btn-primary btn-lg">Je veux inscrire mon enfant</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;