import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const funnyGreetings = [
  "Greetings, Earthlings! Resistance is futile.",
  "Ahoy, matey! Ready to sail the seas of today?",
  "Hey there, sunshine! Time to rise and shine, or at least rise.",
  "Well, hello there, human! Let's make today so awesome that yesterday gets jealous.",
  "Greetings, fellow carbon-based life form! Let's conquer the day with our organic charm.",
  "Howdy-doody! Let's kick today's butt... figuratively, of course.",
  "Salutations, amigo! Let's tackle today like a burrito—full of surprises and satisfaction.",
  "Hey, you magnificent creature of habit! Ready to rock this day like it owes us money?",
  "Bonjour, mon ami! Let's make today so fabulous, yesterday gets FOMO.",
  "Greetings, time traveler! Welcome to the present moment, where we invent the future.",
  "Hello, you splendid human! Time to dazzle the world with your awesomeness.",
  "Hi there, fellow inhabitant of planet Earth! Let's make today legendary.",
  "Yo, what's crackin', my friend? Let's make today as memorable as that awkward middle school dance.",
  "Hey, sunshine! Time to sprinkle some awesome sauce on this day.",
  "How's it hanging, champ? Let's tackle today like a boss!",
  "What's cookin', good lookin'? Let's turn up the heat on today's adventures.",
  "Hey, rockstar! Ready to make today sing and dance to our tune?",
  "Well, butter my biscuit! It's time to butter up this day with some positivity.",
  "Hey there, spark plug! Let's ignite some excitement into this day!",
  "Howdy, partner in crime! Let's go commit some acts of awesomeness.",
];

const Index = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    setGreeting(
      funnyGreetings[Math.floor(Math.random() * funnyGreetings.length)]
    );
  }, []);

  return (
    <div className="w-full h-20 border-b border-b-gray-500 flex justify-between items-center p-4 px-8 fixed top-0 z-50">
      <div className="flex items-center gap-5">
        <Image
          src="/assets/DankAssistant.png"
          width={50}
          height={50}
          alt="Dank Assistant Logo"
        />
        <h1 className="font-Bit">{greeting}</h1>
      </div>
      <div className="flex gap-5">
        <Link href={"/"} className="text-xl font-bold text-highlight font-Honk">
          Home
        </Link>
        <Link href={"/"} className="text-xl font-bold text-highlight font-Honk">
          Commands
        </Link>
        <Link href={"/"} className="text-xl font-bold text-highlight font-Honk">
          FAQs
        </Link>
        <a
          href={"https://discord.com/invite/cfWrVNFhDy"}
          target="_blank"
          className="text-xl font-bold text-highlight font-Honk"
        >
          Support Server
        </a>
        <a
          href={
            "https://discord.com/login?redirect_to=%2Foauth2%2Fauthorize%3Fclient_id%3D815564870011453480%26scope%3Dbot%2520applications.commands%26permissions%3D347200%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fdankassistant.ga%252Flanding"
          }
          target="_blank"
          className="text-xl font-bold text-highlight font-Honk"
        >
          Invite Bot
        </a>
      </div>
    </div>
  );
};

export default Index;
