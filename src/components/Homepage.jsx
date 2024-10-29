import React from "react";

const Homepage = ({toggle}) => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="flex w-[80%] items-center justify-center font-bold gap-40">
          <img src="./dices.png" alt="" />
          <div className="text-white text-7xl flex flex-col items-end justify-center">
            DICE GAME
            <button onClick={toggle} className="bg-white text-3xl border-2 border-black text-black px-8 py-3 mt-8 rounded-md hover:bg-black hover:border-white hover:text-white cursor-pointer transition-all ease-in-out duration-500">
              Play Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
