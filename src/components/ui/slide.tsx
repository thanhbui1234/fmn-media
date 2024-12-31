// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Card, CardContent } from "./card";
import Image from "next/image";

export const CarouselCustom = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} // Add Autoplay module here
      spaceBetween={20}
      navigation
      loop={true} // Enables infinite looping
      autoplay={{
        delay: 3000,
        disableOnInteraction: false, // Autoplay continues even after user interaction
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="w-full max-w-[650px] mx-auto" // Use max-width for responsiveness
    >
      <SwiperSlide>
        <Card className="">
          <CardContent className="flex w-full h-[400px] aspect-video items-center justify-center text-center p-2">
            <Image
              src="/assets/aboutus1.jpg"
              width={600}
              height={400}
              alt="about"
              className="w-full h-full object-cover rounded-xl" // This ensures the image covers the entire container
            />
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className="">
          <CardContent className="flex w-full h-[400px] aspect-video items-center justify-center text-center p-2">
            <Image
              src="/assets/aboutus3.jpg"
              width={600}
              height={400}
              alt="about"
              className="w-full h-full object-cover rounded-xl" // This ensures the image covers the entire container
            />
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className="">
          <CardContent className="flex w-full h-[400px] aspect-video items-center justify-center text-center p-2">
            <Image
              src="/assets/aboutus4.jpg"
              width={600}
              height={400}
              alt="about"
              className="w-full h-full object-cover rounded-xl" // This ensures the image covers the entire container
            />
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className="">
          <CardContent className="flex w-full h-[400px] aspect-video items-center justify-center text-center p-2">
            <Image
              src="/assets/aboutus5.jpg"
              width={600}
              height={400}
              alt="about"
              className="w-full h-full object-cover rounded-xl" // This ensures the image covers the entire container
            />
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className="">
          <CardContent className="flex w-full h-[400px] aspect-video items-center justify-center text-center p-2">
            <Image
              src="/assets/aboutus6.jpg"
              width={600}
              height={400}
              alt="about"
              className="w-full h-full object-cover rounded-xl" // This ensures the image covers the entire container
            />
          </CardContent>
        </Card>
      </SwiperSlide>
      {/* Add more SwiperSlide components as needed */}
    </Swiper>
  );
};
