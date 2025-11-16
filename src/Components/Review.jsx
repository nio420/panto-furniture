import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import reviews from "../Utils/reviews";
import Rating from "./Rating";

const Review = () => {
  return (
    <>
      {/* reviw cards */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000, // Auto-slide every 2 seconds
          disableOnInteraction: false, // Continue autoplay after user swipes
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            className="bg-no-repeat bg-cover rounded-4xl shadow-md  "
            style={{ backgroundImage: `url(${review.coverImg})` }}
          >
            <div className="md:h-[406px] flex items-center justify-center mb-4 py-8 ">
              <div className="mt-16 mb-4 bg-white w-full md:w-4/5 p-4 rounded-xl relative sm:w-4/5 ">
                <img
                  src={review.image}
                  alt="review image"
                  className="size-15 absolute -top-6 left-1/2 -translate-x-1/2 ring ring-primary rounded-full sm:w-20 sm:h-20 w-20 h-20"
                />

                {/* review details */}
                <div className="mt-16 text-center px-2 sm:px-4">
                  <h3 className="font-semibold text-lg dark:text-black">
                    {review.name}
                  </h3>
                  <p className="mb-3 dark:text-white text-sm text-primary">
                    Verified Customer
                  </p>
                  <p className="text-gray-500 dark:text-black mb-4">
                    {review.review}
                  </p>
                  <div className="flex items-center justify-center w-full mx-auto mb-2">
                    <Rating value={review.rating} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Review;
