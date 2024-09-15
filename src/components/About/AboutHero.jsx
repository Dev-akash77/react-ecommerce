import React from "react";
import "../About/about.css"
const AboutHero = () => {
  return (
    <div className="cc">
      <div className="container fcb about_left_right">
        <div className="left_about c gap-1"data-aos="fade-up-right">
          <p className="a_story">Our Story</p>
          <p className="story_description">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="story_description mt-2">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="right_about" data-aos="fade-up-left">
        <img src="/images/about.png" alt="about hero section shop image" />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
