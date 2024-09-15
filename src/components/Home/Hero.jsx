import React, { useEffect } from "react";
import { FaApple } from "react-icons/fa";
import Button from "../../ui/Button";
import "../Home/home.css";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
const Hero = () => {
  const navigate = useNavigate();

  const handleLinkClick = (productId) => {
    window.scrollTo(0, 0); // Scroll to top
    navigate(`/product/${productId}`);
  };
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const handleShop = () => {
    window.scrollTo(0, 0); // Scroll to top
    navigate(`/product`);
  };
  return (
    <main className="fc">
      <div className="container herocont">
        <div className="left c gap-1" data-aos="fade-up-right">
          <div className="apple f gap-1">
            <FaApple className="apple_logo" />
            <p className="applediscount">Bose QuietComfort 35</p>
          </div>
          <h1 className="discount">Up to 10% off Voucher</h1>
          <p className="herodescription">
            Welcome to our store.Your ultimate destination for cutting-edge
            gadgets Explore the latest in tech innovation and style with us.
            Shop now and discover the world of possibilities!
          </p>
          <div className="shopnow" onClick={handleShop}>
            <Button text={"Shop Now"} />
          </div>
        </div>

        <div className="right" data-aos="fade-up-left">
          <div className="iphoneback">
            <img
              src="images/head_phone.png"
              alt="had phone images"
              onClick={() => {
                handleLinkClick("q2pj3o4q-dpop-2m3j-icli-k8l9m0nop0q0");
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
