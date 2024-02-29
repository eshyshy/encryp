import React from "react";
import dynamic from "next/dynamic";

// Dynamic import for client-side rendering
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementsList = [
  {
    prefix: "|",
    metric: "Supported crypto wallet",
    value: "76",
    postfix: "+",
  },
  {
    prefix: "|",
    metric: "Crypto Coins",
    value: "20,000",
    postfix: "+",
  },
  {
    prefix: "|",
    metric: "Crypto Networks",
    value: "10,748",
  },
  {
    prefix: "|",
    metric: "Years",
    value: "5",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix && `${achievement.prefix} `}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value)}
                locale="en-US"
                className="text-white text-4xl font-bold"
              />
              {achievement.postfix && ` ${achievement.postfix}`}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;