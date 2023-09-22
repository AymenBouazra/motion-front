import React from 'react'
import ServiceDetailsSideBar from '../services-blocks/ServiceDetailsSideBar'
import ServiceDetailsMain from '../services-blocks/ServiceDetailsMain'
import ServiceDetailsHeader from '../title-headers/ServiceDetailsHeader'
import ContactBlock from '../home-blocks/ContactBlock'

const ServiceDetails = () => {
  return (
    <>
    <ServiceDetailsHeader/>
    <section class="service-details">
      <div class="container">
          <div class="row">
            <ServiceDetailsSideBar/>
            <ServiceDetailsMain/>
          </div>
      </div>
    </section>  
    <ContactBlock/>      
  </>
  )
}

export default ServiceDetails