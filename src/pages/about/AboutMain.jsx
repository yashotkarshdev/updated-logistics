import React from 'react'
import AboutHero from './AboutHero'
import CoreValues from './CoreValues'
import Leadership from './Leadership'
import AboutCTA from './AboutCTA'
import AboutTimeline from './AboutTimeline'

const AboutMain = () => {
  return (
    <>
    <AboutHero />
    <AboutTimeline />
   {/* <CoreValues /> */}
    <Leadership />
    <AboutCTA />
    </>
  )
}

export default AboutMain