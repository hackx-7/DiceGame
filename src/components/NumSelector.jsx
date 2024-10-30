import React, { useState } from "react";
import styled from "styled-components";

const NumSelector = ({setSelectedNum,selectedNum}) => {
  const nums = [1, 2, 3, 4, 5, 6];
  
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:end;
    gap: 2rem;
  `;

  return (
    <>
      <Container>
        <div className="flex items-center justify-center gap-4 mr-20 mt-10">
          {nums.map((num, i) => (
            <Box
              className="boxes hover:bg-gray-400 transition-all duration-300 border-2 border-white"
              onClick={() => setSelectedNum(num)}
              isSelected={selectedNum === num}
              key={i}
            >
              {num}
            </Box>
          ))}
        </div>
        <p className="text-white text-2xl -mt-1 mr-[5rem]">Select Number</p>
      </Container>
    </>
  );
};

export default NumSelector;

//for changing the color properties of the box when it is selected
const Box = styled.div`
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  border-color: ${(props) => (props.isSelected ? "white" : "black")};
`;
