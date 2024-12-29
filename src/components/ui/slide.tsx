// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Card, CardContent } from "./card";

// import required modules

export const CarouselCustom = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="w-[400px] overflow-hidden"
    >
      <SwiperSlide>
          <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-2xl font-semibold">hi</span>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
          <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-2xl font-semibold">hi</span>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
          <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-2xl font-semibold">hi</span>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
          <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-2xl font-semibold">hi</span>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
          <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-2xl font-semibold">hi</span>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
          <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-2xl font-semibold">hi</span>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
          <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-2xl font-semibold">hi</span>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
          <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-2xl font-semibold">hi</span>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
          <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-2xl font-semibold">hi</span>
          </CardContent>
        </Card>
      </SwiperSlide>
    </Swiper>
  );
};
