import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { GiBoxUnpacking } from "react-icons/gi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { TbMoneybag } from "react-icons/tb";
import { FaTruckFast } from "react-icons/fa6";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";

const AboutSection1 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with custom options
  }, []);

  return (
    <div className="sectio_margin mb cc about_four_main">
      <div className="container profit_main">
        <div className="profit_data" data-aos="fade-up">
          <div className="profit_icon_main cc">
            <div className="icondiv cc">
              <GiBoxUnpacking className="profic_icon" />
            </div>
          </div>
          <p className="profit_heading">10.5k</p>
          <p className="profit_discount">Sallers active our site</p>
        </div>

        <div className="profit_data" data-aos="fade-up" data-aos-delay="200">
          <div className="profit_icon_main cc">
            <div className="icondiv cc">
              <RiMoneyDollarCircleLine className="profic_icon" />
            </div>
          </div>
          <p className="profit_heading">33k</p>
          <p className="profit_discount">Monthly Product Sale</p>
        </div>

        <div className="profit_data" data-aos="fade-up" data-aos-delay="400">
          <div className="profit_icon_main cc">
            <div className="icondiv cc">
              <HiMiniShoppingBag className="profic_icon" />
            </div>
          </div>
          <p className="profit_heading">45.5k</p>
          <p className="profit_discount">Customer active in our site</p>
        </div>

        <div className="profit_data" data-aos="fade-up" data-aos-delay="600">
          <div className="profit_icon_main cc">
            <div className="icondiv cc">
              <TbMoneybag className="profic_icon" />
            </div>
          </div>
          <p className="profit_heading">25k</p>
          <p className="profit_discount">Annual gross sale in our site</p>
        </div>
      </div>

      <div className="container">
        <div className="return_fast_dilevary_main fc">
          <div className="return_fast_dilevery c gap-1" data-aos="fade-right">
            <div className="rfd_logomain fc">
              <FaTruckFast className="rfd_logo" />
            </div>
            <div className="rfd_dis_main">
              <p className="dis_heading fc">FREE AND FAST DELIVERY</p>
              <p className="dis_sub_heading fc">
                Free delivery for all orders over $140
              </p>
            </div>
          </div>

          <div className="return_fast_dilevery c gap-1" data-aos="fade-right">
            <div className="rfd_logomain fc">
              <FaHeadphonesSimple className="rfd_logo" />
            </div>
            <div className="rfd_dis_main">
              <p className="dis_heading fc">24/7 CUSTOMER SERVICE</p>
              <p className="dis_sub_heading fc">
                Friendly 24/7 customer support
              </p>
            </div>
          </div>

          <div className="return_fast_dilevery c gap-1" data-aos="fade-right">
            <div className="rfd_logomain fc">
              <MdOutlineSecurity className="rfd_logo" />
            </div>
            <div className="rfd_dis_main">
              <p className="dis_heading fc">MONEY BACK GUARANTEE</p>
              <p className="dis_sub_heading fc">
                We return money within 30 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection1;
