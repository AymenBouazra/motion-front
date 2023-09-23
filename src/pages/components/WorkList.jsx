import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { works } from "./Cases"
import Work from "./Work";

export default function WorkList() {
  const [filtered, setFiltered] = useState([])
  const [type, setType] = useState('All')
  useEffect(() => {
    if (type === 'All') {
      setFiltered(works);
      return;
    }
    if (type === 'Branding') {
      const branding = works.filter((x) => x.type.includes('Branding'))
      setFiltered(branding);
      return;
    }
    if (type === 'Advertising') {
      const Advertising = works.filter((x) => x.type.includes('Advertising'))
      setFiltered(Advertising);
      return;
    }
    if (type === 'Web') {
      const Web = works.filter((x) => x.type.includes('Web'))
      setFiltered(Web);
      return;
    }

  }, [type])

  return (
    <section className="cases-page">
      <div className="container">
        <div className="row">

          <div className="works-filters d-flex justify-content-center mb-5">
            <input type="radio" onClick={() => setType('All')} name="category" id="all" value="all" className="d-none" checked={type==="All"}/>
            <label className="me-4 underlined-btn" htmlFor="all">All</label>

            <input type="radio" onClick={() => setType('Branding')} name="category" id="branding" value="branding" className="d-none" />
            <label className="me-4 underlined-btn" htmlFor="branding">Branding</label>

            <input type="radio" onClick={() => setType('Web')} name="category" id="web" value="web" className="d-none" />
            <label className="me-4 underlined-btn" htmlFor="web">Web</label>

            <input type="radio" onClick={() => setType('Advertising')} name="category" id="advertising" value="advertising" className="d-none" />
            <label className="underlined-btn" htmlFor="advertising">Advertising</label>
          </div>
          
          <motion.div layout className="cases-list">
            {
              filtered.map((el, key) => {
                return <Work work={el} key={key} />
              }
              )
            }

          </motion.div>
        </div>
      </div>
    </section>
  );
}
