import React from "react";
import expricencesImg from "../assets/expricences.png";
import Button from "./Button";
import { Link } from 'react-router-dom'

const Experiences = () => {
  return (
    <section className="section-container my-20 flex flex-col md:flex-row items-center gap-12 md:gap-20">
      {/* IMAGE AREA */}
      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src={expricencesImg}
          alt="Materials illustration"
          className="w-full max-w-[550px] md:max-w-[600px] lg:max-w-[650px] h-auto object-cover"
        />
      </div>

      {/* TEXT AREA */}
      <div className="md:w-1/2 w-full">
        <h3 className="text-sm text-primary font-semibold mb-3 uppercase tracking-[2.5px]">
          experiences
        </h3>

        <h2 className="capitalize text-black/95 text-4xl md:text-5xl font-bold mb-5 leading-tight">
          we provide you the <br />
          best experience
        </h2>

        <p className="text-secondary/75 dark:text-white text-sm md:text-base mb-6 max-w-[420px] md:max-w-[450px]">
          You don’t have to worry about the result because all of these
          interiors are made by people who are professionals in their fields
          with an elegant and luxurious style and premium quality materials.
        </p>

       <Link to="/about"> <Button value="More info" /> </Link> 
      </div>
    </section>
  );
};

export default Experiences;
