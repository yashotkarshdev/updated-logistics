import React from 'react'
import Hero from './Hero.jsx'
import FleetSection from './FleetSection.jsx'
import ServicesSection from './ServicesSection.jsx'
import TeamSection from './TeamSection.jsx'
import AboutSection from './AboutSection.jsx'
import EcomPartners from './EcomPartners.jsx'
import HeroCarousel from './HeroCarousel.jsx'

const HomeMain = () => {
  return (
    <>
    {/* <Hero /> */}
    <HeroCarousel />
    <AboutSection />
    <ServicesSection />
    <EcomPartners />
    <FleetSection />
    <TeamSection />
    </>
  )
}

export default HomeMain