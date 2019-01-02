import React, { Component } from "react";
import { Link } from "react-router-dom";

class MenuContent extends Component {
  constructor(props) {
    super(props);

    // this.items = [];
    // for (let i = 1; i <= 5; i++) {
    //   this.items.push(i);
    // }
  }

  render() {
    return (
      <div className="menu" style={{ marginTop: "20px" }}>
        <div className="menu-item">
          <Link to="/" className="header__content">
            <img
              className="images icon-pad"
              src="/images/hamwave.jpg"
              alt="Glenn Curry"
            />
          </Link>

          <ul id="slide-out" className="sidenav">
            <li>
              <Link to="/weather" onClick={this.props.closeCallback}>
                weather
              </Link>
            </li>

            <li>
              <Link to="/surf" onClick={this.props.closeCallback}>
                Surf
              </Link>
            </li>

            <li>
              <Link to="/pictures" onClick={this.props.closeCallback}>
                Pics
              </Link>
            </li>
          </ul>
        </div>
        <hr />
      </div>
    );
  }
}

MenuContent.PropTypes = {
  closeCallback: React.PropTypes.func.isRequired
};

export default MenuContent;

// <div className="menu-item" key={i}></div>

// <a
//               href="https://github.com/Middlerun/cheeseburger-menu"
//               onClick={this.props.closeCallback}
//               target="_blank"
//             >
//               Menu item {i}
//             </a>
