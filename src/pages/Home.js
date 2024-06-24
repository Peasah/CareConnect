import React from 'react'
import Navbar from '../../src/component/Navbar'
import Footer from '../../src/component/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div>
      <img src="https://www.contactspace.com/wp-content/uploads/person-making-a-donation-min-scaled.jpeg" alt="homeimg" />
    </div>
    <div className="about--us">
        <h1 className="about--title">About Us</h1>
        <p className="about--content">
          Welcome to CareConnect, a platform that connects those who care with
          those in need. Our mission is to make giving and receiving easy,
          efficient, and impactful. At CareConnect, we believe that everyone
          deserves access to the resources they need to thrive. That's why we've
          created a platform that allows individuals and organizations to donate
          goods, services, and funds to those who need them most. Our story
          began with a simple idea: to connect people who care with people who
          need care. We saw a world where resources were going to waste, while
          others were struggling to access the basics. We knew that technology
          could bridge this gap, and CareConnect was born. Our team is dedicated
          to creating a platform that is user-friendly, reliable, and secure. We
          strive to build a community that is based on trust, transparency, and
          compassion. Our goal is to make a difference, one connection at a
          time. Join us in our mission to connect care and make a positive
          impact in the world.
        </p>
      </div>
    <Footer/>
    </>
  )
}

export default Home