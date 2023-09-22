import React from 'react'
import Slider from '../home-blocks/Slider'
import About from '../home-blocks/About'
import Works from '../home-blocks/Works'
import Services from '../home-blocks/Services'
import Clients from '../home-blocks/Clients'
import Benefits from '../home-blocks/Benefits'
import Mission from '../home-blocks/Mission'
import ContactBlock from '../home-blocks/ContactBlock'


const Home = () => {
  return (
    <div>
        <Slider/>
        <About/>
        <Services/>
        <Mission/>
        <Benefits/>
        <Works/>
        <Clients/>
        <ContactBlock/>
    </div>
  )
}

export default Home