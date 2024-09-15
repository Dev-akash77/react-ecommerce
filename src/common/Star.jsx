import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Star = ({ rating, reviews }) => {
  // Create an array with 5 elements to represent 5 stars
  const ratingStars = Array.from({ length: 5 }, (_, index) => {
    const fullStarThreshold = index + 1;
    const halfStarThreshold = index + 0.5;

    return (
      <p key={index}>
        {rating >= fullStarThreshold ? (
          <FaStar className="star" />
        ) : rating > halfStarThreshold ? (
          <FaStarHalfAlt className="star" />
        ) : (
          <FaRegStar className="star" />
        )}
      </p>
    );
  });

  return (
    <div className="rating f sr">
      {ratingStars}
      <span>({reviews})</span>
    </div>
  );
};

export default Star;
