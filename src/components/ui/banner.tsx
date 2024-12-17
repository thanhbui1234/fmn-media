"use client";
import React from "react";
// import dynamic from "next/dynamic";
// import Image from "next/image";
// const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Banner: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 h-full w-full object-cover"
      >
        <source
          src="/assets/iLoveYt.net_YouTube_WREN-EVANS-To-Te-Ti-LOI-CHOI-The-First-A_Media_aCqmdPaTVSg_002_720p.mp4"
          type="video/mp4"
        />
      </video>
      {/* <ReactPlayer
        url="/assets/iLoveYt.net_YouTube_WREN-EVANS-To-Te-Ti-LOI-CHOI-The-First-A_Media_aCqmdPaTVSg_002_720p.mp4"
        playing={true}
        loop={true}
        muted={true}
        // width="100%"
        // height="100%"
        className="absolute top-0 left-0 h-full w-full object-cover"
      /> */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <h1 className="text-4xl md:text-6xl text-white font-bold text-center">
          Chào Mừng Bạn Đến Với Shadcn UI
        </h1>
      </div>
    </div>
  );
};

export default Banner;
