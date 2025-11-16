import bannerImg from "../assets/banner.png";
import { FaSearch } from "react-icons/fa";
import TooltipBtn from "./TooltipBtn";
import { useState } from "react";
import { products } from "../Utils/Product";

const Hero = ({ setSearchTerm }) => {
  const [input, setInput] = useState("");

  const handleClick = () => {
    if (!input.trim()) {
      alert("Please enter a product name");
      return;
    }

    // Check if any product name includes the search term
    const found = products.some((p) =>
      p.name.toLowerCase().includes(input.trim().toLowerCase())
    );

    if (found) {
      setSearchTerm(input); 
    } else {
      alert("Product not available"); 
    }
  };

  return (
    <section
      className="h-screen relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* Hero content container */}
      <div className="md:pt-28 pt-32 text-white space-y-4 md:w-1/2 mx-auto text-center px-2 ">
        {/* Hero heading */}
        <h1 className="text-3xl  lg:text-4xl font-medium lg:leading-tight leading-snug ">
          Make your interior more minimalistic & modern
        </h1>
        {/* Hero subtext */}
        <p className="text-white/70 text-sm leading-relaxed  lg:w-[55%] font-normal mx-auto md:mb-2">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>
      </div>
      {/* search bar  */}
      <div className=" flex justify-center items-center">
        <div className=" text-center relative inline-block max-w-sm z-30 mt-3 ">
          <input
            type="text"
            placeholder="Search furniture"
            value={input}
            required
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleClick()}
            className="w-full md:w-70 px-2 py-1.5 bg-white/25 placeholder:text-white/80 rounded-full text-white border border-gray-300 focus:outline-none"
          />
          {/* Search icon inside the relative container */}
          <div
            className="absolute right-1 top-1/2 transform -translate-y-1/2 p-2 bg-primary rounded-full cursor-pointer"
            onClick={handleClick}
          >
            <FaSearch className="text-white" />
          </div>
        </div>
      </div>
      {/* bottom blur effect */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-white to-transparent " />
      {/* tooltip button */}
      <div className="hidden xl:block bottom-15 left-22 absolute ">
        <TooltipBtn position="bottom" />
      </div>
      <div className="hidden xl:block bottom-30 left-60 absolute ">
        <TooltipBtn position="bottom" />
      </div>
      <div className="hidden xl:block -bottom-3.5 left-[612px] absolute ">
        <TooltipBtn position="bottom" />
      </div>
      <div className="hidden xl:block bottom-2 right-40 absolute ">
        <TooltipBtn position="bottom" />
      </div>
    </section>
  );
};

export default Hero;
