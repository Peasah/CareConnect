import React from 'react'
import Navbar from '../../src/component/Navbar'
import Footer from '../../src/component/Footer'

const Request = () => {
  return (
    <>
    <Navbar/>
    <h3>REQUEST FORM</h3>
    <form className="row g-3 needs-validation" noValidate="">
  <div className="col-md-4">
    <label htmlFor="validationCustom01" className="form-label">
      Email
    </label>

    <input
      type="email"
      className="form-control"
      id="validationCustom01"
      defaultValue="Mark"
      required=""
    />
    <div className="valid-feedback">Looks good!</div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom01" className="form-label">
      phone
    </label>

    <input
      type="number"
      className="form-control"
      id="validationCustom01"
      defaultValue="Mark"
      required=""
    />
    <div className="valid-feedback">Looks good!</div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom02" className="form-label">
      item name
    </label>
    <input
      type="text"
      className="form-control"
      id="validationCustom02"
      defaultValue="Otto"
      required=""
    />
    <div className="valid-feedback">Looks good!</div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustomUsername" className="form-label">
      purpose
    </label>
    <div className="input-group has-validation">
      <input
        type="text"
        className="form-control"
        id="validationCustomUsername"
        aria-describedby="inputGroupPrepend"
        required=""
      />
      <div className="invalid-feedback">Please choose a username.</div>
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom03" className="form-label">
      Location
    </label>
    <input
      type="text"
      className="form-control"
      id="validationCustom03"
      required=""
    />
    <div className="invalid-feedback">Please provide a valid city.</div>
  </div>
 
  <div className="col-12">
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        defaultValue=""
        id="invalidCheck"
        required=""
      />
        <div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupFile01">Upload</label>
  <input type="file" class="form-control" id="inputGroupFile01"/>
</div>
<div className="col-12">
      </div>
      <div className="invalid-feedback">You must agree before submitting.</div>
    </div>
  </div>
  <div class="mb-3">
            <label for="validationTextarea" class="form-label">
              Additional Info
            </label>
            <textarea
              class="form-control"
              id="validationTextarea"
              placeholder="Required example textarea"
              required
            ></textarea>
            <div class="invalid-feedback">
              Please enter a message in the textarea.
            </div>
          </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">
      Submit
    </button>
  </div>


</form>

    <Footer/>
    </>
  );
};

export default Request;