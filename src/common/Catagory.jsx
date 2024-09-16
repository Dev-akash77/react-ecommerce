import React from 'react'
import { CiMobile3 } from "react-icons/ci";
import { IoLogoElectron } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { PiCookingPot } from "react-icons/pi";
import { CiDesktop } from "react-icons/ci";
import { GiMailShirt } from "react-icons/gi";
import { FiBook } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
const Catagory = ({catagory,aos}) => {
  const navigate = useNavigate();

  const handleLinkClick = (productId) => {
    window.scrollTo(0, 0); // Scroll to top
    navigate(`/catagory/${productId}`);
  };
  return (
    <div className='catagory_main cc' data-aos={aos}>
       <div onClick={()=>handleLinkClick(catagory)} className='cc gap-1 catagory_main_data'>
       {catagory=="Mobile"&&<CiMobile3 className='catagory_icon'/>}
       {catagory=="Electronics"&&<IoLogoElectron className='catagory_icon'/>}
       {catagory=="Gaming"&&<IoGameControllerOutline className='catagory_icon'/>}
       {catagory=="Home Appliances"&&<PiCookingPot className='catagory_icon'/>}
       {catagory=="Computers"&&<CiDesktop className='catagory_icon'/>}
       {catagory=="Fashion"&&<GiMailShirt className='catagory_icon'/>}
       {catagory=="Books"&&<FiBook className='catagory_icon'/>}
       {catagory}
       </div>
    </div>
  )
}

export default Catagory