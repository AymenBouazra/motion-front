import React from "react";
import { Link } from "react-router-dom";

const Advantages = () => {
  return (
    <section className="services-two">
      <div className="container">
        <div className="services-two__top">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="services-two__top-left">
                <div className="section-title text-left">
                  <span className="section-title__tagline">Our Services</span>
                  <h2 className="section-title__title">Services We Offer</h2>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="services-two__top-right">
                <p className="services-two__top-text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="services-two__bottom">
          <div className="row">
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="services-two__single">
                <div className="services-two__icon">
                  <span className="icon-creative"></span>
                </div>
                <h3 className="services-two__title">
                  <Link to="consumer-product.html">
                    Consumer <br />
                    Product
                  </Link>
                </h3>
                <p className="services-two__text">
                  Lorem ipsum is are <br /> many variations of <br /> pass of
                  majority.
                </p>
                <div className="services-two__bottom-box">
                  <Link
                    to="consumer-product.html"
                    className="services-two__read-more"
                  >
                    Read More
                  </Link>
                  <Link
                    to="consumer-product.html"
                    className="services-two__arrow"
                  >
                    <span className="icon-right-arrow"></span>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="200ms"
            >
              <div className="services-two__single">
                <div className="services-two__icon">
                  <span className="icon-analysis"></span>
                </div>
                <h3 className="services-two__title">
                  <Link to="audit-marketing.html">
                    Audit <br /> Marketing
                  </Link>
                </h3>
                <p className="services-two__text">
                  Lorem ipsum is are <br /> many variations of <br /> pass of
                  majority.
                </p>
                <div className="services-two__bottom-box">
                  <Link
                    to="audit-marketing.html"
                    className="services-two__read-more"
                  >
                    Read More
                  </Link>
                  <Link
                    to="audit-marketing.html"
                    className="services-two__arrow"
                  >
                    <span className="icon-right-arrow"></span>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div className="services-two__single">
                <div className="services-two__icon">
                  <span className="icon-business"></span>
                </div>
                <h3 className="services-two__title">
                  <Link to="banking-advising.html">
                    Banking <br />
                    Advicing
                  </Link>
                </h3>
                <p className="services-two__text">
                  Lorem ipsum is are <br /> many variations of <br /> pass of
                  majority.
                </p>
                <div className="services-two__bottom-box">
                  <Link
                    to="banking-advising.html"
                    className="services-two__read-more"
                  >
                    Read More
                  </Link>
                  <Link
                    to="banking-advising.html"
                    className="services-two__arrow"
                  >
                    <span className="icon-right-arrow"></span>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="400ms"
            >
              <div className="services-two__single">
                <div className="services-two__icon">
                  <span className="icon-global"></span>
                </div>
                <h3 className="services-two__title">
                  <Link to="marketing-rules.html">
                    Marketing <br /> Rules
                  </Link>
                </h3>
                <p className="services-two__text">
                  Lorem ipsum is are <br /> many variations of <br /> pass of
                  majority.
                </p>
                <div className="services-two__bottom-box">
                  <Link
                    to="marketing-rules.html"
                    className="services-two__read-more"
                  >
                    Read More
                  </Link>
                  <Link
                    to="marketing-rules.html"
                    className="services-two__arrow"
                  >
                    <span className="icon-right-arrow"></span>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="400ms"
            >
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
