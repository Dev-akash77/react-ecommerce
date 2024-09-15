import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import { ProductContext } from "../context/Alldata";

const Navbar = () => {
  const [showBar, setshowBar] = useState(true);
 const {cartItems} = useContext(ProductContext)
  //? click to show bar
  const handleClickShowBar = () => {
    window.scrollTo(0, 0); // Scroll to top
    setshowBar((previus) => {
      return !previus;
    });
  };
  return (
    <>
      <header className="fc">
        <div className="container fcb">
         <Link to={`/`}> <h2 className="logo">
            <span>TOY</span>TO
          </h2>
          </Link>
          <div className="nav_cart fc gap-2">
            <nav>
              <ul className={`${showBar && "nav_move"} f gap-3`}>
                <li onClick={handleClickShowBar}>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li onClick={handleClickShowBar}>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li onClick={handleClickShowBar}>
                  <NavLink to="/product">product</NavLink>
                </li>
                <li onClick={handleClickShowBar}>
                  <NavLink to="/contact">contact</NavLink>
                </li>
              </ul>
            </nav>

            <Link to="/cart" className="shopbag fc shoping_nav">
              <MdOutlineShoppingCart className="cart" />
              <div className="itemcart fc">{cartItems.length}</div>
            </Link>
          </div>

          <div className="shop_bag_bar_close fc gap-4">
            <Link to="/cart" className="shopbag fc normal_shoping">
              <MdOutlineShoppingCart className="cart" />
              <div className="itemcart fc">{cartItems.length}</div>
            </Link>
            <div className="bar">
              {showBar ? (
                <FaBarsStaggered onClick={handleClickShowBar} />
              ) : (
                <GrClose onClick={handleClickShowBar} />
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
