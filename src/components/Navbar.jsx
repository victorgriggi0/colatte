import React, { useEffect } from "react";

import "./Navbar.css";

export function Navbar() {
  useEffect(() => {
    const menu = document.querySelector("#menuIcon");
    const list = document.querySelector(".navbarList");

    const handleMenuClick = () => {
      menu.classList.toggle("fa-xmark");
      list.classList.toggle("active");
    };

    const handleScroll = () => {
      menu.classList.remove("fa-xmark");
      list.classList.remove("active");
    };

    menu.addEventListener("click", handleMenuClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      menu.removeEventListener("click", handleMenuClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <a href="#" aria-label="" className="navbarLogo">
        <img src="https://corhexa.com/png/500x500/191919" alt="" />
      </a>

      <i className="fa-solid fa-bars" id="menuIcon"></i>

      <ul className="navbarList">
        <li>
          <a href="">home</a>
        </li>
        <li>
          <a href="">our sectors</a>
        </li>
        <li>
          <a href="">how we work</a>
        </li>
        <li>
          <a href="">contact</a>
        </li>
      </ul>
    </nav>
  );
}
