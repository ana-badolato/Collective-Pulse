import { Link } from "react-router-dom";
import menu from "../assets/menu.png";
import logo from "../assets/icons/logo.svg";

function Navbar(props) {
  const { openModal, getCategoryColor } = props;

  const allCategories = [
    "civics",
    "culture",
    "science",
    "lifestyle",
    "sustainability",
    "travel",
  ];

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
          <Link
            to="/category/civics"
            style={{ "--custom-color": getCategoryColor("civics") }}
          >
            CIVICS
          </Link>
          <Link
            to="/category/culture"
            style={{ "--custom-color": getCategoryColor("culture") }}
          >
            CULTURE
          </Link>
          <Link
            to="/category/science"
            style={{ "--custom-color": getCategoryColor("science") }}
          >
            SCIENCE
          </Link>
          <Link
            to="/category/lifestyle"
            style={{ "--custom-color": getCategoryColor("lifestyle") }}
          >
            LIFESTYLE
          </Link>
          <Link
            to="/category/sustainability"
            style={{ "--custom-color": getCategoryColor("sustainability") }}
          >
            SUSTAINABILITY
          </Link>
          <Link
            to="/category/travel"
            style={{ "--custom-color": getCategoryColor("travel") }}
          >
            TRAVEL
          </Link>
        </div>
        <button onClick={() => openModal(false)}> ADD PULSE</button>
      </div>
    </div>
  );
}

export default Navbar;
