import React from "react";
import { Link } from "react-router-dom";
//import SideNav from "./SideNav";
//import DrawerToggleButton from "./SideDrawerButton";
import HamMenu from "./HamMenu";

//import Toolbar from "./components/Toolbar";

const Header = () => (
  <nav className="navbar navbar-expand-md navbar-light bg-light mb-3">
    <Link className="navbar-brand toolbar__navigation toolbar__logo " to="/">
      <img
        className="images icon-pad"
        src="/images/icons/wave.ico"
        alt="Glenn Curry"
      />
      <h2 style={{ color: "#00CED1" }}>SeagateSurf</h2>
    </Link>
    <ul className="navbar-nav">
      <li className="nav-item nav">
        <Link to="/weather" className="nav-link" style={{ color: "blue" }}>
          Weather
        </Link>
      </li>
      <li className="nav-item nav">
        <Link to="/surf" className="nav-link " style={{ color: "blue" }}>
          Surf
        </Link>
      </li>
    </ul>
  </nav>
);

export default Header;
