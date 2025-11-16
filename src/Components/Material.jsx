import materialImg1 from "../assets/material1.png";
import materialImg2 from "../assets/material2.png";
import materialImg3 from "../assets/material3.png";
import Button from "./Button";
import { Link } from 'react-router-dom'

const Material = () => {
  return (
    <section className="section-container my-20 flex flex-col md:flex-row items-center gap-12 md:gap-20">
      {/* TEXT AREA */}
      <div className="md:w-1/2 w-full ">
        <h3 className="text-sm text-primary font-semibold mb-3 uppercase tracking-[2.5px]">
          Materials
        </h3>

        <h2 className="capitalize text-black/95 text-4xl md:text-5xl font-bold mb-5 leading-tight">
          Very serious <br /> materials for making furniture
        </h2>

        <p className="text-secondary/75 dark:text-white text-sm md:text-base mb-6 max-w-[420px] md:max-w-[450px]">
          Because panto was very serious about designing furniture for our
          environment, using a very expensive and famous capital but at a
          relatively low price
        </p>

        <Link to="/contact"> <Button value="More info" /></Link>

      </div>
      {/* IMAGE AREA */}{" "}
      <div className="md:w-1/2 w-full grid grid-cols-2 md:grid-cols-3 items-center md:items-end">
        {/* Left imgs */}
        <div>
          <img
            src={materialImg1}
            alt=""
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src={materialImg2}
            alt=""
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        {/* Right img */}
        <div className="md:col-span-2 col-span-1">
          <img
            src={materialImg3}
            alt=""
            className="w-full h-auto -mb-3 object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Material;
