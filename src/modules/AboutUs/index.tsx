'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DialogCustom } from "@/components/ui/Dialog";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

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
        triggerText="MISSION & VISION" // Text trên button
        open={isDialogOpen} // Trạng thái mở dialog
        onOpenChange={setIsDialogOpen} // Cập nhật trạng thái khi đóng/mở
        title="Our Mission & Vision"
        description="Our mission is to create impactful projects that inspire and entertain audiences globally. Our vision is to be at the forefront of innovation in the media and entertainment industry."
        onAction={() => {
          alert("Action executed!");
          setIsDialogOpen(false); // Đóng dialog sau hành động
        }}
        onCancel={() => setIsDialogOpen(false)} // Đóng dialog khi nhấn Cancel
      />
    </section>
  );
};

export default AboutUs;
