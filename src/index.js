import React from "react";
import reactDom from "react-dom";
import "./main.css";

import Nav from "./components/Nav/Nav.jsx";
// import Channel from "./pages/Channel.jsx";

import { Channel } from "./pages";

const App = () => {
  return (
    <div id='app'>
      <Nav username='Dalton' />
      <Channel />
    </div>
  );
};

reactDom.render(<App />, document.getElementById("root"));
