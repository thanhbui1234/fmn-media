// import Banner from "@/components/ui/banner";

import AboutUs from "@/modules/AboutUs";
import TrustedPartners from "@/modules/TRUSTED  PARTNER";
// import Image from "next/image";

// import Banner from "@/modules/VideoBanner/banner";

export default function Home() {
  return (
    <div className="scroll-snap-y scroll-snap-mandatory overflow-y-auto w-full ">
      {/* Banner video */}
      <AboutUs />
      {/* Nội dung bên dưới banner */}
      <TrustedPartners />
    </div>
  );
}
