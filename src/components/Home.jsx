import React from 'react';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import Offres from './Offres/Offres';
import Cours from './Cours/Cours';
import WhyChoose from './WhyChoose/WhyChoose';
import Fondateur from './Fondateur/Fondateur';
import Statistics from './Statistics/Statistics';
import Pub from './Pub/Pub';
import Testimonials from './Testimonials/Testimonials';
import Quick from './QuickLink/Quick';
import './Home.css';

function Home() {
  return (
    <main>
      <Quick />
      <Hero />
      <Services />
      <Offres />
      <Cours />
      <WhyChoose />
      <Fondateur />
      <Statistics />
      <Pub />
      <Testimonials />
    </main>
  );
}

export default Home; 