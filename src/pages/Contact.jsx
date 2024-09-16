import React from "react";
import Heading from "../ui/Heading";
const Contact = () => {
  return (
    <div className="pagestart cc">
      <div className="container">
        <p className="p_c_g mt-2">
          Home / <span>Contact</span>
        </p>
        <div className="contact_heading mt-3">
          {" "}
          <Heading heading={`Contact Us`} />
        </div>
        <p className="contact_sub_heading mt-1">
          Get in touch with us. We are always here to help you.
        </p>
        <form className="sectio_margin">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Password" required />
          <input type="submit" value="Submit" className="submit"/>
        </form>
      </div>
    </div>
  );
};

export default Contact;
