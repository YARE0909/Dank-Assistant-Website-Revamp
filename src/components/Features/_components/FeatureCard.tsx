import Image from "next/image";
import React from "react";

const Index = ({
  title,
  description,
  url,
  index,
}: {
  title: string;
  description: string;
  url: string;
  index: number;
}) => {
  return (
    <div
      className={`card z-50 gap-5 w-full lg:w-[50rem] items-center flex-col lg:flex-row ${
        index % 2 === 0 ? "lg:flex" : "lg:flex-row-reverse"
      }`}
    >
      <div>
        <h1 className="font-Honk text-4xl">{title}</h1>
        <p className="text-white text-2xl">{description}</p>
      </div>
      <Image src={`/assets/${url}.jpeg`} width={350} height={200} alt="" />
    </div>
  );
};

export default Index;
