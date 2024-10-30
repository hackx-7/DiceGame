import React from "react";

const Rules = () => {
  return(
    <div className="bg-[#fbf1f1] p-8 rounded-lg max-w-[800px] mt-12 mx-auto mb-16">
        <p className="text-2xl font-semibold mb-2">How to play dice game?</p>
        <div className="text-[#000000ac]">
            <p>1. Select any number</p>
            <p>2. Click on dice image</p>
            <p>3. After clicking on dice, if selected number is equal to dice number you will get same point as appeared on the dice</p>
            <p>4. If you get a wrong guess then the points deducted will be same as the value on the dice</p>
        </div>
    </div>
  );
};

export default Rules;
