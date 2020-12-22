import React, { useState } from "react";

import Briefcase from "../../assets/svgs/briefcase.svg";
import Lock from "../../assets/svgs/lock.svg";
import Certificate from "../../assets/svgs/certificate.svg";
import Trophy from "../../assets/svgs/trophy.svg";

import { Timestamp } from "../base/timestamp";
import {
  Achievement as AchievementProps,
  AchievementType,
  Achievement,
} from "../../types/achievement";
import { NotionRenderer } from "react-notion";

const AchievementIcon: React.FC<{
  type: AchievementType;
  className?: string;
}> = ({ type, ...props }) => {
  switch (type) {
    case "award":
      return <Trophy {...props} />;
    case "education":
      return <Certificate {...props} />;
    case "work":
      return <Briefcase {...props} />;
    case "security":
      return <Lock {...props} />;
  }
};

const AchievementRow: React.FC<AchievementProps> = ({
  title,
  date,
  endDate,
  type,
  blockMap,
}) => (
  <div
    className="flex items-center my-8 animate-enter achievement-notion"
    style={{
      animation: "enter 300ms ease-out",
    }}
  >
    <AchievementIcon className="" type={type} />
    <h4 className="flex-1 mx-4">
      <div className="font-semibold text-teal-400">{title}</div>
      <NotionRenderer blockMap={blockMap} />
    </h4>
    <div>
      <Timestamp
        className="border-l pl-2 ml-2"
        date={new Date(date)}
        endDate={new Date(endDate)}
      />
    </div>
  </div>
);

export const Achievements: React.FC<{ achievements: Achievement[] }> = ({
  achievements,
}) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-gray-900">
      <div className="container my-16">
        <div className="m-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-teal-300">
            Achievements and Awards
          </h1>
          <div className="text-2xl text-gray-500">Things I Have Achieved</div>
          <div className="my-4">
            {achievements
              .filter((a) => showMore || a.highlight)
              .map((a, i) => (
                <AchievementRow key={i} {...a} />
              ))}
          </div>
          <div className="flex justify-center">
            <button
              className="px-2 py-1 text-gray-400 bg-gray-800 hover:bg-gray-600 rounded shadow-xs"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show less ↑" : "Show more ↓"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
