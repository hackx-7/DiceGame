import React, { useState } from "react";
import { motion } from "framer-motion";

const RollDice = ({ rollDice, currentDice }) => {
  const [isRolling, setIsRolling] = useState(false);

  const handleDiceClick = () => {
    // Store the result of rollDice() to check if a number was selected
    const wasRolled = rollDice();
    
    // Only set setIsRolling to true if rollDice() didn't return early
    if (wasRolled !== undefined) {
      setIsRolling(true);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div
          onClick={handleDiceClick}
          className="w-[17rem] h-[11rem] flex items-center justify-center"
        >
          {currentDice === 4 ? ( //exceptional case for dice 4 (different png)
            <motion.img
              src={"/blackdice4.png"}
              alt="dice_4"
              className="h-[17.8rem] cursor-pointer "
              animate={{ rotate: isRolling ? 360 : 0 }}
              transition={{ duration: 0.5, ease: "linear" }}
              onAnimationComplete={() => setIsRolling(false)}
            />
          ) : (
            <motion.img
              src={`/blackdice${currentDice}.png`}
              alt={`dice_${currentDice}`}
              className="w-[15rem] h-[15rem] bg-white rounded-[2.7rem] cursor-pointer"
              animate={{ rotate: isRolling ? 360 : 0 }}
              transition={{ duration: 0.5, ease: "linear" }}
              onAnimationComplete={() => setIsRolling(false)}
            />
          )}
        </div>
        <div className="text-white text-2xl mt-[4.5rem]">
          Click on Dice to Roll
        </div>
      </div>
    </>
  );
};

export default RollDice;
