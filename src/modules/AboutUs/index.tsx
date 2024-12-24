import Image from "next/image";

const AboutUs = () =>{
    return (
      <section
        id="div1"
        className="snap-start h-[104vh]  flex items-center justify-center bg-black border-y border-y-[#ffcc00]"
      >
        <h2 className="text-4xl text-white">Nội Dung 1</h2>
        <Image
          width={400}
          height={400}
          src="/assets/FMN_AB_5.gif"
          alt="Picture of the author"
          className="object-cover"
        />
      </section>
    );
}

export default AboutUs;