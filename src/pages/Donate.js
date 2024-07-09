import React, { useState } from "react";
import Navbar from "../../src/component/Navbar";
import Footer from "../../src/component/Footer";
import "./DonateForm.css"; // Importing CSS for custom styling

const DonateForm = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    phone: "",
    itemName: "",
    purpose: "",
    location: "",
    deliveryOption: "",
    deliveryDate: "",
    agreeTerms: false,
    additionalInfo: "",
    file: null,
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (event) => {
    setFormValues({
      ...formValues,
      file: event.target.files[0],
    });
  };

  const validateForm = () => {
    let errors = {};

    if (!formValues.email) errors.email = "Email is required.";
    if (!formValues.phone) errors.phone = "Phone is required.";
    if (!formValues.itemName) errors.itemName = "Item name is required.";
    if (!formValues.purpose) errors.purpose = "Purpose is required.";
    if (!formValues.location) errors.location = "Location is required.";
    if (!formValues.deliveryOption) errors.deliveryOption = "Delivery option is required.";
    if (!formValues.deliveryDate) errors.deliveryDate = "Delivery/Pick-up date is required.";
    if (!formValues.agreeTerms) errors.agreeTerms = "You must agree to terms and conditions.";
    if (!formValues.additionalInfo) errors.additionalInfo = "Additional information is required.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 2000);

    // Reset form values
    setFormValues({
      email: "",
      phone: "",
      itemName: "",
      purpose: "",
      location: "",
      deliveryOption: "",
      deliveryDate: "",
      agreeTerms: false,
      additionalInfo: "",
      file: null,
    });

    // Reset error message
    setErrorMessage("");
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h3 className="text-center my-4">DONATION FORM</h3>
        <div className="motivational-message text-center">
          <h4>Your Donations Make a Difference</h4>
          <p>
            Every item you donate helps improve the lives of those in need. Your generosity
            provides essential resources to families, individuals, and communities. Together, we
            can create a positive impact and bring hope to many. Thank you for your support!
          </p>
        </div>
        <form className="row g-3 needs-validation" noValidate="" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label">
              Email
            </label>
            <input
              type="email"
              className={`form-control ${formErrors.email ? "is-invalid" : ""}`}
              id="validationCustom01"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              required=""
            />
            <div className="invalid-feedback">{formErrors.email}</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom02" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              className={`form-control ${formErrors.phone ? "is-invalid" : ""}`}
              id="validationCustom02"
              name="phone"
              value={formValues.phone}
              onChange={handleInputChange}
              required=""
            />
            <div className="invalid-feedback">{formErrors.phone}</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom03" className="form-label">
              Item Name
            </label>
            <input
              type="text"
              className={`form-control ${formErrors.itemName ? "is-invalid" : ""}`}
              id="validationCustom03"
              name="itemName"
              value={formValues.itemName}
              onChange={handleInputChange}
              required=""
            />
            <div className="invalid-feedback">{formErrors.itemName}</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom04" className="form-label">
              Purpose
            </label>
            <input
              type="text"
              className={`form-control ${formErrors.purpose ? "is-invalid" : ""}`}
              id="validationCustom04"
              name="purpose"
              value={formValues.purpose}
              onChange={handleInputChange}
              required=""
            />
            <div className="invalid-feedback">{formErrors.purpose}</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom05" className="form-label">
              Location
            </label>
            <input
              type="text"
              className={`form-control ${formErrors.location ? "is-invalid" : ""}`}
              id="validationCustom05"
              name="location"
              value={formValues.location}
              onChange={handleInputChange}
              required=""
            />
            <div className="invalid-feedback">{formErrors.location}</div>
          </div>
          <div className="col-md-3">
            <label htmlFor="validationCustom06" className="form-label">
              Delivery Option
            </label>
            <select
              className={`form-select ${formErrors.deliveryOption ? "is-invalid" : ""}`}
              id="validationCustom06"
              name="deliveryOption"
              value={formValues.deliveryOption}
              onChange={handleInputChange}
              required=""
            >
              <option selected disabled value="">
                Choose...
              </option>
              <option>Drop-off</option>
              <option>Pick-up</option>
            </select>
            <div className="invalid-feedback">{formErrors.deliveryOption}</div>
          </div>
          <div className="col-md-3">
            <label htmlFor="validationCustom07" className="form-label">
              Delivery/Pick-up Date
            </label>
            <input
              type="date"
              className={`form-control ${formErrors.deliveryDate ? "is-invalid" : ""}`}
              id="validationCustom07"
              name="deliveryDate"
              value={formValues.deliveryDate}
              onChange={handleInputChange}
              required=""
            />
            <div className="invalid-feedback">{formErrors.deliveryDate}</div>
          </div>
          <div className="col-12">
            <div className="mb-3 form-check">
              <input
                className={`form-check-input ${formErrors.agreeTerms ? "is-invalid" : ""}`}
                type="checkbox"
                id="invalidCheck"
                name="agreeTerms"
                checked={formValues.agreeTerms}
                onChange={handleInputChange}
                required=""
              />
              <label className="form-check-label" htmlFor="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">{formErrors.agreeTerms}</div>
            </div>
          </div>
          <div className="col-12">
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="inputGroupFile01">
                Upload
              </label>
              <input
                type="file"
                className="form-control"
                id="inputGroupFile01"
                name="file"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="mb-3 col-12">
            <label htmlFor="validationTextarea" className="form-label">
              Additional Info
            </label>
            <textarea
              className={`form-control ${formErrors.additionalInfo ? "is-invalid" : ""}`}
              id="validationTextarea"
              name="additionalInfo"
              value={formValues.additionalInfo}
              onChange={handleInputChange}
              placeholder="Enter additional information..."
              required=""
            ></textarea>
            <div className="invalid-feedback">{formErrors.additionalInfo}</div>
          </div>
          <div className="col-12 text-center pb-4">
            <button
              className="btn btn-primary width-24 col-3"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
        {formSubmitted && (
          <div className="alert alert-success text-center" role="alert">
            Thank you for your donation! We will contact you shortly.
          </div>
        )}
        {errorMessage && (
          <div className="alert alert-danger text-center" role="alert">
            {errorMessage}
          </div>
        )}
        <p className="text-center mt-3">
          Have questions? Contact us at: <a href="mailto:info@careconnect.com">info@careconnect.com</a>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default DonateForm;
