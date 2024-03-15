import React, { useEffect, useState } from "react";
import features from "../../../public/data/features.json";
import FeatureCard from "./_components/FeatureCard";

const Index = () => {
  const [featuresList, setFeaturesList] =
    useState<{ title: string; description: string; url: string }[]>();

  useEffect(() => {
    setFeaturesList(features);
  }, []);

  return (
    <div className="w-full h-full mt-20 p-4 lg:p-8 z-50">
      <div className="ripple-background">
        <div className="circle xxlarge shade1">
          <div className="circle xlarge shade2">
            <div className="circle large shade3">
              <div className="circle mediun shade4">
                <div className="circle small shade5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-1">
        {featuresList?.map((feature, index) => {
          return (
            <FeatureCard
              title={feature.title}
              description={feature.description}
              url={feature.url}
              index={index}
              key={feature.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Index;
