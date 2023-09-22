import React from 'react'
import { Link } from 'react-router-dom'

const Mission = () => {
  return (
    <section className="our-mission">
        <div className="our-mission-bg-box">
            <div className="our-mission-bg jarallax"
                style={{backgroundImage: "url(assets/img/backgrounds/mission.jpg)"}}></div>
        </div>
        <div className="our-mission-shape-1 shapemover2"></div>
        <div className="our-mission-shape-2 shapemover2"></div>
        <div className="our-mission-shape-3 shapemover2"></div>
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="our-mission__inner">
                        <h2 className="our-mission__title">Mission is to Protect <br /> your Businesses & <br /> Much More  </h2>
                        <Link to="/" className="thm-btn our-mission__btn">Discover More</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Mission