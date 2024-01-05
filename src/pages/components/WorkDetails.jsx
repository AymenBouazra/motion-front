import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import WorkDetailsHeader from "../title-headers/WorkDetailsHeader";
import ContactBlock from "../home-blocks/ContactBlock";
import axios from 'axios'

const WorkDetails = () => {
  const [work, setWork] = useState({})
  const navigate = useNavigate()
  const params = useParams()
  useEffect(() => {
    const fetchWork = async () => {
      const response = await axios.get(process.env.REACT_APP_BASE_URL + '/app/v1/works-for-clientside/' + params.slug)
      if (response.data == null) {
        window.location.href = '/page-not-found'
        return
      }
      setWork(response.data)
    }
    const controller = new AbortController();
    fetchWork()
    return controller.abort()
  }, [params.slug])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <WorkDetailsHeader cover={work?.cover} breadcrumb={work?.breadcrumb} headertitle={work?.headerTitle} />

      <section className="case-details">
        <div className="container">
          <div className="row">

            <div className="col-xl-12 case-details__content">
              <span className="section-title__tagline">get to know us</span>
              <h4 className="case-details__content-title">
                {work?.title}
              </h4>
              <div className="row justify-content-md-center">
                <div className="col-lg-12 mb-5 wow animate__fadeIn">
                  <p className="case-details__content-text-1">
                    {work?.description}
                  </p>
                </div>

                <div className="col-xl-6 mb-3">
                  <div className="case-details__details-box">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <div className="case-details__details-icon">
                          <FontAwesomeIcon icon={faUserCircle} size="lg" />
                        </div>
                        <div className="case-details__details-sub-title">
                          Client
                        </div>
                      </div>
                      <p className="case-details__details-title">{work?.Client}</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 mb-3">
                  <div className="case-details__details-box">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <div className="case-details__details-icon">
                          <FontAwesomeIcon icon={faUserCircle} size="lg" />
                        </div>
                        <div className="case-details__details-sub-title">
                          Industry
                        </div>
                      </div>
                      <p className="case-details__details-title">{work?.Industry}</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 mb-3">
                  <div className="case-details__details-box">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <div className="case-details__details-icon">
                          <FontAwesomeIcon icon={faUserCircle} size="lg" />
                        </div>
                        <div className="case-details__details-sub-title">
                          Services
                        </div>
                      </div>
                      <p className="case-details__details-title">{work?.Services}</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 mb-3">
                  <div className="case-details__details-box">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <div className="case-details__details-icon">
                          <FontAwesomeIcon icon={faUserCircle} size="lg" />
                        </div>
                        <div className="case-details__details-sub-title">
                          Date
                        </div>
                      </div>
                      <p className="case-details__details-title">{work?.Date}</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 mb-3">
                  <div className="case-details__details-box">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <div className="case-details__details-icon">
                          <FontAwesomeIcon icon={faUserCircle} size="lg" />
                        </div>
                        <div className="case-details__details-sub-title">
                          Website
                        </div>
                      </div>
                      <p className="case-details__details-title">{work?.Website}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-picture-block">
        <div className="container-fluid p-0">
          <div className="row">
            <img src={work?.firstBanner && work?.firstBanner} alt="" />
          </div>
        </div>
      </section>

      <section className="case-picture-block">
        <div className="container">
          <div className="row">
            {
              work?.firstPictures && work?.firstPictures.map((pic, index) => {
                return <div key={index} className="col-lg-6">
                  <img src={pic && pic} alt="" />
                </div>
              })
            }
          </div>
        </div>
      </section>

      <section className="work-more-details wow animate__fadeIn">
        <div className="container">
          <div className="row margin-eight-bottom md-margin-50px-bottom sm-margin-20px-bottom">
            <div className="testimonial-block-custombg"></div>
            <div className="col-12 col-lg-6 pe-5 testimonial-block wow animate__fadeInUp">
              <h5 className="mb-4">
                Holistic brand redesign focusing product design, interface
                design, studio photograph style, icon design, editorial design,
                web design &amp; motion design.
              </h5>
              <p className="section-title__tagline">
                Paul Rand / Creative Director
              </p>
            </div>
            <div className="col-12 col-xl-5 col-lg-6 offset-xl-1 extra-details wow animate__fadeInUp">
              <h4 className="case-details__content-title">
                Concept
              </h4>
              <p>
                Koordinaten bilden die Grundlage für Einsatz des Produktes
                ausgerichtete Corporate Design. Reale Daten wie zum Beispiel
                Wetterdaten, Geografische Flächen und Höhenmeter, werden in das
                Design in mit einbezogen. Die neu gestaltete Marke zeichnet sich
                sowohl durch userorientierte Einsatz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-picture-block">
        <div className="container-fluid p-0">
          <div className="row">
            <img src={work?.secondBanner && work?.secondBanner} alt="" />
          </div>
        </div>
      </section>

      <section className="case-picture-block mb-0 pb-0">
        <div className="container">
          <div className="row">
            {
              work?.secondPictures && work?.secondPictures.map((pic, index) => {
                return <div key={index} className="col-lg-6">
                  <img src={pic && pic} alt="" />
                </div>
              })
            }
          </div>
        </div>
      </section>

      <section className="cases-pagination wow animate__fadeIn pb-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="case-details__pagination-box">
                <ul className="case-details__pagination list-unstyled">
                  <li className="next">
                    <Link to="#" aria-label="Previous">
                      <i className="icon-right-arrow"></i>Prev
                    </Link>
                  </li>
                  <li className="count">
                    <Link to="#"></Link>
                  </li>
                  <li className="count">
                    <Link to="#"></Link>
                  </li>
                  <li className="count">
                    <Link to="#"></Link>
                  </li>
                  <li className="count">
                    <Link to="#"></Link>
                  </li>
                  <li className="previous">
                    <Link to="#" aria-label="Next">
                      Next<i className="icon-right-arrow"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactBlock />
    </>
  );
};

export default WorkDetails;
