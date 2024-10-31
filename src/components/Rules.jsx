import React from "react";
import { motion } from "framer-motion";

const Rules = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      className="bg-[#fbf1f1] p-8 rounded-lg max-w-[800px] mt-12 mx-auto mb-16">
      <p className="text-2xl font-semibold mb-2">How to play dice game?</p>
      <div className="text-gray-700">
        <p>1. Select any number</p>
        <p>2. Click on dice image</p>
        <p>
          3. After clicking on dice, if selected number is equal to dice number
          you will get same point as appeared on the dice
        </p>
        <p>
          4. If you get a wrong guess then the points deducted will be same as
          the value on the dice
        </p>
      </div>
    </motion.div>
  );
};

export default Rules;
