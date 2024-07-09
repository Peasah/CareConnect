import React from "react";
import Navbar from "../../src/component/Navbar";
import Footer from "../../src/component/Footer";
import "./Request.css"; // Importing CSS for custom styling

const Request = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h3 className="text-center my-4">REQUEST FORM</h3>
        <div className="motivational-message text-center">
          <h4>Your Needs Matter to Us</h4>
          <p>
            We understand that everyone needs a helping hand from time to time.
            Whether you need essential items, support, or any kind of
            assistance, we're here to help. Fill out the form below, and let's
            work together to meet your needs. Your request will be handled with
            care and confidentiality. Thank you for reaching out!
          </p>
        </div>
        <form className="row g-3 needs-validation" noValidate="">
          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="validationCustom01"
              defaultValue=""
              required=""
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom02" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              className="form-control"
              id="validationCustom02"
              defaultValue=""
              required=""
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom03" className="form-label">
              Item Name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom03"
              defaultValue=""
              required=""
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom04" className="form-label">
              Purpose
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom04"
              aria-describedby="inputGroupPrepend"
              required=""
            />
            <div className="invalid-feedback">Please provide a purpose.</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom05" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom05"
              required=""
            />
            <div className="invalid-feedback">Please provide a location.</div>
          </div>
          <div className="col-12">
            <div className="mb-3 form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="invalidCheck"
                required=""
              />
              <label className="form-check-label" htmlFor="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
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
              />
            </div>
          </div>
          <div className="mb-3 col-12">
            <label htmlFor="validationTextarea" className="form-label">
              Additional Info
            </label>
            <textarea
              className="form-control"
              id="validationTextarea"
              placeholder="Enter additional information..."
              required=""
            ></textarea>
            <div className="invalid-feedback">
              Please provide additional information.
            </div>
          </div>
          <div className="col-12 pb-4 text-center">
            <button className="btn btn-primary col-3" type="submit">
              Submit Request
            </button>
          </div>
        </form>
        <p className="text-center mt-3">
          Have questions? Contact us at:{" "}
          <a href="mailto:info@careconnect.com">info@careconnect.com</a>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Request;
