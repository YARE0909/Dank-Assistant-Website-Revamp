import Hero from "@/components/Hero/index";
import Navbar from "@/components/common/Navbar/index";

export default function Home() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Navbar />
      <Hero />
    </div>
  );
}
