import React from 'react'
import Experience from '../about-blocks/Experience'
import Consultation from '../about-blocks/Consultation'
import Quality from '../about-blocks/Quality'
import Mission from '../about-blocks/Mission'
import Team from '../about-blocks/Team'
import Clients from '../about-blocks/Clients'
import AboutHeader from '../title-headers/AboutHeader'

const About = () => {
  return (
    <>
      <AboutHeader/>
      <Experience/>
      <Consultation/>
      <Quality/>
      <Mission/>
      <Team/>
      <Clients/>
      <Contact/>
    </>
  )
}

export default About