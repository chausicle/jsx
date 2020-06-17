import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const buttonText = "Submit";
  const labelText = "Enter name:";

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ background: "#e3e3e3", color: "grey" }}>
        {buttonText}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
