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

export const CarouselCustom = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} // Add Autoplay module here
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop={true} // Enables infinite looping
      autoplay={{
        delay: 2000,
        disableOnInteraction: false, // Autoplay continues even after user interaction
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="w-[400px] overflow-hidden"
    >
      <SwiperSlide>
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-2xl font-semibold text-white  ">hi</span>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-2xl font-semibold text-white  ">hi1</span>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-2xl font-semibold text-white  ">h2i</span>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-2xl font-semibold text-white  ">h3i</span>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-2xl font-semibold text-white  ">hi4</span>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-2xl font-semibold text-white  ">h5i</span>
          </CardContent>
        </Card>
      </SwiperSlide>
    </Swiper>
  );
};
