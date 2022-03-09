import React from "react";
import reactDom from "react-dom";
import "./main.css";

const App = () => {
  return <h1>Hello World!</h1>
}

reactDom.render(<App />, document.getElementById("root"));