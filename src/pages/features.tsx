import React, { useEffect } from "react";
import Navbar from "@/components/common/Navbar";
import Features from "@/components/Features/index";

const Index = () => {
  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);

  return (
    <div className="w-full h-screen">
      <Navbar />
      <Features />
    </div>
  );
};

export default Index;
