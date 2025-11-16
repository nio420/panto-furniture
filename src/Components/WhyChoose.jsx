import React from "react";
import Button from "./Button";

function WhyChoose() {
  return (
    <section className="section-container">
      <div className="my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left md:gap-8 items-center">
         {/* Section Heading */}
        <div>
            <h2 className="font-bold text-4xl md:pl-6 text-gray-900"> Why <br /> Choosing Us</h2>
        </div>
          {/* Feature 1 */}
        <div>
            <h3 className="text-2xl font-semibold mb-3">Luxury facilities</h3>
            <p className="mb-2 text-sm leading-6 text-gray-600">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
            <Button value="More Info"/>
        </div>
          {/* Feature 2 */}
        <div>
            <h3 className="text-2xl font-semibold mb-3">Affordable Price</h3>
            <p className="mb-2 text-sm leading-6 text-gray-600">You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.</p>
            <Button value="More Info"/>
        </div>
          {/* Feature 3 */}
        <div>
            <h3 className="text-2xl font-semibold mb-3">Many Choices</h3>
            <p className="mb-2 text-sm leading-6 text-gray-600">We provide many unique work space choices so that you can choose the workspace to your liking.</p>
            <Button value="More Info"/>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
