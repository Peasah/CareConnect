import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import './pictures.css'; // Importing CSS for styling
import DonationMessage from './DonationMessage';

const Pictures = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h3 className="text-center my-4">Browse Our Donation Items</h3>
        <div className="card-group">
          {/* First row of cards */}
          <div className="card rounded">
            <img
              src="https://media.theeverygirl.com/wp-content/uploads/2017/04/7-questions-to-ask-when-cleaning-out-your-closet-the-everygirl-1.jpg"
              className="card-img-top"
              alt="Dresses"
            />
            <div className="card-body">
              <h5 className="card-title">Dresses</h5>
            </div>
          </div>
          <div className="card rounded">
            <img
              src="https://s.alicdn.com/@sc04/kf/UTB8x95hKwQydeJk43PUq6AyQpXaq.jpg_720x720q50.jpg"
              className="card-img-top"
              alt="Fridges"
            />
            <div className="card-body">
              <h5 className="card-title">Fridges</h5>
            </div>
          </div>
          <div className="card rounded">
            <img
              src="https://globalnews.ca/wp-content/uploads/2023/10/IMG_1051-rotated-e1699035715210.jpg?quality=85&strip=all&w=1200"
              className="card-img-top"
              alt="Shirts"
            />
            <div className="card-body">
              <h5 className="card-title">Shirts</h5>
            </div>
          </div>
        </div>

        <div className="card-group">
          {/* Second row of cards */}
          <div className="card rounded">
            <img
              src="https://images.jdmagicbox.com/quickquotes/images_main/sara-30-liters-polyester-black-school-bag-black-178207114-ksaft.jpg"
              className="card-img-top"
              alt="School bag"
            />
            <div className="card-body">
              <h5 className="card-title">School Bag</h5>
            </div>
          </div>
          <div className="card rounded">
            <img
              src="https://www.contrado.co.uk/blog/wp-content/uploads/2017/04/History-of-sewing-header.png"
              className="card-img-top"
              alt="Sewing Machine"
            />
            <div className="card-body">
              <h5 className="card-title">Sewing Machine</h5>
            </div>
          </div>
          <div className="card rounded">
            <img
              src="https://food.fnr.sndimg.com/content/dam/images/food/products/2021/1/26/rx_rachael-ray-create-delicious-nonstick-cookware-pots-and-pans-set-13-piece.jpeg.rend.hgtvcom.616.616.suffix/1611697745590.jpeg"
              className="card-img-top"
              alt="Cooking pots"
            />
            <div className="card-body">
              <h5 className="card-title">Cooking Pots</h5>
            </div>
          </div>
        </div>

        <div className="card-group">
          {/* Third row of cards */}
          <div className="card rounded">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS39CiTRtuC05a0oBGaoDQJZ-XQzeZqBs_LlA&s"
              className="card-img-top"
              alt="Laptop"
            />
            <div className="card-body">
              <h5 className="card-title">Laptop</h5>
            </div>
          </div>
          <div className="card rounded">
            <img
              src="https://anyasreviews.com/wp-content/uploads/2024/02/stylish-barefoot-sandals-collection-4.-high-heelsjpg-e1707520627644.jpg"
              className="card-img-top"
              alt="Sandals"
            />
            <div className="card-body">
              <h5 className="card-title">Sandals</h5>
            </div>
          </div>
          <div className="card rounded">
            <img
              src="https://www.jamhuristationers.co.tz/images/school2.jpg"
              className="card-img-top"
              alt="Stationery"
            />
            <div className="card-body">
              <h5 className="card-title">Stationery</h5>
            </div>
          </div>
        </div>

        <div className="card-group">
          {/* Fourth row of cards */}
          <div className="card rounded">
            <img
              src="https://c8.alamy.com/comp/2DA48PK/many-various-colourful-plastic-bowls-and-buckets-2DA48PK.jpg"
              className="card-img-top"
              alt="Plastic bowls"
            />
            <div className="card-body">
              <h5 className="card-title">Plastic Bowls</h5>
            </div>
          </div>
          <div className="card rounded">
            <img
              src="https://everyevery.ng/wp-content/uploads/2019/10/provs.jpg"
              className="card-img-top"
              alt="Provisions"
            />
            <div className="card-body">
              <h5 className="card-title">Provisions</h5>
            </div>
          </div>
          <div className="card rounded">
            <img
              src="https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg?auto=webp&quality=75&width=1024"
              className="card-img-top"
              alt="Laptop"
            />
            <div className="card-body">
              <h5 className="card-title">Laptop</h5>
            </div>
          </div>
        </div>

        <div className="card-group">
          {/* Fifth row of cards */}
          <div className="card">
            <img
              src="https://squaretoiletries.com/wp-content/uploads/revslider/home_page_slider/STL_Product_Range_2023.png"
              className="card-img-top"
              alt="Toiletries"
            />
            <div className="card-body">
              <h5 className="card-title">Toiletries</h5>
            </div>
          </div>
          <div className="card rounded">
            <img
              src="https://rukminim2.flixcart.com/image/850/1000/kr2e3680/rice/x/w/s/1-white-rice-unpolished-basmati-rice-pouch-fortune-original-imag4xhggey9sqv2.jpeg?q=90&crop=false"
              className="card-img-top"
              alt="Rice"
            />
            <div className="card-body">
              <h5 className="card-title">Rice</h5>
            </div>
          </div>
          <div className="card rounded">
            <img
              src="https://5.imimg.com/data5/JB/GX/MY-1169069/uniform-fabric-ore-variety-all-ranges-500x500.jpg"
              className="card-img-top"
              alt="School uniform fabrics"
            />
            <div className="card-body">
              <h5 className="card-title">School Uniform Fabrics</h5>
            </div>
          </div>
        </div>
      </div>
      <DonationMessage />
      <Footer />
    </>
  );
};

export default Pictures;
