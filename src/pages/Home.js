import React from "react";
import "./page.css";
import Navbar from "../../src/component/Navbar";
import Footer from "../../src/component/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home--container">
        <img
          className="home--image"
          src="./images/bg_1.jpg"
          alt="People making a donation"
        />
        <div className="about--us">
          <h1 className="about--title">About Us</h1>
          <p className="about--content">
            Welcome to CareConnect, a platform that connects those who care with
            those in need. Our mission is to make giving and receiving easy,
            efficient, and impactful. At CareConnect, we believe that everyone
            deserves access to the resources they need to thrive. That's why
            we've created a platform that allows individuals and organizations
            to donate goods, services, and funds to those who need them most.
            Our story began with a simple idea: to connect people who care with
            people who need care. We saw a world where resources were going to
            waste, while others were struggling to access the basics. We knew
            that technology could bridge this gap, and CareConnect was born. Our
            team is dedicated to creating a platform that is user-friendly,
            reliable, and secure. We strive to build a community that is based
            on trust, transparency, and compassion. Our goal is to make a
            difference, one connection at a time. Join us in our mission to
            connect care and make a positive impact in the world.
          </p>
          <div className="cta-buttons d-flex justify-content-center gap-5">
          <Link className="nav-link" to="/donate"><button className="btn btn-primary rounded p-2">
                  Donate Now
            </button></Link>
            <Link className="nav-link" to="/request"><button className="btn btn-primary rounded p-2">
                  Request Now
            </button></Link>
          </div>
        </div>
      </div>
      <div className="testimonial">
        <div className="impact-stories text-center mb-2">
          <h2>Impact Stories</h2>
          <div>
            <p>
              Read inspiring stories from people whose lives have been changed
              by CareConnect's initiatives.
            </p>
            <div className="donation--image d-flex justify-content-between">
              <img src="./images/osu.jpeg" alt="osu-children_home" />
              <img src="./images/hospital.jpg" alt="osu-children_home" />
              <img src="./images/school.jpg" alt="osu-children_home" />
            </div>
          </div>
        </div>

        <div className="featured-projects text-center mb-2">
          <h2>Featured Projects</h2>
          <p>Explore our current projects and see how you can contribute.</p>
          <div className="d-flex justify-content-between mb-3">
            <div className="donation--text">
              <img src="./images/kidney.jpg" alt="osu-children_home" />
              <p className="project--title">Kidney Transplant</p>
            </div>
            <div className="donation--text">
              <img src="./images/two_kids.jpg" alt="osu-children_home" />
              <p className="project--title">Education</p>
            </div>
            <div className="donation--text">
              <img src="./images/homeless.jpg" alt="osu-children_home" />
              <p className="project--title">Homeless</p>
            </div>
          </div>
          <div className="statistics text-center mb-2">
            <h2>Our Impact</h2>
            <p>
              Over 1,000 lives impacted | GHs 50,000 raised for communities in
              need
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
