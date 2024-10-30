import React from "react";
import TotalScore from "./TotalScore";
import NumSelector from "./NumSelector";
import RollDice from "./RollDice";
import { useState } from "react";
import Buttons from "./Buttons";
import Rules from "./Rules";

const Gamepage = () => {
  //all states together to compare input with the dice number
  const [totalScore, setTotalScore] = useState(0);
  const [selectedNum, setSelectedNum] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [showRules, setShowRules] = useState(false);

  const genRandomNum = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const rollDice = () => {
    //if no number is selected, return
    if (!selectedNum) {
      alert("Please select a number");
      return;
    }
    const randomNum = genRandomNum();
    setCurrentDice(randomNum);

    if (selectedNum === randomNum) {
      setTotalScore((prev) => prev + randomNum);
    } else {
      setTotalScore((prev) => prev - randomNum);
    }
    setSelectedNum(undefined); //reset the selected number
  };

  const resetGame = () => {
    setTotalScore(0);
    setSelectedNum(undefined);
    setCurrentDice(1);
  };

  const toggleShowRules = () => {
    setShowRules((prev) => !prev);
  };

  return (
    <>
      <div className="flex items-end justify-between">
        <TotalScore totalScore={totalScore} />
        <NumSelector
          setSelectedNum={setSelectedNum}
          selectedNum={selectedNum}
        />
      </div>
      <div className="flex items-center justify-center mt-[8rem]">
        <RollDice rollDice={rollDice} currentDice={currentDice} />
      </div>
      <div className="flex items-center justify-center mt-[2rem]">
        <Buttons resetGame={resetGame} toggleShowRules={toggleShowRules} />
      </div>
      {showRules && <Rules />}
    </>
  );
};

export default Gamepage;
