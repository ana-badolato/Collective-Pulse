import { Link } from "react-router-dom";
import menu from "../assets/menu.png";

import logo from "../assets/icons/logo.svg";

function Navbar(props) {
  return (
    <div className="container-nav">
      <div className="wrapper-nav">
        <div className="container-menu">
          <img className="menu" src={menu} alt="menu" />
        </div>

        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="container-categories-nav">
          <Link to="/category">CIVICS</Link>
          <Link to="/category">CULTURE</Link>
          <Link to="/category">SCIENCE</Link>
          <Link to="/category">LIFESTYLE</Link>
          <Link to="/category">SUSTAINABILITY</Link>
          <Link to="/category">TRAVEL</Link>
        </div>
        <button onClick={props.openModal}>ADD PULSE</button>
      </div>
    </div>
  );
}

export default Navbar;
