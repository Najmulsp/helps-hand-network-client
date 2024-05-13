import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { FaArrowDownLong } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{ clickable: true }}
      className="container mx-auto mt-10"
    >
      <SwiperSlide
      
      >
        <div className="lg:relative bg-gradient-to-r from-slate-950 to-gray-950 rounded-xl w-full h-[450px] lg:h-[550px] ">
          <div className=" ">
            <img
              src="https://i.ibb.co/ZzKD8B8/download.jpg"
              alt=""
              className="absolute opacity-50  w-full h-[450px] lg:h-[550px] rounded-xl  mx-auto"
            />
          </div>

          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="1000"
            className="text-4xl lg:text-6xl absolute font-extrabold text-white text-left pt-4 lg:pt-20 top-1 left-16 lg:left-24 w-2/3 lg:w-2/5"
          >
            We Can Change the World Together
          </h1>

          <p
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="1500"
            className="absolute text-2xl lg:text-3xl font-bold text-white text-left pt-8 lg:top-64 top-32 left-16 lg:left-24 w-3/5"
          >
            Together, let us roll up our sleeves, amplify our impact, and build
            a brighter future for all.
          </p>

          <div className="absolute text-xl font-semibold text-white text-left mt-6  lg:top-96 top-72 left-16 lg:left-24">
            <p
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="2000"
            className="flex items-center p-2 ">
              Scroll Down
              <span>
                <FaArrowDownLong />
              </span>
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative  bg-gradient-to-r from-slate-950 to-gray-950 rounded-xl   w-full h-[450px] lg:h-[550px] ">
          <div className=" ">
            <img
              src="https://i.ibb.co/L6S0cNP/foode.jpg"
              alt=""
              className="absolute opacity-50  w-full h-[450px] lg:h-[550px] rounded-xl  mx-auto"
            />
          </div>

          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="2000"
            className="text-4xl lg:text-6xl absolute font-extrabold text-white text-left pt-4 lg:pt-20 top-1 left-16 lg:left-24 w-2/3 lg:w-2/5"
          >
            We Can Change the World Together
          </h1>

          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="2400"
            className="absolute text-2xl lg:text-3xl font-bold text-white text-left pt-8 lg:top-64 top-32 left-16 lg:left-24 w-3/5"
          >
            Together, let us roll up our sleeves, amplify our impact, and build
            a brighter future for all.
          </p>

          <div className="absolute text-xl font-semibold text-white text-left mt-6  lg:top-96 top-72 left-16 lg:left-24">
            <p className="flex items-center p-2 ">
              Scroll Down
              <span>
                <FaArrowDownLong />
              </span>
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative  bg-gradient-to-r from-slate-950 to-gray-950 rounded-xl   w-full h-[450px] lg:h-[550px] ">
          <div className=" ">
            <img
              src="https://i.ibb.co/0VKG4fT/we-volunteer-mo32d.jpgg"
              alt=""
              className="absolute opacity-50  w-full h-[450px] lg:h-[550px] rounded-xl  mx-auto"
            />
          </div>

          <h1 className="text-4xl lg:text-6xl absolute font-extrabold text-white text-left pt-4 lg:pt-20 top-1 left-16 lg:left-24 w-2/3 lg:w-2/5">
            We Can Change the World Together
          </h1>

          <p className="absolute text-2xl lg:text-3xl font-bold text-white text-left pt-8 lg:top-64 top-32 left-16 lg:left-24 w-3/5">
            Together, let us roll up our sleeves, amplify our impact, and build
            a brighter future for all.
          </p>

          <div className="absolute text-xl font-semibold text-white text-left mt-6  lg:top-96 top-72 left-16 lg:left-24">
            <p className="flex items-center p-2 ">
              Scroll Down
              <span>
                <FaArrowDownLong />
              </span>
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative  bg-gradient-to-r from-slate-950 to-gray-950 rounded-xl   w-full h-[450px] lg:h-[550px] ">
          <div className=" ">
            <img
              src="https://i.ibb.co/x2wXYyY/chittagong-hill-cleaners-at-a.jpg"
              alt=""
              className="absolute opacity-50  w-full h-[450px] lg:h-[550px] rounded-xl  mx-auto"
            />
          </div>

          <h1 className="text-4xl lg:text-6xl absolute font-extrabold text-white text-left pt-4 lg:pt-20 top-1 left-16 lg:left-24 w-2/3 lg:w-2/5">
            We Can Change the World Together
          </h1>

          <p className="absolute text-2xl lg:text-3xl font-bold text-white text-left pt-8 lg:top-64 top-32 left-16 lg:left-24 lg:w-2/5">
            Together, let us roll up our sleeves, amplify our impact, and build
            a brighter future for all.
          </p>

          <div className="absolute text-xl font-semibold text-white text-left mt-6  lg:top-96 top-72 left-16 lg:left-24">
            <p className="flex items-center p-2 ">
              Scroll Down
              <span>
                <FaArrowDownLong />
              </span>
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
