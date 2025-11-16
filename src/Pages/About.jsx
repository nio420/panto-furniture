import React from "react";
import aboutImgBg from "../assets/about-background.jpg";
import Experiences from "../Components/Experiences";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <section className="min-h-screen ">
      {/* banner image */}
      <div
        className="w-full min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutImgBg})` }}
      >
        <h1 className="text-5xl font-bold text-white tracking-[3px]"> Discover Our Story </h1>
      </div>
      {/* components */}
      <Experiences />
      <Footer />
    </section>
  );
};

export default About;
