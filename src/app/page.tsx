import Banner from "@/components/ui/banner";

export default function Home() {
  return (
    <div className="scroll-snap-y scroll-snap-mandatory overflow-y-auto">
      {/* Banner video */}
      <Banner />

      {/* Nội dung bên dưới banner */}
      <section className="snap-start h-screen bg-blue-500 flex items-center justify-center">
        <h2 className="text-4xl text-white">Nội Dung 1</h2>
      </section>
    </div>
  );
}
