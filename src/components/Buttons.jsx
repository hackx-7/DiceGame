import React from "react";

const Buttons = ({resetGame, toggleShowRules}) => {
  return (
    <div className="Buttons flex flex-col items-center justify-center gap-7">
      <button onClick={resetGame} className="bg-white text-black px-10 py-2 rounded-md text-xl font-bold hover:bg-black hover:text-white transition-all duration-300 border-2 border-white">
        Reset
      </button>
      <button onClick={toggleShowRules} className="bg-black text-white px-10 py-2 rounded-md text-xl font-bold hover:bg-white hover:text-black transition-all duration-300 border-2 border-white">
        Show Rules
      </button>
    </div>
  );
};

export default Buttons;
