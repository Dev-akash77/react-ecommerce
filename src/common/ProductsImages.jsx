import React, { useEffect, useState } from "react";

const ProductsImages = ({ images = [{ img: "" }], name, bestseler, newP }) => {
  const [actborder, setactborder] = useState([images[0].img]); //! active border var dynamic click image
  const activeBorder=(activeImgUrl)=>{ //! click to active image border
    setactborder(activeImgUrl)
  }

  useEffect(() => {
    setactborder(images[0].img);
  }, [images]);

  return (
    <div className="spimg_main fc gap-2">
      <div className="sub_images_main cc gap-1">
        {images.map((cur, id) => {
          return (
            <div
              className={`sub_img cc ${actborder == cur.img && "border2"}`}
              key={id}
              onClick={() => {
                activeBorder(cur.img);
              }}
            >
              <img src={cur.img} alt={name} />
            </div>
          );
        })}
      </div>
      <div className="main_img">
        {bestseler && <p className="s_n">Best seller</p>}
        {!bestseler && newP && <p className="s_n">New Product</p>}
        <div className="mimg cc">
          <img src={actborder} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default ProductsImages;
