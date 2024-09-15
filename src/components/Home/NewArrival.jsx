import React from 'react'
import Heading from "../../ui/Heading";
import { FaTruckFast } from "react-icons/fa6";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
const NewArrival = () => {
    const navigate = useNavigate();
    const handleLinkClick = (productId) => {
      window.scrollTo(0, 0); // Scroll to top
      navigate(`/product/${productId}`);
    };
    const handleTopPage=()=>{
      window.scrollTo(0, 0); // Scroll to top
    }
  return (
    <div className="sectio_margin mb cc">
    <div className="container">
      <Heading heading={"Featured"} />
      <div className="heading_carasoul fcb">
        <h2 className="headingsection">New Arrival</h2>
        <div className="addtocart_main cc">
          <Link to={`/product`} className="view_all" onClick={handleTopPage}>
            View All
          </Link>
        </div>
      </div>
      <div className="speaker_cont">
      <div className="spc c gap-2" data-aos="fade-up-right">
          <p className="spcc">Categories</p>
          <p className="enhance">Enhance Your Gaming Experience</p>
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
              handleLinkClick("t5rm6u7t-gggg-5p6j-kcjc-n1o2p3qrs3t3");
            }}
          >
            <p>Shop Now</p>
          </div>
        </div>
        <div className="aiarbuds_image_main cc" data-aos="fade-up-left">
          {" "}
          <img src="images/gaming.png" alt="air buds" />
        </div>
      </div>
      {/*//! return and fast dilevary */}
      <div className="return_fast_dilevary_main fc">

       <div className="return_fast_dilevery c gap-1">
       <div className="rfd_logomain fc">
            <FaTruckFast className='rfd_logo'/>
        </div>
        <div className="rfd_dis_main">
            <p className="dis_heading fc">FREE AND FAST DELIVERY</p>
            <p className="dis_sub_heading fc">Free delivery for all orders over $140</p>
        </div>
       </div>


       <div className="return_fast_dilevery c gap-1">
       <div className="rfd_logomain fc">
            <FaHeadphonesSimple className='rfd_logo'/>
        </div>
        <div className="rfd_dis_main">
            <p className="dis_heading fc">24/7 CUSTOMER SERVIC</p>
            <p className="dis_sub_heading fc">Friendly 24/7 customer support</p>
        </div>
       </div>


       <div className="return_fast_dilevery c gap-1">
       <div className="rfd_logomain fc">
            <MdOutlineSecurity className='rfd_logo'/>
        </div>
        <div className="rfd_dis_main">
            <p className="dis_heading fc">MONEY BACK GUARANTEE</p>
            <p className="dis_sub_heading fc">We reurn money within 30 days</p>
        </div>
       </div>

      </div>
    </div>
  </div>
  )
}

export default NewArrival