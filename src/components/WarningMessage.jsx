import React from "react";

function WarningMessage() {
  return (
    <div className="warningMessage">
      <span role="img" aria-label="Warning">
        ⚠️
      </span>{" "}
      <b>Warning</b>
      <br />
      No word detected! Enter a word to continue.
    </div>
  );
}

export default WarningMessage;
