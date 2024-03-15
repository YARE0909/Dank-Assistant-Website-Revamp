import Image from "next/image";
import React from "react";

const CommandCard = ({
  name,
  description,
  syntax,
}: {
  name: string;
  description: string;
  syntax: string;
}) => {
  return (
    <div className="w-[400px] h-[200px]">
      <Image
        className="absolute z-0"
        src="/assets/card.png"
        alt="command"
        width={400}
        height={200}
      />
      <div className="w-full h-full p-7 flex flex-col justify-between">
        <div>
          <h1 className="font-Honk text-4xl">{name}</h1>
          <h1 className="text-xl">{description}</h1>
        </div>
        <div>
          <h1 className="text-gray-400">Syntax: {syntax}</h1>
        </div>
      </div>
    </div>
  );
};

export default CommandCard;
