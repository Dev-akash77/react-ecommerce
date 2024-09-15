import React from "react";

const Footer = () => {
  return (
    <footer className="cc">
      <div className="footer_cont container">
        <div className="footer_four_cont f">
          <div className="footer_left c gap-2">
            {/* <div className="footerlogo"> */}
            <div className="logo_para">
              <span>TOY</span>TO
            </div>
            {/* </div> */}
            <p className="para">
              Welcome to Akash's EcomStore, your ultimate destination for
              cutting-edge gadgets!
            </p>
            <img src="/images/footer.png" alt="company name" />
          </div>

          <div className="footer_right">
            <div className="three_cont">
              <h4>SHOPPING</h4>
              <ul>
                <li>Computer Store</li>
                <li>Laptop Store</li>
                <li>Accessories</li>
                <li>Sales & Discount</li>
              </ul>
            </div>
            <div className="three_cont">
              <h4>Experience</h4>
              <ul>
                <li>Contact Us</li>
                <li>Payment Method</li>
                <li>Delivery</li>
                <li>Deliveryt</li>
              </ul>
            </div>
            <div className="three_cont">
              <h4>NEWSLETTER</h4>
              <ul>
                <li>
                  Be the first to know about new arrivals, sales & promos!
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="shl footer_shl"></p>
        <p className="copyright fc">
          Design and Code by Akash Biswas
        </p>
      </div>
    </footer>
  );
};

export default Footer;
