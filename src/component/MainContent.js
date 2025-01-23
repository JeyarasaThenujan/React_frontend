import React from 'react';
import pipe from './pipe.png';
import star from './star.png';
import star2 from './star2.png';
import star3 from './star3.png';



const MainContent = () => {
  return (
    <div className="body-section">
   
    <div className="heading-section">
      <h1>
        The Future of Manufacturing  <span > with Latest Technology</span>
      </h1>
      <p>Expert tech to elevate your manufacturing. Let's take your business further.</p>
      <div className="buttons">
        <button className="btn-primary">Get Started</button>
        <button className="btn-secondary">Try Demo</button>
      </div>
    <div className='image-container'>
      <div className='star2'>
      <img
          src={star2}
          alt="ratings"
        />
      </div>
      <div className='star-light'>
      <img
          src={star}
          alt="ratings"
        />
      </div>
      <div className='star3'>
      <img
          src={star3}
          alt="ratings"
        />
      </div>
    </div>
    </div>

    
    <div className="stats-section">
      <div className="image-card">
        <img
          src={pipe}
          alt="Manufacturing Pipes"
        />
      </div>
      <div className="stats-dark">
        <h2>100+</h2>
        <p>Our Esteemed Clients and Partners</p>
      </div>
      <div className="stats-card stats-light">
        <h3>1951+</h3>
        <p>Total Projects</p>
        <p className="growth-text">Increase of 126 this month</p>
      </div>
      <div className="stats-card stats-green">
        <h3>6+</h3>
        <p>Years of Dedicated Service</p>
      </div>
      <div className="stats-card stats-d">
        <p>Achieve Optimal Efficiency and Boost Productivity</p>
      </div>
    </div>
  </div>
  );
};





export default MainContent;
