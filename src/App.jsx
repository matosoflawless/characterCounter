import React, { useState } from "react";
import WarningMessage from "./components/WarningMessage";
import ErrorMessage from "./components/ErrorMessage";
import SuccessMessage from "./components/SuccessMessage";

function App() {
  const [text, setText] = useState("");
  const [checkIfNumbers, setCheckIfNumbers] = useState(false);
  const handleChange = (event) => {
    const value = event.target.value;
  const noSpaceText = removeSpaces(value);
  const hasNumbers = hasNumber(noSpaceText);
  setCheckIfNumbers(hasNumbers);
  setText(noSpaceText);
};
const squareSize = text.length*10;
const handleReset = (event) => {
  const value = event.target.value;
  setText("")
};
const handleUppercase = (event) => {
  const value = event.target.value;
  setText(text.toUpperCase())
}
  function hasNumber(value) {
    return /\d/.test(value);
  }
  const removeSpaces = (value) => {
    return value.replaceAll(" ", "");
  };

  
  return (
       <div>
      <h1 class="title">Character counter</h1>
      <main className="main">
        

        <input
          style={{ color: text.length > 10 ? "green" : "inherit" }}
          className="textInput"
          placeholder="Enter a word"
          value={text}
          onChange={handleChange}
        />
        {text.length === 0 ? <WarningMessage /> : <SuccessMessage/> && checkIfNumbers ? <ErrorMessage /> : <SuccessMessage/>}
        

        <p className="word">
          <b>Word: {text}</b>
        </p>
        <p>Number of characters: {text.length}</p>
        <button onClick={handleReset}> Reset </button>
        <button onClick={handleUppercase}> Uppercase</button>

        <div className="square" style={{
            width: `${squareSize}px`,
            height: `${squareSize}px`,
            backgroundColor: "black"
          }} >
       
          
    </div>
      </main>
    </div>
  
   

  );
}

export default App;
