import React, { useState } from "react";
import Navbar from "../../src/component/Navbar";
import Footer from "../../src/component/Footer";
import "./ContactUs.css"; // Importing CSS for custom styling
import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!formValues.name) errors.name = "Name is required.";
    if (!formValues.email) errors.email = "Email is required.";
    if (!formValues.subject) errors.subject = "Subject is required.";
    if (!formValues.message) errors.message = "Message is required.";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formValues, "YOUR_USER_ID")
      .then(
        (response) => {
          setIsSubmitting(false);
          setFormSubmitted(true);
          setFormValues({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setIsSubmitting(false);
          setErrorMessage("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4 contact-us">
        <h3 className="text-center my-4">Contact Us</h3>
        <div className="row">
          
          <div className="d-flex justify-content-between gap-5">
            <div className="col-md- contact-info ">
            <h4 className="mb-4">Contact Information</h4>
              <ul className="list-unstyled">
                <li>
                  <FaPhone className="icon" /> <a href="tel:+233543130024">+233543130024</a>
                </li>
                <li>
                  <FaWhatsapp className="icon" />{" "}
                  <a href="https://wa.me/+233552011456">+233552011456</a>
                </li>
                <li>
                  <FaEnvelope className="icon" />{" "}
                  <a href="mailto:amumaris517@gmail.com">
                    careconnect@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 contact-info">
            <form action="https://formsubmit.co/amumaris517@email.com" method="POST">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      formErrors.name ? "is-invalid" : ""
                    }`}
                    id="name"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="invalid-feedback">{formErrors.name}</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`form-control ${
                      formErrors.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="invalid-feedback">{formErrors.email}</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      formErrors.subject ? "is-invalid" : ""
                    }`}
                    id="subject"
                    name="subject"
                    value={formValues.subject}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="invalid-feedback">{formErrors.subject}</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className={`form-control ${
                      formErrors.message ? "is-invalid" : ""
                    }`}
                    id="message"
                    name="message"
                    value={formValues.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                  <div className="invalid-feedback">{formErrors.message}</div>
                </div>
                <div className="text-center">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
              {formSubmitted && (
                <div className="alert alert-success text-center" role="alert">
                  Thank you for your message! We will get back to you soon.
                </div>
              )}
              {errorMessage && (
                <div className="alert alert-danger text-center" role="alert">
                  {errorMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
