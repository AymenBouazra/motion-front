import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const ContactInfos = () => {
  return (
    <section className="contact-infos">
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <div className="feature-box">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faLocation} />
                </div>
                <div className="feature-box-content">
                  <span className="title">Address</span>
                  <span className="subtitle">
                    <Link to="#" className="subtitle-link">Habib Maazoun Road Mondial building, 3rd floor, App 19</Link>
                  </span>
                </div>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="feature-box">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faLocation} />
                </div>
                <div className="feature-box-content">
                  <span className="title">Email</span>
                  <span className="subtitle">
                    <Link to="#" className="subtitle-link">contact@motion-me.com</Link>
                  </span>
                </div>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="feature-box">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faLocation} />
                </div>
                <div className="feature-box-content">
                  <span className="title">Phone</span>
                  <span className="subtitle">
                    <Link to="#" className="subtitle-link">(+216) 74 201 720</Link>
                  </span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>    
  )
}

export default ContactInfos