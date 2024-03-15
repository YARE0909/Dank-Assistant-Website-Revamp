import React, { useEffect, useState } from "react";
import faqs from "../../../public/data/faqs.json";

const Index = () => {
  const [faqsList, setFaqsList] = useState<
    {
      question: string;
      answer: string;
    }[]
  >();

  useEffect(() => {
    setFaqsList(faqs);
  }, []);

  return (
    <div className="mt-20 p-4 lg:p-8">
      <div className="flex flex-col justify-center items-center gap-5">
        {faqsList?.map((faq) => {
          return (
            <div
              key={faq.question}
              className="w-full h-fit border-b-2 border-b-white p-4 py-10 flex flex-col gap-2"
            >
              <h1 className="font-Honk text-3xl">{faq.question}</h1>
              <p className="text-gray-400">{faq.answer}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
