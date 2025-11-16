import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ value }) => {
  const totalStarts = 5;

  return (
    <div className="flex space-x-1.5 text-primary">
      {Array.from({ length: totalStarts }, (_, i) => {
        const starIndex = i + 1;
        return starIndex <= value ? (
          <FaStar key={i} className="text-primary " />
        ) : (
          <FaStarHalfAlt key={i} className="text-gray-400" />
        );
      })}
    </div>
  );
};

export default Rating;
