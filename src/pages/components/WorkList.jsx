import React, { useState, useEffect, createContext } from "react";
import { AnimatePresence } from "framer-motion"
import axios from "axios"
import Work from "./Work";

export const WorksContext = createContext();

export default function WorkList() {
  const [projects, setProjects] = useState()
  const [filtered, setFiltered] = useState()

  const handleClickFilter = (genre) => {
    const work = projects.filter((x) => x.type.includes(genre))
    if (genre === 'All') {
      setFiltered(projects);
    }
    else {
      setFiltered(work);
    }
  }
  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_BASE_URL + '/app/v1/works-for-clientside')
        setProjects(response.data)
        setFiltered(response.data)
      }
      catch (error) {
        console.log('Error:', error)
      }
    }
    fetchWorks()
  }, [])

  const value = {
    filtered
  }

  return (
    <WorksContext.Provider value={value}>
      <section className="cases-page">
        <div className="container">
          <div className="works-filters d-flex justify-content-center mb-5">
            <input type="radio" onClick={() => handleClickFilter('All')} name="category" id="all" value="all" className="d-none" defaultChecked />
            <label className="me-4 underlined-btn" htmlFor="all">All</label>

            <input type="radio" onClick={() => handleClickFilter('Branding')} name="category" id="branding" value="branding" className="d-none" />
            <label className="me-4 underlined-btn" htmlFor="branding">Branding</label>

            <input type="radio" onClick={() => handleClickFilter('Web')} name="category" id="web" value="web" className="d-none" />
            <label className="me-4 underlined-btn" htmlFor="web">Web</label>

            <input type="radio" onClick={() => handleClickFilter('Advertising')} name="category" id="advertising" value="advertising" className="d-none" />
            <label className="underlined-btn" htmlFor="advertising">Advertising</label>
          </div>
          <div className="cases-list">
            <AnimatePresence>
              <Work />
            </AnimatePresence>

          </div>
        </div>
      </section>
    </WorksContext.Provider>
  );
}
