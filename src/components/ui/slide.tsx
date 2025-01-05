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
import { FC } from "react";

interface CarouselCustomProps {
  data : string[],
  className : string
}

export const CarouselCustom: FC<CarouselCustomProps> = ({ data , className }) => {
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
      className={className} // Use max-width for responsiveness
    >
      {data.map((image, index) => (
        <SwiperSlide key={index}>
          <Card className="rounded-xl border border-colorTop bg-inherit text-card-foreground shadow w-full h-[200px] lg:h-[400px]">
            <CardContent className=" w-full h-[400px] aspect-video items-center justify-center text-center p-2">
              <Image
                src={image}
                width={600}
                height={400}
                alt={`slide-${index}`}
                className="w-full h-full object-cover rounded-xl" // This ensures the image covers the entire container
              />
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
      {/* Add more SwiperSlide components as needed */}
    </Swiper>
  );
};
      {/* Add more SwiperSlide components as needed */}

