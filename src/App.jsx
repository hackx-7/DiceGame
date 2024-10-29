import React from "react";
import "./index.css";
import Homepage from "./components/Homepage";
import Gamepage from "./components/Gamepage";
import { useState } from "react";

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGameStarted = () => {
    setIsGameStarted((prev) => !prev);

  };
  
  return (
    <>
      {isGameStarted ? <Gamepage /> : <Homepage toggle={toggleGameStarted} />}
    </>
  );
}

export default App;
