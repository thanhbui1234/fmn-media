'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";

const DialogCustom = dynamic(() =>
  import("@/components/ui/Dialog").then((mod) => mod.DialogCustom)
);

const CarouselCustom = dynamic(() =>
  import("@/components/ui/slide").then((mod) => mod.CarouselCustom)
);
const AboutUs = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section
      id="div1"
      className="snap-start  flex flex-col md:flex-row gap-12 bg-black border-y border-y-[#ffcc00] px-10 xl:pl-[300px] h-[1100px] sm:h-[1000px] md:h-auto  "
    >
      <div className="w-auto lg:w-[600px] flex flex-col pt-12">
        <h3 className="text-white text-3xl pb-3">Hello! We are</h3>
        <p className="text-[40px] xl:text-[61px] text-white leading-10 ">
          <span className="text-colorTop">Film</span>/
          <span className="text-colorTop">Music</span>/
        </p>
        <p className="text-[40px] xl:text-[61px] text-colorTop ">
          Next generation
        </p>

        <p className="text-[16px] pt-7 text-[#ccc] fontText w-[300px] sm:w-[450px] xl:w-full">
          Founded in 2020 and quickly grown to become one of VietNam&apos;s
          leading teams with significant achievements in the media and
          entertainment industry, we proudly produce excellent projects with
          <span className="text-colorTop">
            professional expertise, seamless workflow
          </span>
          , and{" "}
          <span className="text-colorTop">a fierce commitment to quality.</span>
        </p>
        <p className="text-[16px] pt-7 text-[#ccc] fontText w-[300px] sm:w-[450px] xl:w-full">
          While based in Ho Chi Minh City, we provide high-quality services to
          customers worldwide.
        </p>
        <div className="pt-3 pb-5 xl:pt-20 flex flex-col sm:flex-row gap-5">
          <Button
            className="border-colorTop border bg-inherit hover:bg-inherit hover:text-colorTop rounded-xl max-w-[200px]"
            onClick={() => setIsDialogOpen(true)} // Mở dialog
          >
            MISSION & VISION <FaLongArrowAltRight />
          </Button>
          <Button className="border-colorTop border bg-inherit hover:bg-inherit hover:text-colorTop rounded-xl max-w-[200px]">
            OUR TEAM <FaLongArrowAltRight />
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          width={600}
          height={600}
          src="/assets/FMN_AB_5.gif"
          alt="Picture of the author"
          className="object-cover w-[370] h-[370] lg:w-[600px] lg:h-[600px]"
          priority
          
        />
      </div>

      <DialogCustom
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        showFooter={false} // Tắt footer nếu không cần
      >
        <div className=" text-white relative flex flex-col  justify-around gap-6  h-full    border-b-colorTop ">
          <div className="  h-[60px] w-auto  flex justify-between px-5  border-b border-b-colorTop">
            <p className="flex text-center items-center  gap-2">
              <FaRegCircle />
              <FaRegCircle />
              <FaRegCircle />
            </p>
            <button onClick={() => setIsDialogOpen(false)}>
              <IoIosCloseCircleOutline size={30} className="text-colorTop" />
            </button>
          </div>
          <div className="w-full  h-full flex flex-col lg:flex-row justify-around gap-6 p-10">
            <div className="max-w-[300px]">
              <h2 className="text-2xl lg:text-6xl font-bold   lg:pt-2 text-colorTop">
                MISSION & VISION
              </h2>
              <p className="text-[12px] lg:text-[16px] pt-4  text-[#ccc] fontText ">
                We work with closely with brands in order to find the right
                creative and effective solutions that suit their specific needs
                and requirements.
              </p>
            </div>
            <div className="w-[55%] ">
              <CarouselCustom />
            </div>
          </div>
        </div>
      </DialogCustom>
    </section>
  );
};

export default AboutUs;
