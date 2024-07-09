import React from "react";
import './nav.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-lg-0 navbar-nav-scroll d-flex align-items-center justify-content-between"
              style={{ "--bs-scroll-height": "100px" }}
            >
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <img src="/images/logo1.jpg" className="rounded-circle" alt="" width="75px" height='75px' />
                </Link>
              </li>
              <li className="nav-item h5">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item h5">
                <Link className="nav-link" to="/pictures">
                  Items Available
                </Link>
              </li>
              <li className="nav-item h5">
                <Link className="nav-link" to="/donate">
                  Donate
                </Link>
              </li>
              <li className="nav-item h5">
                <Link className="nav-link" to="/request">
                  Request
                </Link>
              </li>
              <li className="nav-item h5">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-dark" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
