import { getImgUrl } from "../Utils/getImgUrl";
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Rating from "./Rating";
import { FaPlus } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div key={product.id}>
      {/* Product Image Container */}
      <div className="bg-[#F7F7F7]">
        <img
          src={getImgUrl(`${product.imageUrl}`)}
          alt={product.name}
          className="w-full h-full object-cover px-8 py-2 rounded"
        />
      </div>

      {/* Product Details Container */}
      <div className="p-6 bg-white dark:bg-black shadow-md">
        {/* Product Category */}
        <h4 className="text-gray-700 mb-1.5">{product.category}</h4>

        {/* Product Name */}
        <h3 className="font-semibold dark:text-black text-xl mb-2">
          {product.name}
        </h3>

        {/* Product Rating */}
        <Rating value={product.rating} />

        {/* Price and Add-to-Cart Button */}
        <div className="mt-3 flex items-center justify-between">
          {/* Price */}
          <p className="text-secondary dark:text-white font-bold text-lg mt-1.5">
            <sup>$</sup>
            <span>{product.price}</span>
          </p>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(product)}
            className="bg-secondary p-2 text-white rounded-full hover:bg-primary/85 cursor-pointer"
          >
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
