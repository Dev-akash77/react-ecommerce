import React from "react";
import { useNavigate } from "react-router-dom";

const Section2 = () => {
  const navigate = useNavigate();
  const handleLinkClick = (productId) => {
    window.scrollTo(0, 0); // Scroll to top
    navigate(`/product/${productId}`);
  };
  return (
    <div className="speaker_main sectio_margin cc">
      <div className="container speaker_cont">
        <div className="spc c gap-2" data-aos="fade-up-right">
          <p className="spcc">Categories</p>
          <p className="enhance">Enhance Your Music Experience</p>
          <div className="foursd gap-2">
            <div className="four_data cc">
              {" "}
              23 <span>Hours</span>{" "}
            </div>
            <div className="four_data cc">
              {" "}
              05 <span>Days</span>{" "}
            </div>
            <div className="four_data cc">
              {" "}
              59 <span>Minutes</span>{" "}
            </div>
            <div className="four_data cc">
              {" "}
              35 <span>Seconds</span>{" "}
            </div>
          </div>
          <div
            className="shop_now"
            onClick={() => {
              handleLinkClick("r3kq4p5r-efrf-3n4k-jdjd-m9n0o1pqr1r1");
            }}
          >
            <p>Shop Now</p>
          </div>
        </div>
        <div className="aiarbuds_image_main cc" data-aos="fade-up-left">
          {" "}
          <img src="images/airbuds.png" alt="air buds" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
