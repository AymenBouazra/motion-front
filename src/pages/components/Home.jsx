import React from 'react'
import Slider from '../home-blocks/Slider'
import About from '../home-blocks/About'
import Works from '../home-blocks/Works'
import Services from '../home-blocks/Services'
import Clients from '../home-blocks/Clients'
import Benefits from '../home-blocks/Benefits'
import Mission from '../home-blocks/Mission'
import Contact from '../home-blocks/Contact'


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
        <Contact/>
    </div>
  )
}

export default Home