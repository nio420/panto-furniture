import React from "react";
import contactImgBg from "../assets/contact-background.jpg";
import Footer from "../Components/Footer";
import Material from "../Components/Material";

const Contact = () => {
  return (
    <section className="min-h-screen ">
      {/* banner image */}
      <div
        className="w-full min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${contactImgBg})` }}
      >
        <h1 className="text-5xl mt-18 font-bold text-white tracking-[5px]">
          Get in Touch
        </h1>
      </div>
      {/* components */}
      <Material />
      <Footer />
    </section>
  );
};

export default Contact;
