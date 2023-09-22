import React from 'react'
import { Link } from 'react-router-dom'

const Consultation = () => {
  return (
    <section className="free-consultation">
        <div className="container">
            <div className="free-consultation__inner wow fadeInUp" data-wow-delay="300ms">
                <div className="free-consultation__left">
                    <h3 className="free-consultation__content">Get your <span>FREE</span> <br/> business consultation</h3>
                    <div className="free-consultation__icon">
                        <span className="icon-phone-call"></span>
                    </div>
                </div>
                <div className="free-consultation__right">
                    <h4 className="free-consultation__contact-info">
                        <Link to="tel:12463330079" className="free-consultation__contact-number">+1- ( 246 ) 333 - 0079</Link>
                        <Link to="mailto:needhelp@company.com" className="free-consultation__contact-email">needhelp@company.com</Link>
                    </h4>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Consultation