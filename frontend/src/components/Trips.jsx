import React from 'react';
import '../style/Trips.css'; // Assuming CSS is in the same folder
import img1 from '../image/img1.jpg';
import img2 from '../image/img2.jpg';
import img3 from '../image/img3.jpg';
import img4 from '../image/img4.jpg';
import img5 from '../image/img5.jpg';
import image1 from '../assets/image1.jpg';

const Trips = () => {
  const hotelImages = [img1, img2, img3, img4, img5];

  return (
    <div>
      {/* Background Image */}
      <img src={image1} className="background fade-in" alt="background" />

      {/* Price Bar */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="price-bar-container">
        <div className="price-bar">
          <p className="price-text">Display total price</p>
          <p className="price-subtext">Includes all fees, before taxes</p>
        </div>
      </div>

      {/* Hotels Grid */}
      <div className="hotels-grid">
        {Array(12).fill(0).map((_, index) => (
          <div key={index} className="hotel-card">
            <img
              src={hotelImages[index % hotelImages.length]}
              className="hotel-img-card"
              alt={`Hotel ${index + 1}`}
            />
            <div className="hotel-info">
              <p className="hotel-location">Lonavla, India</p>
              <div className="hotel-rating">
                <p>5.0</p>
              </div>
            </div>
            <p className="hotel-distance">63 kilometers away</p>
            <p className="hotel-dates">22-27 Jul</p>
            <p className="hotel-price">₹11,000 night</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trips;
