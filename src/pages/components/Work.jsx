import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

const Work = ({ work }) => {
    return (
        <motion.div layout>
            <div className="case-one__single">
                <div className="case-one__img">
                    <img src="assets/img/works/project-block-1.png" alt="" />
                </div>
                <div className="case-one__content">
                    <p className="case-one__tagline">{work.type}</p>
                    <h3 className="case-one__title">
                        {/* to fix color */}
                        {work.headerTitle}
                    </h3>
                    <div className="case-one__arrow">
                        <Link to={"/works/" + work.slug}>
                            <span className="icon-right-arrow"></span>
                        </Link>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}

export default Work