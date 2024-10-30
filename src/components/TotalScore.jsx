import React from "react";

const TotalScore = ({totalScore}) => {
  return (
    <>
      <div className="max-w-[20%] h-[10.5rem]">
        <h1 className="ml-[10rem] text-white text-7xl font-bold">{totalScore}</h1>
        <p className="ml-[6rem] text-white text-4xl font-semibold mt-5">Total Score</p>
      </div>
    </>
  );
};

export default TotalScore;
