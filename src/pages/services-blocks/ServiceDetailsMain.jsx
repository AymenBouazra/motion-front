import React from "react";

const ServiceDetailsMain = () => {
  return (
    <div className="col-xl-8 col-lg-7">
      <div className="service-details__right">
        <div className="service-details__img">
          <img src="assets/images/services/service-details-img-2.jpg" alt="" />
        </div>
        <div className="service-details__content">
          <div className="service-details__title-box">
            <div className="service-details__title-icon">
              <span className="icon-global"></span>
            </div>
            <h3 className="service-details__title">Banking Advising</h3>
          </div>
          <p className="service-details__text-1">
            Lorem ipsum is simply free text used by copytyping refreshing. Neque
            porro est qui dolorem ipsum quia quaed inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Aelltes port lacus
            quis enim var sed efficitur turpis gilla sed sit amet finibus eros.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the ndustry standard dummy text ever
            since the 1500s.
          </p>
          <p className="service-details__text-2">
            It has survived not only five centuries. Lorem Ipsum is simply dummy
            text of the new design printng and type setting Ipsum take a look at
            our round. When an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting.
          </p>
        </div>
        <ul className="service-details__two-icons list-unstyled">
          <li className="service-details__two-icon-single">
            <div className="service-details__two-icon">
              <span className="icon-right-arrow"></span>
            </div>
            <p className="service-details__two-icon-content">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum.
            </p>
          </li>
          <li className="service-details__two-icon-single">
            <div className="service-details__two-icon">
              <span className="icon-right-arrow"></span>
            </div>
            <p className="service-details__two-icon-content">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum.
            </p>
          </li>
        </ul>
        <p className="service-details__text-3">
          When an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting. Lorem Ipsum has been the
          ndustry standard dummy text ever since the 1500s. It has survived not
          only five centuries, but also the leap into electronic typesetting.
        </p>
        <div className="service-details__how-help">
          <div className="row">
            <div className="col-xl-6">
              <div className="service-details__how-help-single">
                <div className="service-details__how-help-img">
                  <img
                    src="assets/images/services/service-details-how-help-1.jpg"
                    alt=""
                  />
                </div>
                <div className="service-details__how-help-content">
                  <p className="service-details__how-help-text-1">
                    Pellentesque pharetra ornare dui, non malesuada magna
                    convallis vitae.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="service-details__how-help-single">
                <div className="service-details__how-help-img">
                  <img
                    src="assets/images/services/service-details-how-help-2.jpg"
                    alt=""
                  />
                </div>
                <div className="service-details__how-help-content">
                  <p className="service-details__how-help-text-2">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum.
                  </p>
                  <ul className="list-unstyled service-details__how-help-points">
                    <li>
                      <div className="icon">
                        <i className="fa fa-arrow-right"></i>
                      </div>
                      <div className="text">
                        <p>In id diam nec nisi congue tincidunt</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fa fa-arrow-right"></i>
                      </div>
                      <div className="text">
                        <p>Sed tristique lorem non tesque</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-details__faq">
          <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
            <div className="accrodion active">
              <div className="accrodion-title">
                <h4>Interdum et malesuada fames ac ante ipsum</h4>
              </div>
              <div className="accrodion-content">
                <div className="inner">
                  <p>
                    Suspendisse finibus urna mauris, vitae consequat quam vel.
                    Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis
                    pellentesque.
                  </p>
                </div>
              </div>
            </div>
            <div className="accrodion">
              <div className="accrodion-title">
                <h4>Maecenas condimentum sollicitudin ligula,</h4>
              </div>
              <div className="accrodion-content">
                <div className="inner">
                  <p>
                    Suspendisse finibus urna mauris, vitae consequat quam vel.
                    Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis
                    pellentesque.
                  </p>
                </div>
              </div>
            </div>
            <div className="accrodion last-chiled">
              <div className="accrodion-title">
                <h4>Duis rhoncus orci ut metus rhoncus</h4>
              </div>
              <div className="accrodion-content">
                <div className="inner">
                  <p>
                    Suspendisse finibus urna mauris, vitae consequat quam vel.
                    Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis
                    pellentesque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsMain;
