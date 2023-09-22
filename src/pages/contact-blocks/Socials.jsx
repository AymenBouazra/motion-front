import React from "react";
import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <section className="contact-socials">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center contact-social-block">

          <div className="title-container">
            <span className="heading">
              <span className="primary-title">Connect with social media</span>
            </span>
          </div>

          <div className="divider-content">
            <div className="divider">
              <span className="divider-separator"> </span>
            </div>
          </div>

          <div className="widget-container">
            <div className="social-icons-wrapper">
              <div className="social-icons">
                  <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                  <Link to="/"><i className="fab fa-instagram"></i></Link>
              </div>
            </div>
          </div>

        </div>
      </div> 
    </section>
  );
};

export default Socials;
