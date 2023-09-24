import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';

const Works = () => {
  return (
    <section className="case-two">
      <div className="container">
        <div className="section-title text-left">
          <span className="section-title__tagline">Our recent work</span>
          <h2 className="section-title__title">New Case Studies</h2>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <OwlCarousel className="case-two__carousel owl-theme owl-carousel" fluidSpeed items={1} loop margin={30}> {/*autoplay*/}
              <div className="case-one__single">
                <div className="case-one__img">
                  <img src="../assets/img/works/work-home.webp" alt="" />
                </div>
                <div className="case-one__content">
                  <p className="case-one__tagline">leadership</p>
                  <h3 className="case-one__title">
                      Businesses <br /> Growth
                  </h3>
                  <div className="case-one__arrow">
                    <Link to="/">
                      <span className="icon-right-arrow"></span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="case-one__single">
                <div className="case-one__img">
                  <img src="../assets/img/works/work-home.webp" alt="" />
                </div>
                <div className="case-one__content">
                  <p className="case-one__tagline">Management</p>
                  <h3 className="case-one__title">
                    <Link to="/">
                      Marketing <br /> Advice
                    </Link>
                  </h3>
                  <div className="case-one__arrow">
                    <Link to="/">
                      <span className="icon-right-arrow"></span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="case-one__single">
                <div className="case-one__img">
                  <img src="../assets/img/works/work-home.webp" alt="" />
                </div>
                <div className="case-one__content">
                  <p className="case-one__tagline">strategy</p>
                  <h3 className="case-one__title">
                    <Link to="/">
                      Finance <br /> Consulting
                    </Link>
                  </h3>
                  <div className="case-one__arrow">
                    <Link to="/">
                      <span className="icon-right-arrow"></span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="case-one__single">
                <div className="case-one__img">
                  <img src="../assets/img/works/work-home.webp" alt="" />
                </div>
                <div className="case-one__content">
                  <p className="case-one__tagline">growth</p>
                  <h3 className="case-one__title">
                    <Link to="/">
                      Digital <br /> Campaigns
                    </Link>
                  </h3>
                  <div className="case-one__arrow">
                    <Link to="/">
                      <span className="icon-right-arrow"></span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="case-one__single">
                <div className="case-one__img">
                  <img src="../assets/img/works/work-home.webp" alt="" />
                </div>
                <div className="case-one__content">
                  <p className="case-one__tagline">strategy</p>
                  <h3 className="case-one__title">
                    <Link to="/">
                      Finance <br /> Consulting
                    </Link>
                  </h3>
                  <div className="case-one__arrow">
                    <Link to="/">
                      <span className="icon-right-arrow"></span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="case-one__single">
                <div className="case-one__img">
                  <img src="../assets/img/works/work-home.webp" alt="" />
                </div>
                <div className="case-one__content">
                  <p className="case-one__tagline">growth</p>
                  <h3 className="case-one__title">
                    <Link to="/">
                      Digital <br /> Campaigns
                    </Link>
                  </h3>
                  <div className="case-one__arrow">
                    <Link to="/">
                      <span className="icon-right-arrow"></span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="case-one__single">
                <div className="case-one__img">
                  <img src="../assets/img/works/work-home.webp" alt="" />
                </div>
                <div className="case-one__content">
                  <p className="case-one__tagline">Management</p>
                  <h3 className="case-one__title">
                    <Link to="/">
                      Marketing <br /> Advice
                    </Link>
                  </h3>
                  <div className="case-one__arrow">
                    <Link to="/">
                      <span className="icon-right-arrow"></span>
                    </Link>
                  </div>
                </div>
              </div> 
              </OwlCarousel>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Works;
