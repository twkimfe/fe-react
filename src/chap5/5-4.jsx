import React, { useState } from "react";
import "../css/5-4.css";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }

  function hoverOver() {
    setMouseOver(true);
  }

  function hoverOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        style={{ backgroundColor: buttonColor }}
        onMouseOver={hoverOver}
        onMouseOut={hoverOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
