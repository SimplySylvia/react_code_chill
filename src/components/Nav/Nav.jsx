import React from "react";
import "./Nav.css";

function Nav(props) {
  return (
    <nav className='nav'>
      <section className='nav__logo'>Twitch</section>
      <section className='nav__user'>{props.username}</section>
    </nav>
  );
}

export default Nav;
