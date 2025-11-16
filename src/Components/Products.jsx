import { useState } from "react";
import { products } from "../Utils/Product";
import ProductCard from "./ProductCard";
import Button from "./Button";

const Products = ({ headline, searchTerm }) => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Chair");

  // Filter by category
  let filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  // If searchTerm exists, override filter by name
  if (searchTerm) {
    filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  const visibleProducts = isExpanded
    ? filteredProducts
    : filteredProducts.slice(0, 4);

  const loadMoreProducts = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="section-container">
      <h2 className="text-center text-4xl text-primary font-bold my-8">
        {headline}
      </h2>

      {/* Hide categories if searchTerm exists */}
      {!searchTerm && (
        <div className="bg-[#EDEDED]/75 max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-6">
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-between gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedCategory(category);
                  setIsExpanded(false);
                }}
                className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer ${
                  selectedCategory === category
                    ? "bg-white text-primary"
                    : "text-secondary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {visibleProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* Load More - hide if searching */}
      {!searchTerm && filteredProducts.length > 4 && (
        <div className="flex justify-center items-center mt-12">
          <Button
            onClick={loadMoreProducts}
            value={isExpanded ? "Show Less" : "View All"}
            className="text-lg font-semibold"
          />
        </div>
      )}
    </div>
  );
};

export default Products;
