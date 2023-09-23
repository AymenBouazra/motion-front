import React, { useState } from "react";
import Work from "./Work";
import {motion} from "framer-motion"
import {works} from "./Cases"
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function WorkList() {
  const [filtered , setFiltered] = useState([])
  const params = useParams()
  const fetchFilter = ()=> {

  }
  useEffect(()=>{
    if(activeGenre === 0) {
      setFiltered(Branding);
      return;
    }

    const filtered = Branding.filter
  }, [])

  return (
    <section className="cases-page">
      <div className="container-xxl">
        <div className="row justify-content-md-center">
       
          <div className="works-filters d-flex justify-content-center mb-5">
            <input type="radio" name="category" id="all" value="all" className="d-none"/>
            <label className="me-4 underlined-btn" htmlFor="all">All</label>

            <input type="radio" name="category" id="branding" value="branding" className="d-none"/>
            <label className="me-4 underlined-btn" htmlFor="branding">Branding</label>
            
            <input type="radio" name="category" id="web" value="web" className="d-none"/>
            <label className="me-4 underlined-btn" htmlFor="web">Web</label>
                          
            <input type="radio" name="category" id="advertising" value="advertising" className="d-none"/>
            <label className="underlined-btn" htmlFor="advertising">Advertising</label>
          </div>
      
          <motion.div layout className="cases-list">
              {
                works.map((el, key)=>
                  {
                    return <Work work={el} key={key}/>
                  }
                )
              }

          </motion.div>
        </div>
      </div>  
    </section>
  );
}
