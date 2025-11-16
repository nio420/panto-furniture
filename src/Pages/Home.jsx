import { useState, useRef } from "react";
import Hero from "../Components/Hero";
import WhyChoose from "../Components/WhyChoose";
import Products from "../Components/Products";
import Experiences from "../Components/Experiences";
import Material from "../Components/Material";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState(""); 
  const productsRef = useRef(null); 

  // function to handle search from Hero
  const handleSearch = (value) => {
    setSearchTerm(value);
    // scroll to Products section smoothly
    setTimeout(() => {
      productsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div>
      <Hero setSearchTerm={handleSearch} />
      <WhyChoose />
      {/* Products section with ref and searchTerm */}
      <div ref={productsRef}>
        <Products headline="Best Selling Product" id="products-section" searchTerm={searchTerm} />
      </div>
      <Experiences />
      <Material />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
