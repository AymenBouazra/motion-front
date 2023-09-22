import React from 'react'

const Quality = () => {
  return (
    <section className="quality-work">
        <div className="container">
            <div className="row">
                <div className="col-xl-7 col-lg-7">
                    <div className="quality-work__left">
                        <div className="section-title text-left">
                            <span className="section-title__tagline">meet our agency</span>
                            <h2 className="section-title__title">Work that Meet <br/> your Expectations</h2>
                        </div>
                        <div className="quality-work__tab-box tabs-box">
                            <ul className="tab-buttons clearfix list-unstyled">
                                <li data-tab="#solutions" className="tab-btn active-btn"><span>new solutions</span></li>
                                <li data-tab="#work" className="tab-btn"><span>smart work</span></li>
                            </ul>
                            <div className="tabs-content">
                            
                                <div className="tab active-tab" id="solutions">
                                    <div className="tab-content__inner">
                                        <div className="tab-content__img">
                                            <img src="assets/images/resources/tab-content-img-1.jpg" alt=""/>
                                        </div>
                                        <div className="tab-content__contnet">
                                            <h4 className="tab-content__title">Pellentesque pharetra ornare dui</h4>
                                            <p className="tab-content__text">There are many variations of pas of available but the majority have suffered alteration in some form, or words which don look.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="tab " id="work">
                                    <div className="tab-content__inner">
                                        <div className="tab-content__img">
                                            <img src="assets/images/resources/tab-content-img-1.jpg" alt=""/>
                                        </div>
                                        <div className="tab-content__contnet">
                                            <h4 className="tab-content__title">Pellentesque pharetra ornare dui</h4>
                                            <p className="tab-content__text">There are many variations of pas of available but the majority have suffered alteration in some form, or words which don look.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-5">
                    <div className="quality-work__right">
                        <ul className="quality-work__points list-unstyled">
                            <li>
                                <div className="icon">
                                    <span className="icon-checking"></span>
                                </div>
                                <div className="text">
                                    <h4>Nulla Posuere Tortor eu</h4>
                                    <p>There are many variations of passages of available but the majority have simply free text suffered.</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <span className="icon-conversation"></span>
                                </div>
                                <div className="text">
                                    <h4>Morbi nec Finibus mis</h4>
                                    <p>There are many variations of passages of available but the majority have simply free text suffered.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Quality