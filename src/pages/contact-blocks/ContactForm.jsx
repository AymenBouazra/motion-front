import { Field, Formik } from "formik";
import React from "react";

const ContactForm = () => {
  return (
    <section className="contact-form">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section-title text-center">
              <span className="section-title__tagline">Contact with us</span>
              <h2 className="section-title__title">Write a Message</h2>
            </div>
          </div>

          <div className="col-xl-12">
            <Formik
              initialValues={{
                fullname: "",
                email: "",
                phone: "",
                subject:"",
                message: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.fullname) {
                  errors.fullname = "Required";
                }
                if (!values.phone) {
                  errors.phone = "Required";
                } else if (
                  !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i.test(
                    values.phone
                  )
                ) {
                  errors.phone = "Invalid phone";
                }
                if (!values.subject) {
                  errors.subject = "Required";
                }
                if (!values.message) {
                  errors.message = "Required";
                }
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                    values.email
                  )
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={async (values, { setSubmitting }) => {}}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form
                  onSubmit={handleSubmit}
                  className="d-flex flex-column align-items-start w-100 comment-form__input-box p-4"
                >
                  <div className="row">
                    <div className="col-lg-6 ps-0">
                      <input
                        type="text"
                        name="fullname"
                        placeholder="Full name"
                        className="form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.fullname}
                      />
                      <p className="text-danger px-1 py-2">
                        {errors.fullname && touched.fullname && errors.fullname}
                      </p>
                    </div>
                    <div className="col-lg-6 pe-0">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        className="form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <p className="text-danger px-1 py-2">
                        {errors.email && touched.email && errors.email}
                      </p>
                    </div>

                    <div className="col-lg-6 ps-0">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        className="form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                      />
                      <p className="text-danger px-1 py-2">
                        {errors.phone &&
                          touched.phone &&
                          errors.phone}
                      </p>
                    </div>

                    <div className="col-lg-6 pe-0">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.subject}
                      />
                      <p className="text-danger px-1 py-2">
                        {errors.subject && touched.subject && errors.subject}
                      </p>
                    </div>
                  
                  <Field as="textarea"
                    name="message" 
                    className="form-control"
                    placeholder="Your message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}>
                  </Field>
                  <p className="text-danger px-1 py-2">
                    {errors.message &&
                      touched.message &&
                      errors.message}
                  </p>
                  
                  <div className="mt-4 ps-0">
                    <button
                      type="submit"
                      className="thm-btn comment-form__btn px-5"
                      disabled={isSubmitting}
                    >
                      Send a message
                    </button>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
