import React from 'react'
import { Link } from 'react-router-dom'

const Benefits = () => {
  return (
        <section className="trusted-one">
            <div className="container">
                <div className="trusted-one__inner">
                    <div className="trusted-one__left">
                        <h3 className="trusted-one__content">Trusted Commercial Consulting & Finance Broker</h3>
                    </div>
                    <div className="trusted-one__right">
                        <ul className="list-unstyled trusted-one__content-box">
                            <li className="trusted one__single wow fadeInLeft" data-wow-delay="100ms">
                                <div className="trusted-one__icon">
                                    <span className="icon-briefcase"></span>
                                </div>
                                <h3 className="trusted-one__title"><Link to="/">Experienced</Link></h3>
                                <p className="trusted-one__text">Morbi nec finibus misd</p>
                            </li>
                            <li className="trusted one__single wow fadeInLeft" data-wow-delay="200ms">
                                <div className="trusted-one__icon">
                                    <span className="icon-bar-chart"></span>
                                </div>
                                <h3 className="trusted-one__title"><Link to="/">Convenience</Link></h3>
                                <p className="trusted-one__text">Morbi nec finibus misd</p>
                            </li>
                            <li className="trusted one__single wow fadeInLeft" data-wow-delay="300ms">
                                <div className="trusted-one__icon">
                                    <span className="icon-team-leader"></span>
                                </div>
                                <h3 className="trusted-one__title"><Link to="/">Professional</Link></h3>
                                <p className="trusted-one__text">Morbi nec finibus misd</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Benefits