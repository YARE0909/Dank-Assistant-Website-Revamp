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
    <div className="w-full h-full mt-20 lg:p-8">
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
