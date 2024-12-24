"use client";
// import dynamic from "next/dynamic";
// import Image from "next/image";
// const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Banner: React.FC = () => {
  return (
    <div
      id="home"
      className="relative h-screen   overflow-hidden scroll-snap-y scroll-snap-mandatory overflow-y-auto w-auto"
    >
      <video
        style={{ objectFit: "cover" }}
        autoPlay
        loop
        muted
        className="videoBanner relative top-0 left-0 h-svh md:h-auto object-cover"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.parentElement!.style.backgroundColor = "black";
        }}
      >
        <source src="/assets/defaultBanner.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <h1 className="text-4xl md:text-6xl text-white font-bold text-center">
         Sẽ gầy
        </h1>
      </div>
    </div>
  );
};

export default Banner;
