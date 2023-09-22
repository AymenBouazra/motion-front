import React from 'react'
import { Link } from 'react-router-dom'
import { default as FooterLogo } from '../assets/img/logo-white-t.svg';

const Footer = () => {
  return (
    <>
    <footer className="site-footer ">
    <div className="site-footer__top">
        <div className="site-footer-shape-1"
            style={{backgroundImage: 'url(assets/img/shapes/site-footer-shape-1.png)'}}></div>
        <div className="container">
            <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                    <div className="footer-widget__column footer-widget__about">
                        <div className="footer-widget__logo">
                            <Link to="/">
                              <img src={FooterLogo} alt="" width={180}/>
                           </Link >
                        </div>
                        <div className="footer-widget__about-text-box">
                            <p className="footer-widget__about-text">Great Experience for Building Customers &
                                Businesses</p>
                        </div>
                        <div className="site-footer__social">
                            <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                            <Link to="/"><i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                    <div className="footer-widget__column footer-widget__explore clearfix">
                        <h3 className="footer-widget__title">Explore</h3>
                        <ul className="footer-widget__explore-list list-unstyled clearfix">
                            <li><Link to="about.html">About</Link></li>
                            <li><Link to="team.html">Meet our team</Link></li>
                            <li><Link to="cases.html">Case stories</Link></li>
                            <li><Link to="blog.html">Latest news</Link></li>
                            <li><Link to="contact.html">Contact</Link></li>
                        </ul>
                        <ul
                            className="footer-widget__explore-list footer-widget__explore-list-two list-unstyled clearfix">
                            <li><Link to="about.html">Support</Link></li>
                            <li><Link to="about.html">Terms of use</Link></li>
                            <li><Link to="about.html">Privacy policy</Link></li>
                            <li><Link to="about.html">Help</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                   
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                    <div className="footer-widget__column footer-widget__contact clearfix">
                        <h3 className="footer-widget__title">Contact</h3>
                        <p className="footer-widget__contact-text">Habib Maazoun Road Mondial building, 3rd floor, App 19</p>
                        <h4 className="footer-widget__contact-info">
                            <Link to="tel:12463330079" className="footer-widget__contact-number d-block">( +216 ) 74 201 720</Link>
                            <Link to="mailto:contact@motion-me.com"
                                className="footer-widget__contact-email">contact@motion-me.com</Link >
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="site-footer__bottom">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="site-footer__bottom-inner">
                        <p className="site-footer__bottom-text">© Copyright 2023 by <Link to="#">Motion Agency</Link >
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
</>
  )
}

export default Footer