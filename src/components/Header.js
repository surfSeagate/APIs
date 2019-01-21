import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

class Header extends Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">
              <img
                className="images icon-pad"
                src="/images/icons/wave.ico"
                alt="Glenn Curry"
              />
            </NavbarBrand>

            <NavLink href="/">
              <div>
                <h2 style={{ color: "#00CED1" }}>SeagateSurf</h2>
              </div>
            </NavLink>

            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink style={{ color: "#00CED1" }} href="/weather">
                    Weather
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{ color: "#00CED1" }} href="/surf">
                    Surf
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;

// const Header = () => (
//   <nav className="navbar navbar-expand-md navbar-light bg-light mb-3">
//     <Link className="navbar-brand toolbar__navigation toolbar__logo " to="/">
//       <img
//         className="images icon-pad"
//         src="/images/icons/wave.ico"
//         alt="Glenn Curry"
//       />
//       <h2 style={{ color: "#00CED1" }}>SeagateSurf</h2>
//     </Link>
//     <ul className="navbar-nav">
//       <li className="nav-item nav">
//         <Link to="/weather" className="nav-link" style={{ color: "#00CED1" }}>
//           Weather
//         </Link>
//       </li>
//       <li className="nav-item nav">
//         <Link to="/surf" className="nav-link " style={{ color: "#00CED1" }}>
//           Surf
//         </Link>
//       </li>
//     </ul>
//   </nav>
// );
