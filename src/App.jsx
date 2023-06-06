import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1 class="title">Character counter</h1>
      <main className="main">
        <input
          className="textInput"
          placeholder="Enter a word"
          value={text}
          onChange={handleChange}
        />
        <p className="word">
          <b>Word:</b> {text}
        </p>
        <p>Number of characters: {text.length}</p>
      </main>
    </div>
  );
}

export default App;