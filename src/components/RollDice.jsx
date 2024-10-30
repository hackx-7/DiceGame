import React, { useState } from "react";

const RollDice = ({rollDice,currentDice}) => {
    
   

  return (
    <>
    <div className="flex flex-col items-center justify-center">
    <div onClick={rollDice} className="w-[17rem] h-[11rem] flex items-center justify-center ">
        {currentDice === 4 ? ( //exceptional case for dice 4 (different png)
            <img src={"/public/blackdice4.png"} alt="dice_4" className="h-[15.8rem] scale-[1.25] cursor-pointer"/>
        ) : (
            <img src={`/public/blackdice${currentDice}.png`} alt={`dice_${currentDice}`} className="w-[17rem] h-[17rem] bg-white rounded-[2.7rem] cursor-pointer"/>
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

