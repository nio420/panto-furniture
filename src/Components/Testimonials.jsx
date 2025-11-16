import Review from "./Review";

const Testimonials = () => {
  return (
    <section className="section-container px-8 mb-28">
      <div className="text-center mb-12">
        <h3 className="text-sm text-primary font-semibold mb-3 uppercase tracking-[2.5px]">
          Testimonials
        </h3>

        <h2 className="capitalize text-black/95 text-4xl font-bold mb-5 leading-tight">
          Our Client Reviews
        </h2>
      </div>
      {/* review component */}
      <Review />
    </section>
  );
};

export default Testimonials;
