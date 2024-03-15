import Image from "next/image";
import Link from "next/link";
import React from "react";

const Index = () => {
  return (
    <div className="w-full h-screen overflow-hidden flex flex-col gap-5 items-center justify-center">
      <section>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </section>
      <div>
        <Image
          src="/assets/DankAssistant.png"
          width={100}
          height={100}
          alt="Dank Assistant Logo"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-8xl font-bold text-highlight font-Honk">
          DANK ASSISTANT
        </h1>
        <h1 className="text-2xl font-Bit">
          Your most reliable guide to the Dank Memer universe.
        </h1>
      </div>
      <div className="flex gap-5">
        <div className="px-4 py-1 rounded-lg flex items-center bg-[#6320EE]">
          <Link href={"/commands"}>
            <h1 className="font-Bit text-2xl">Get Started</h1>
          </Link>
        </div>
        <div className="px-4 py-1 rounded-lg flex items-center bg-[#6320EE]">
          <Link href={"/commands"}>
            <h1 className="font-Bit text-2xl">Invite Me</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
