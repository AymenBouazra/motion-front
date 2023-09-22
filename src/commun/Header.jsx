import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { default as logo } from '../assets/img/logo-white-t.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = ({showSecondNav}) => {

  const [isSearchPopupActive, setIsSearchPopupActive] = useState(false);
  const [isMobileNavExpanded, setIsMobileNavExpanded] = useState(false);
  const [isBodyLocked, setIsBodyLocked] = useState(false);

  const searchToggler = () => {
    setIsSearchPopupActive(!isSearchPopupActive);
    setIsMobileNavExpanded(false);
    setIsBodyLocked(!isBodyLocked);
  };

  const mobileToggler = () => {
    setIsMobileNavExpanded(!isMobileNavExpanded);
    setIsBodyLocked(!isBodyLocked);
  };

  return (
    <>
      <header className="main-header clearfix">
        <nav className="main-menu clearfix">
          <div className="main-menu-wrapper clearfix">
            <div className="main-menu-wrapper__left">
              <div className="main-menu-wrapper__logo">
                <NavLink to="/">
                  <img className="header-logo" src={logo} alt="" />
                </NavLink>
              </div>
              <div className="main-menu-wrapper__main-menu">
                <NavLink type="button" className="mobile-nav__toggler" onClick={mobileToggler}>
                  <i className="fa fa-bars"></i>
                </NavLink>
                <ul className="main-menu__list">
                  <li className="active">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About us</NavLink>
                  </li>
                  <li className="dropdown">
                    <NavLink to="/services">Services</NavLink>
                    <ul>
                        <li><NavLink to="/service-details">Service 1</NavLink></li>
                        <li><NavLink to="/service-details">Service 2</NavLink></li>
                        <li><NavLink to="/service-details">Service 3</NavLink></li>
                        <li><NavLink to="/service-details">Service 4</NavLink></li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/works">Works</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="main-menu-wrapper__right">
              <div className="main-menu-wrapper__call">
                <div className="main-menu-wrapper__call-icon">
                  <span className="icon-phone-call"></span>
                </div>
                <div className="main-menu-wrapper__call-number">
                  <p>Need help? Talk to an expert</p>
                  <h5>
                    <NavLink to="/">( +216 ) 74 201 720</NavLink>
                  </h5>
                </div>
              </div>
              <div className="main-menu-wrapper__search-cat">
                <button onClick={searchToggler} className="main-menu-wrapper__search search-toggler icon-magnifying-glass"></button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content">
          <nav className="main-menu clearfix">
          <div className="main-menu-wrapper clearfix">
            <div className="main-menu-wrapper__left">
              <div className="main-menu-wrapper__logo">
                <NavLink to="/">
                  <img className="header-logo" src={logo} alt="" />
                </NavLink>
              </div>
              <div className="main-menu-wrapper__main-menu">
                <NavLink type="button" className="mobile-nav__toggler" onClick={mobileToggler}>
                  <i className="fa fa-bars"></i>
                </NavLink>
                <ul className="main-menu__list">
                  <li className="active">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About us</NavLink>
                  </li>
                  <li className="dropdown">
                    <NavLink to="/services">Services</NavLink>
                    <ul>
                        <li><NavLink to="/service-details">Service 1</NavLink></li>
                        <li><NavLink to="/service-details">Service 2</NavLink></li>
                        <li><NavLink to="/service-details">Service 3</NavLink></li>
                        <li><NavLink to="/service-details">Service 4</NavLink></li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/works">Works</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="main-menu-wrapper__right">
              <div className="main-menu-wrapper__call">
                <div className="main-menu-wrapper__call-icon">
                  <span className="icon-phone-call"></span>
                </div>
                <div className="main-menu-wrapper__call-number">
                  <p>Need help? Talk to an expert</p>
                  <h5>
                    <NavLink to="/">( +216 ) 74 201 720</NavLink>
                  </h5>
                </div>
              </div>
              <div className="main-menu-wrapper__search-cat">
                <button onClick={searchToggler} className="main-menu-wrapper__search search-toggler icon-magnifying-glass"></button>
              </div>
            </div>
          </div>
          </nav>
        </div>
      </div>

      <div className={`mobile-nav__wrapper ${isMobileNavExpanded ? 'expanded' : ''}`}>
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>
        <div className="mobile-nav__content">
            <span className="mobile-nav__close mobile-nav__toggler" onClick={mobileToggler}><i className="fa fa-times"></i></span>

            <div className="logo-box">
                <NavLink to="index.html" aria-label="logo image"><img src="assets/images/resources/logo-1.png" width="155"
                        alt="" /></NavLink>
            </div>
            <div className="mobile-nav__container">
            <ul className="main-menu__list">
                  <li className="active">
                    <NavLink to="/" onClick={mobileToggler}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" onClick={mobileToggler}>About us</NavLink>
                  </li>
                  <li className="dropdown">
                    <NavLink to="/services" onClick={mobileToggler}>Services</NavLink>
                    <ul>
                        <li><NavLink to="/service-details" onClick={mobileToggler}>Service 1</NavLink></li>
                        <li><NavLink to="/service-details" onClick={mobileToggler}>Service 2</NavLink></li>
                        <li><NavLink to="/service-details" onClick={mobileToggler}>Service 3</NavLink></li>
                        <li><NavLink to="/service-details" onClick={mobileToggler}>Service 4</NavLink></li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/works" onClick={mobileToggler}>Works</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" onClick={mobileToggler}>Contact</NavLink>
                  </li>
                </ul>
            </div>
        </div>
      </div>
      
    <div className={`search-popup ${isSearchPopupActive ? 'active' : ''}`}> {/*ref={searchPopupRef*/}
      <div className="search-popup__overlay search-toggler"></div>
      <div className="search-popup__content">
          <form action="/">
              <label htmlFor="search" className="sr-only">search here</label>
              <input type="text" id="search" placeholder="Search Here..." />
              <button type="submit" aria-label="search submit" className="thm-btn" style={{right: '67px'}}>
                <i className="icon-magnifying-glass"></i>
              </button>
              <button type="button" onClick={searchToggler} aria-label="search submit" className="thm-btn search-close" > 
                <FontAwesomeIcon icon={faXmark}/>
              </button>
          </form>
      </div>
    </div>

    {isBodyLocked && <style>{'body { overflow: hidden; }'}</style>}
    </>
  );
};

export default Header;
