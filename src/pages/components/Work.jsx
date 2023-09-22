import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"

const Work = () => {
  return (
    <motion.div layout className="wow fadeInUp filter-item branding" data-wow-delay="100ms">
        <div className="case-one__single">
            <div className="case-one__img">
                <img src="assets/img/works/project-block-1.png" alt="" />
            </div>
            <div className="case-one__content">
                <p className="case-one__tagline">leadership</p>
                <h3 className="case-one__title">
                <Link to="/works-details">
                    Businesses <br /> Growth
                </Link>
                </h3>
                    <div className="case-one__arrow">
                    <Link to="/works-details">
                    <span className="icon-right-arrow"></span>
                    </Link>
                </div>
            </div>
            
        </div>
    </motion.div>
  )
}

export default Work