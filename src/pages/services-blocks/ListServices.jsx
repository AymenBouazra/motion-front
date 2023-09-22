import React from 'react'
import { Link } from 'react-router-dom'

const ListServices = () => {
  return (
    <section className="services-one">
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6">
                  
                    <div className="services-one__single">
                        <div className="services-one__img">
                            <img src="../assets/img/services/services-1-1.jpg" alt=""/>
                        </div>
                        <div className="services-one__content">
                            <div className="services-one__title-box">
                                <div className="services-one__title-icon">
                                    <span className="icon-creative"></span>
                                </div>
                                <h3 className="services-one__title"><Link to="/">Consumer <br/> Product</Link></h3>
                            </div>
                            <p className="services-one__text">Lorem ipsum dolor sit donec amet tristique ante vel sem dictum is rhoncus elit sed.</p>
                            <div className="services-one__bottom">
                                <Link to="/ServiceDetails" className="services-one__read-more">Read More</Link>
                                <Link to="/ServiceDetails" className="services-one__arrow"><span className="icon-right-arrow"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="services-one__single">
                        <div className="services-one__img">
                            <img src="../assets/img/services/services-1-2.jpg" alt=""/>
                        </div>
                        <div className="services-one__content">
                            <div className="services-one__title-box">
                                <div className="services-one__title-icon">
                                    <span className="icon-business"></span>
                                </div>
                                <h3 className="services-one__title"><Link to="/">Banking <br/> Advising</Link></h3>
                            </div>
                            <p className="services-one__text">Lorem ipsum dolor sit donec amet tristique ante vel sem dictum is rhoncus elit sed.</p>
                            <div className="services-one__bottom">
                                <Link to="/" className="services-one__read-more">Read More</Link>
                                <Link to="/" className="services-one__arrow"><span className="icon-right-arrow"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="services-one__single">
                        <div className="services-one__img">
                            <img src="../assets/img/services/services-1-3.jpg" alt=""/>
                        </div>
                        <div className="services-one__content">
                            <div className="services-one__title-box">
                                <div className="services-one__title-icon">
                                    <span className="icon-global"></span>
                                </div>
                                <h3 className="services-one__title"><Link to="/">Markeitng <br/> Rules</Link></h3>
                            </div>
                            <p className="services-one__text">Lorem ipsum dolor sit donec amet tristique ante vel sem dictum is rhoncus elit sed.</p>
                            <div className="services-one__bottom">
                                <Link to="/" className="services-one__read-more">Read More</Link>
                                <Link to="/" className="services-one__arrow"><span className="icon-right-arrow"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="services-one__single">
                        <div className="services-one__img">
                            <img src="../assets/img/services/services-1-4.jpg" alt=""/>
                        </div>
                        <div className="services-one__content">
                            <div className="services-one__title-box">
                                <div className="services-one__title-icon">
                                    <span className="icon-mobile-analytics"></span>
                                </div>
                                <h3 className="services-one__title"><Link to="/">Business <br/> Growth</Link></h3>
                            </div>
                            <p className="services-one__text">Lorem ipsum dolor sit donec amet tristique ante vel sem dictum is rhoncus elit sed.</p>
                            <div className="services-one__bottom">
                                <Link to="/" className="services-one__read-more">Read More</Link>
                                <Link to="/" className="services-one__arrow"><span className="icon-right-arrow"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="services-one__single">
                        <div className="services-one__img">
                            <img src="../assets/img/services/services-1-5.jpg" alt=""/>
                        </div>
                        <div className="services-one__content">
                            <div className="services-one__title-box">
                                <div className="services-one__title-icon">
                                    <span className="icon-analysis"></span>
                                </div>
                                <h3 className="services-one__title"><Link to="/">Audit <br/> Marketing</Link></h3>
                            </div>
                            <p className="services-one__text">Lorem ipsum dolor sit donec amet tristique ante vel sem dictum is rhoncus elit sed.</p>
                            <div className="services-one__bottom">
                                <Link to="/" className="services-one__read-more">Read More</Link>
                                <Link to="/" className="services-one__arrow"><span className="icon-right-arrow"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="services-one__single">
                        <div className="services-one__img">
                            <img src="../assets/img/services/services-1-6.jpg" alt=""/>
                        </div>
                        <div className="services-one__content">
                            <div className="services-one__title-box">
                                <div className="services-one__title-icon">
                                    <span className="icon-creative-1"></span>
                                </div>
                                <h3 className="services-one__title"><Link to="/">Financial <br/> Advice</Link></h3>
                            </div>
                            <p className="services-one__text">Lorem ipsum dolor sit donec amet tristique ante vel sem dictum is rhoncus elit sed.</p>
                            <div className="services-one__bottom">
                                <Link to="/" className="services-one__read-more">Read More</Link>
                                <Link to="/" className="services-one__arrow"><span className="icon-right-arrow"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ListServices