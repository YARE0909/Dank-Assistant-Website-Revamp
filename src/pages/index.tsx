import Hero from "@/components/Hero/index";
import Navbar from "@/components/common/Navbar/index";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  
  return (
    <div className="w-full h-screen overflow-hidden">
      <Navbar />
      <Hero />
    </div>
  );
}
