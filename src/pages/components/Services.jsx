import React from 'react'
import ListServices from '../services-blocks/ListServices'
import ServicesHeader from '../title-headers/ServicesHeader'
import ContactBlock from '../home-blocks/ContactBlock'

const Services = () => {
  return (
    <>
      <ServicesHeader/>
      <ListServices/>
      <ContactBlock/>
    </>
  )
}

export default Services