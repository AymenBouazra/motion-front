import React from 'react'
import { Link } from 'react-router-dom'

const ContactBlock = () => {
  return (
    <section className="cta-one">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="cta-one__inner">
                        <div className="cta-one__inner-content">
                            <div className="cta-one-shape-1 float-bob-x"></div>
                            <div className="cta-one-shape-2 float-bob-x-2"></div>
                            <h3 className="cta-one__title">We’re delivering the best <br/> customer experience</h3>
                            <Link to="/" className="thm-btn cta-one__btn">Discover More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default ContactBlock