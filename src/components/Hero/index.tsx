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
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl lg:text-8xl font-bold text-highlight font-Honk">
          DANK ASSISTANT
        </h1>
        <h1 className="lg:text-2xl font-Bit">
          Your most reliable guide to the Dank Memer universe.
        </h1>
      </div>
      <div className="flex gap-5 z-40">
        <div className="px-4 py-1 rounded-lg flex items-center bg-[#5562F5]">
          <Link href={"/features"} className="flex items-center gap-2">
            <Image
              className="rounded-full"
              src="/assets/starIcon.png"
              alt=""
              width={25}
              height={20}
            />
            <h1 className="font-Bit lg:text-2xl">Get Started</h1>
          </Link>
        </div>
        <div className="px-4 py-1 rounded-lg flex items-center bg-[#5562F5]">
          <a
            href={
              "https://discord.com/login?redirect_to=%2Foauth2%2Fauthorize%3Fclient_id%3D815564870011453480%26scope%3Dbot%2520applications.commands%26permissions%3D347200%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fdankassistant.ga%252Flanding"
            }
            target="_blank"
            className="flex items-center gap-2"
          >
            <Image
              className="rounded-full"
              src="/assets/discordIcon.png"
              alt=""
              width={30}
              height={20}
            />
            <h1 className="font-Bit lg:text-2xl">Invite Me</h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
