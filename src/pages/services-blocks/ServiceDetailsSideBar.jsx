import React from 'react'
import { Link } from 'react-router-dom'

const ServiceDetailsSideBar = () => {
  return (
    <div className="col-xl-4 col-lg-5">
        <div className="service-details__sidebar">
            <div className="service-details__sidebar-service">
                <ul className="service-details__sidebar-service-list list-unstyled">
                    <li><Link to="/">Consumer Product <span className="icon-right-arrow"></span></Link></li>
                    <li><Link to="/">Audit Marketing <span className="icon-right-arrow"></span></Link></li>
                    <li className="current"><Link to="/">Banking Advising <span className="icon-right-arrow"></span></Link></li>
                    <li><Link to="/">Business Growth <span className="icon-right-arrow"></span></Link></li>
                    <li><Link to="/">Financial Advice <span className="icon-right-arrow"></span></Link></li>
                    <li><Link to="/">Marketing Rules <span className="icon-right-arrow"></span></Link></li>
                </ul>
            </div>
            <div className="service-details__need-help">
                <div className="service-details__need-help-shape-1 float-bob-x-6"></div>
                <div className="service-details__need-help-shape-2 float-bob-x-7"></div>
                <h2 className="service-details__need-help-title">Contact with <br/> us for any <br/> advice</h2>
                <div className="service-details__need-help-icon">
                    <span className="icon-phone-call"></span>
                </div>
                <div className="service-details__need-help-contact">
                    <p>Need help? Talk to an expert</p>
                    <Link to="tel:12463330079">+1- ( 246 ) 333 - 0079</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceDetailsSideBar