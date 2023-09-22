import React from 'react'
import ListServices from '../services-blocks/ListServices'
import ServicesHeader from '../title-headers/ServicesHeader'

const Services = () => {
  return (
    <>
      <ServicesHeader/>
      <ListServices/>
      <Contact/>
    </>
  )
}

export default Services