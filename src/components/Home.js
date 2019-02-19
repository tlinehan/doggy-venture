import React, { Component, Fragment } from 'react';
import banner from '../img/banner-wht-dog-cropped.jpg';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-banner">
          <img
            className="home-banner-img"
            src={banner}
            alt="img/banner-wht-dog"
          />
        </div>
      </div>
    );
  }
}
export default Home;
