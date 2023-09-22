import React from 'react'
import { Link } from 'react-router-dom'

const Team = () => {
  return (
    <section className="team-one">
      <div className="team-one__container">
          <div className="section-title text-center">
              <span className="section-title__tagline">professional people</span>
              <h2 className="section-title__title">Meet Our Experts</h2>
          </div>
          <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                  
                  <div className="team-one__single">
                      <div className="team-one__img">
                          <img src="assets/img/team/team-1-1.jpg" alt=""/>
                          <div className="team-one__content">
                              <h3 className="team-one__name">Sarah Albert</h3>
                              <p className="team-one__title">Consultant</p>
                          </div>
                          <ul className="list-unstyled team-one__social">
                              <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                              <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
                              <li><Link to="#"><i className="fab fa-pinterest-p"></i></Link></li>
                              <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                          </ul>
                      </div>
                  </div>
              </div>
              
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                  <div className="team-one__single">
                      <div className="team-one__img">
                          <img src="assets/img/team/team-1-1.jpg" alt=""/>
                          <div className="team-one__content">
                              <h3 className="team-one__name">Mike Hardson</h3>
                              <p className="team-one__title">Advisor</p>
                          </div>
                          <ul className="list-unstyled team-one__social">
                              <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                              <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
                              <li><Link to="#"><i className="fab fa-pinterest-p"></i></Link></li>
                              <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                  <div className="team-one__single">
                      <div className="team-one__img">
                          <img src="assets/img/team/team-1-1.jpg" alt=""/>
                          <div className="team-one__content">
                              <h3 className="team-one__name">Christine Eve</h3>
                              <p className="team-one__title">Manager</p>
                          </div>
                          <ul className="list-unstyled team-one__social">
                              <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                              <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
                              <li><Link to="#"><i className="fab fa-pinterest-p"></i></Link></li>
                              <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                          </ul>
                      </div>
                  </div>
              </div>

              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                  <div className="team-one__single">
                      <div className="team-one__img">
                          <img src="assets/img/team/team-1-1.jpg" alt=""/>
                          <div className="team-one__content">
                              <h3 className="team-one__name">Kevin Martin</h3>
                              <p className="team-one__title">Co Founder</p>
                          </div>
                          <ul className="list-unstyled team-one__social">
                              <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                              <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
                              <li><Link to="#"><i className="fab fa-pinterest-p"></i></Link></li>
                              <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  )
}

export default Team