import React, { useEffect, useState } from "react";
import CommandCard from "./_components/CommandCard";
import commands from "../../../public/data/commands.json";

const Index = () => {
  const [commandList, setCommandList] = useState<
    { name: string; description: string; syntax: string }[]
  >([]);

  useEffect(() => {
    setCommandList(commands);
  }, []);
  return (
    <div className="mt-20 lg:p-8 overflow-scroll">
      {/* <div>
        <h1 className="font-Honk text-5xl">What I can do</h1>
      </div> */}
      <div className="w-full h-full flex flex-wrap gap-2 justify-center">
        {commandList.map((command) => {
          return (
            <CommandCard
              name={command.name}
              description={command.description}
              syntax={command.syntax}
              key={command.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Index;
