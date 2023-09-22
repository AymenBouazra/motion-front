import React, { useEffect, useState } from "react";
import Isotope from "isotope-layout";
import { Link } from "react-router-dom";

export default function WorkList() {
  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState("*");
  const [selected, setSelected] = useState('all');

  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  useEffect(() => {
    setIsotope(
      new Isotope(".filter-container", {
        itemSelector: ".filter-item",
        layoutMode: "fitRows",
        percentPosition: true,
        columnWidth: ".col-lg-4",
        fitRows: { gutter: 30 },
      })
    );
  }, []);

  useEffect(() => {
    if (isotope) {
      // sanity check
      filterKey === "*"
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);

  return (
    <section className="cases-page">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-5">
            <div className="works-filters d-flex justify-content-center">
              
              <input type="radio" name="category" id="all" value="all" className="d-none" onClick={() => setFilterKey("*")} checked={selected === 'all'} onChange={handleChange}/>
              <label className="me-4 underlined-btn" htmlFor="all">All</label>

              <input type="radio" name="category" id="branding" value="branding" className="d-none" onClick={() => setFilterKey("branding")} checked={selected === 'branding'} onChange={handleChange}/>
              <label className="me-4 underlined-btn" htmlFor="branding">Branding</label>
              
              <input type="radio" name="category" id="web" value="web" className="d-none" onClick={() => setFilterKey("web")} checked={selected === 'web'} onChange={handleChange}/>
              <label className="me-4 underlined-btn" htmlFor="web">Web</label>
                            
              <input type="radio" name="category" id="advertising" value="advertising" className="d-none" onClick={() => setFilterKey("advertising")} checked={selected === 'advertising'} onChange={handleChange}/>
              <label className="underlined-btn" htmlFor="advertising">Advertising</label>
            </div>
          </div>

          <div className="filter-container">
            <div
              className="wow fadeInUp filter-item branding"
              data-wow-delay="100ms"
            >
              <div className="case-one__single">
                <div className="case-one__img">
                  <img src="assets/img/works/work-1.webp" alt="" />
                </div>
                <div className="case-one__content">
                  <p className="case-one__tagline">leadership</p>
                  <h3 className="case-one__title">
                    <Link to="/works-details">
                      Businesses <br /> Growth
                    </Link>
                  </h3>
                </div>
                <div className="case-one__arrow">
                  <Link to="/works-details">
                    <span className="icon-right-arrow"></span>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="wow fadeInUp filter-item web"
              data-wow-delay="100ms"
            >
              <div className="case-one__single">
                <div className="case-one__img">
                  <img src="assets/img/works/work-1.webp" alt="" />
                </div>
                <div className="case-one__content">
                  <p className="case-one__tagline">leadership</p>
                  <h3 className="case-one__title">
                    <a href="case-details.html">
                      Businesses <br /> Growth
                    </a>
                  </h3>
                </div>
                <div className="case-one__arrow">
                  <Link to="case-details.html">
                    <span className="icon-right-arrow"></span>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="wow fadeInUp filter-item branding"
              data-wow-delay="100ms"
            >
              <div className="case-one__single">
                <div className="case-one__img">
                  <img src="assets/img/works/work-1.webp" alt="" />
                </div>
                <div className="case-one__content">
                  <p className="case-one__tagline">leadership</p>
                  <h3 className="case-one__title">
                    <a href="case-details.html">
                      Businesses <br /> Growth
                    </a>
                  </h3>
                </div>
                <div className="case-one__arrow">
                  <Link to="case-details.html">
                    <span className="icon-right-arrow"></span>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="wow fadeInUp filter-item branding"
              data-wow-delay="100ms"
            >
              <div className="case-one__single">
                <div className="case-one__img">
                  <img src="assets/img/works/work-1.webp" alt="" />
                </div>
                <div className="case-one__content">
                  <p className="case-one__tagline">leadership</p>
                  <h3 className="case-one__title">
                    <a href="case-details.html">
                      Businesses <br /> Growth
                    </a>
                  </h3>
                </div>
                <div className="case-one__arrow">
                  <Link to="case-details.html">
                    <span className="icon-right-arrow"></span>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="wow fadeInUp filter-item advertising"
              data-wow-delay="100ms"
            >
              <div className="case-one__single">
                <div className="case-one__img">
                  <img src="assets/img/works/work-1.webp" alt="" />
                </div>
                <div className="case-one__content">
                  <p className="case-one__tagline">leadership</p>
                  <h3 className="case-one__title">
                    <a href="case-details.html">
                      Businesses <br /> Growth
                    </a>
                  </h3>
                </div>
                <div className="case-one__arrow">
                  <Link to="case-details.html">
                    <span className="icon-right-arrow"></span>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="wow fadeInUp filter-item web"
              data-wow-delay="100ms"
            >
              <div className="case-one__single">
                <div className="case-one__img">
                  <img src="assets/img/works/work-1.webp" alt="" />
                </div>
                <div className="case-one__content">
                  <p className="case-one__tagline">leadership</p>
                  <h3 className="case-one__title">
                    <a href="case-details.html">
                      Businesses <br /> Growth
                    </a>
                  </h3>
                </div>
                <div className="case-one__arrow">
                  <Link to="case-details.html">
                    <span className="icon-right-arrow"></span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
