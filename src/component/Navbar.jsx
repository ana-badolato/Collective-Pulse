import { Link } from "react-router-dom";
import menu from "../assets/menu.png";
import logo from "../assets/icons/logo.svg";

function Navbar(props) {
   const {
    allCategories,
    openModal
   }=props

   const getCategoryColor = (category) => {
   let categoryColor="";
console.log(category)
      if( category === "civics"){
        categoryColor="#27cbb8"
      }else if ( category === "culture"){
        categoryColor="#ea3f70"
      }else if (category === "science"){
        categoryColor="#fe6316"
      }else if ( category === "lifestyle"){
        categoryColor="#8427ec"
      }else if ( category === "sustainability"){
        categoryColor="#80e65e"
      }else if ( category === "travel"){
        categoryColor="#fbfd57"
      }

   return categoryColor
  }
   
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
          <Link to="/category" style={{ '--custom-color': getCategoryColor("civics") }}>CIVICS</Link>
          <Link to="/category" style={{ '--custom-color': getCategoryColor("culture") }}>CULTURE</Link>
          <Link to="/category" style={{ '--custom-color': getCategoryColor("science") }}>SCIENCE</Link>
          <Link to="/category" style={{ '--custom-color': getCategoryColor("lifestyle") }}>LIFESTYLE</Link>
          <Link to="/category" style={{ '--custom-color': getCategoryColor("sustainability") }}>SUSTAINABILITY</Link>
          <Link to="/category" style={{ '--custom-color': getCategoryColor("travel") }}>TRAVEL</Link>
        </div>
        <button onClick={openModal}>ADD PULSE</button>
      </div>
    </div>
  );
}

export default Navbar;
