import React from "react";
import reactDom from "react-dom";
import "./main.css";

import Nav from "./components/Nav/Nav.jsx";

const App = () => {
  return <div id="app">
      <Nav username="Dalton" />
      <Nav username="Will" />
      <Nav username="Tyler" />
    </div>
}

reactDom.render(<App />, document.getElementById("root"));