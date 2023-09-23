import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Work = ({ work }) => {
  return (
    <AnimatePresence>
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="case-one__single">
          <div className="case-one__img">
            <img src={work.cover} alt="" />
          </div>
          <div className="case-one__content">
            <p className="case-one__tagline">{work.type.join(", ")}</p>
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
    </AnimatePresence>
  );
};

export default Work;
