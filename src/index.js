import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ background: "#e3e3e3", color: "grey" }}>Submit</button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
