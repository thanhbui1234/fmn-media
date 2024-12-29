'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DialogCustom } from "@/components/ui/Dialog";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CarouselCustom } from "@/components/ui/slide";

const AboutUs = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section
      id="div1"
      className="snap-start h-[104vh] flex flex-col xl:flex-row gap-12 bg-black border-y border-y-[#ffcc00] px-10 xl:pl-[300px]"
    >
      <div className="w-[600px] flex flex-col pt-12">
        <h3 className="text-white text-3xl pb-3">Hello! We are</h3>
        <p className="text-[40px] xl:text-[61px] text-white leading-10 ">
          <span className="text-colorTop">Film</span>/
          <span className="text-colorTop">Music</span>/
        </p>
        <p className="text-[40px] xl:text-[61px] text-colorTop ">
          Next generation
        </p>

        <p className="text-[16px] pt-7 text-[#ccc] fontText w-[450px] xl:w-full">
          Founded in 2020 and quickly grown to become one of VietNam&apos;s
          leading teams with significant achievements in the media and
          entertainment industry, we proudly produce excellent projects with
          <span className="text-colorTop">
            professional expertise, seamless workflow
          </span>
          , and{" "}
          <span className="text-colorTop">a fierce commitment to quality.</span>
        </p>
        <p className="text-[16px] pt-7 text-[#ccc] fontText w-[450px] xl:w-full">
          While based in Ho Chi Minh City, we provide high-quality services to
          customers worldwide.
        </p>
        <div className="pt-3 xl:pt-20 flex flex-row gap-5">
          <Button
            className="border-colorTop border bg-inherit hover:bg-inherit hover:text-colorTop rounded-xl"
            onClick={() => setIsDialogOpen(true)} // Mở dialog
          >
            MISSION & VISION <FaLongArrowAltRight />
          </Button>
          <Button className="border-colorTop border bg-inherit hover:bg-inherit hover:text-colorTop rounded-xl">
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
          className="object-cover w-[200px] h-[200px] xl:w-[600px] xl:h-[600px]"
        />
      </div>

      <DialogCustom
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        showFooter={false} // Tắt footer nếu không cần
      >
        <div className=" text-white relative flex flex-row gap-20 w-[800px] ]">
          <button
            onClick={() => setIsDialogOpen(false)}
            className=" text-2xl absolute top-[-20px] right-[-15px]  p-0 py-0 hover:bg-black transition duration-700 ease-in-out"
          >
            <IoIosCloseCircleOutline size={20} className="text-colorTop" />
          </button>
          <div className="max-w-[300px]">
            <h2 className="text-lg font-bold pt-2 text-colorTop">
              MISSION & VISION
            </h2>
            <p className="text-[16px] pt-4  text-[#ccc] fontText ">
              We work with closely with brands in order to find the right
              creative and effective solutions that suit their specific needs
              and requirements.
            </p>
          </div>
          <div className="w-[600px]">
            <CarouselCustom />
          </div>
        </div>
      </DialogCustom>
    </section>
  );
};

export default AboutUs;
