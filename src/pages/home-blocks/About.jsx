import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="welcome-one">
        <div className="welcome-one-shape" style={{backgroundImage: 'url(assets/images/shapes/welcome-one-shape.png)'}}>
          </div>
            <div className="container">
                <div className="welcome-one__top">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="welcome-one__top-left">
                                <div className="section-title text-left">
                                    <span className="section-title__tagline">welcome to our agency</span>
                                    <h2 className="section-title__title">Secure & Safe Advices for your Small & Big
                                        Businesses</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="welcome-one__top-right">
                                <div className="welcome-one__intro">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing. Perspiciatis ipsum vero optio rerum molestiae, sintory ducimus, 
                                    rem labore et delectus aspernatur! Sequi debitis vero, molestiae tempore eligendi quam sit repudiandae deleniti alias quority accusamus.
                                  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="welcome-one__bottom">
                    <ul className="list-unstyled welcome-one__feature">
                        <li className="welcome-one__feature-single wow fadeInUp" data-wow-delay="100ms">
                            <div className="welcome-one__feature-content">
                                <h3 className="welcome-one__feature-title"><Link to="consumer-product.html">Wealth <br/>
                                        Management</Link></h3>
                                <div className="welcome-one__feature-arrow">
                                    <Link to="consumer-product.html"><span className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                            <div className="welcome-one__feature-icon">
                                <span className="icon-wealth"></span>
                            </div>
                            <div className="welcome-one__feature-count"></div>
                        </li>
                        <li className="welcome-one__feature-single wow fadeInUp" data-wow-delay="200ms">
                            <div className="welcome-one__feature-content">
                                <h3 className="welcome-one__feature-title"><Link to="audit-marketing.html">Audit <br/>
                                        Marketing</Link></h3>
                                <div className="welcome-one__feature-arrow">
                                    <Link to="audit-marketing.html"><span className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                            <div className="welcome-one__feature-icon">
                                <span className="icon-data-analytics"></span>
                            </div>
                            <div className="welcome-one__feature-count"></div>
                        </li>
                        <li className="welcome-one__feature-single wow fadeInUp" data-wow-delay="300ms">
                            <div className="welcome-one__feature-content">
                                <h3 className="welcome-one__feature-title"><Link to="financial-advice.html">Finance <br/>
                                        Consulting</Link></h3>
                                <div className="welcome-one__feature-arrow">
                                    <Link to="financial-advice.html"><span className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                            <div className="welcome-one__feature-icon">
                                <span className="icon-report"></span>
                            </div>
                            <div className="welcome-one__feature-count"></div>
                        </li>
                    </ul>
                </div>
                <div className="welcome-one__find-solutions">
                    <p className="welcome-one__find-solutions-text">Consulting & Finance Services Built Specifically for
                        your Business. <Link to="about.html">Find Your Solution</Link></p>
                </div>
            </div>
        </section>
  )
}

export default About