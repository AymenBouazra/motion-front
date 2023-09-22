import React from 'react'
import { Link } from 'react-router-dom'

const Experience = () => {
  return (
    <section className="work-together-two">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6">
                    <div className="work-together-two__left wow slideInLeft" data-wow-delay="100ms"
                    data-wow-duration="2500ms">
                        <div className="work-together-two__img">
                            <img src="assets/img/resources/experience.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                    <div className="work-together-tow__right">
                        <div className="section-title text-left">
                            <span className="section-title__tagline">get to know us</span>
                            <h2 className="section-title__title">Work Together for your Business</h2>
                        </div>
                        <div className="work-together-tow__content">
                            <div className="work-together-tow__icon">
                                <span className="icon-recruit"></span>
                            </div>
                            <h3 className="work-together-tow__text">Suspendisse vel iaculis leo. Curabitur scelerisque mi porta justo nulla lonm ise fermentum porta.</h3>
                        </div>
                        <p className="work-together-tow__text-2">Lorem ipsum dolor sit amet, consectetur nod adipisicing elit sed do eiusmod tempor incididunt ut siply free text ois labore et dolore magna aliqua lonm andhn.</p>
                        <Link to="about.html" className="thm-btn work-together-tow__btn">Discover More</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience