import React from "react";

function ErrorMessage() {
  return (
    <div className="errorMessage">
      <span role="img" aria-label="Error">
       ❌ 
      </span>{" "}
      <b>Error</b>
      <br />
      Enter a valid word!
    </div>
  );
}

export default ErrorMessage;
