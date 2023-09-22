import React from 'react'
import ServiceDetailsSideBar from '../services-blocks/ServiceDetailsSideBar'
import ServiceDetailsMain from '../services-blocks/ServiceDetailsMain'
import ServiceDetailsHeader from '../title-headers/ServiceDetailsHeader'

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
    <Contact/>          
  </>
  )
}

export default ServiceDetails