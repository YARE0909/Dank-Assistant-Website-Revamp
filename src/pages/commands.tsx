import React, { useEffect } from "react";
import Navbar from "@/components/common/Navbar";
import Commands from "@/components/Commands";

const Index = () => {
  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);

  return (
    <div className="w-full h-screen">
      <Navbar />
      <Commands />
    </div>
  );
};

export default Index;
