import React, { useState } from "react";
import "./navbar.css";

const Navbar = (props) => {
  const navItems = props.data;
  const appTitle = props.appLogo;
  const [active, setActive] = useState(false);
  return (
    <nav>
      <div className="container">
        <h1 className="app-logo">{appTitle}</h1>
        <div className="toggle-icon" onClick={() => setActive(!active)}>
          <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <div className={active ? "nav-menu active" : "nav-menu"}>
          <ul>
            {navItems.map((element) => {
              return (
                <li>
                  <a href="#" className="nav-link">
                    {element}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
