import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Scrolltop = () => {
    const [scrollVisible, setScrollVisible]= useState(false)
    
    const scrollToTop = () => {
      window.scrollTo({       
        top: 0,
        behavior: 'smooth',
      });   
    };

    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setScrollVisible(true);
      } else {
        setScrollVisible(false);
      }
    };

    useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  

  return (
    <>
      <Link onClick={scrollToTop} className={`scroll-to-target scroll-to-top ${scrollVisible ? "show" : ""}`}>
        <i className="fa fa-angle-up"></i>
      </Link>
    </>
  );
};

export default Scrolltop;
