import React from 'react'
import ContactInfos from '../contact-blocks/ContactInfos'
import ContactForm from '../contact-blocks/ContactForm'
import Socials from '../contact-blocks/Socials'
import Map from '../contact-blocks/Map'
import ContactHeader from '../title-headers/ContactHeader'
import ContactBlock from '../home-blocks/ContactBlock'

const Contact = () => {
  return (
    <>
      <ContactHeader/>
      <ContactInfos/>
      <ContactForm/>
      <Map/>
      <Socials/>
      <ContactBlock/>
    </>
  )
}

export default Contact