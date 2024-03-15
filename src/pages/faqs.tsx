import React, { useEffect } from "react";
import Navbar from "@/components/common/Navbar";
import Faqs from "@/components/FAQs/index";

const Index = () => {
  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);

  return (
    <div className="w-full h-screen">
      <Navbar />
      <Faqs />
    </div>
  );
};

export default Index;
