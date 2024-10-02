import scienceIcon from "../assets/icons/scienceIcon.png";
import travelIcon from "../assets/icons/travelIcon.png";
import sustainabilityIcon from "../assets/icons/sustainabilityIcon.png";
import cultureIcon from "../assets/icons/cultureIcon.png";
import civicsIcon from "../assets/icons/civicsIcon.png";
import lifestyleIcon from "../assets/icons/lifestyleIcon.png";
import { Link, useParams } from "react-router-dom";

function LabelCategory(props) {
  const { getCategoryColor, news } = props;
  const { category } = useParams();
  return (
    <>
      <Link to={`/category/civics`}>
        <div className="box-labelcategory">
          <div
            className="labelcategory"
            style={{ "--custom-color": getCategoryColor("civics") }}
          >
            <img src={civicsIcon} alt="" />
            <h4>CIVICS</h4>
          </div>
        </div>
      </Link>
      <Link to={`/category/culture`}>
        <div className="box-labelcategory">
          <div
            className="labelcategory"
            style={{
              "--custom-color": getCategoryColor("culture"),
              top: "60px",
            }}
          >
            <img src={cultureIcon} alt="" />
            <h4>CULTURE</h4>
          </div>
        </div>
      </Link>
      <Link to={`/category/science`}>
        <div className="box-labelcategory">
          <div
            className="labelcategory"
            style={{
              "--custom-color": getCategoryColor("science"),
              top: "120px",
            }}
          >
            <img src={scienceIcon} alt="" />
            <h4>SCIENCE</h4>
          </div>
        </div>
      </Link>

      <Link to={`/category/lifestyle`}>
        <div className="box-labelcategory">
          <div
            className="labelcategory"
            style={{
              "--custom-color": getCategoryColor("lifestyle"),
              top: "180px",
            }}
          >
            <img src={lifestyleIcon} alt="" />
            <h4>LIFESTYLE</h4>
          </div>
        </div>
      </Link>

      <Link to={`/category/sustainability`}>
        <div className="box-labelcategory">
          <div
            className="labelcategory"
            style={{
              "--custom-color": getCategoryColor("sustainability"),
              top: "240px",
            }}
          >
            <img src={sustainabilityIcon} alt="" />
            <h4>SUSTAINABILITY</h4>
          </div>
        </div>
      </Link>

      <Link to={`/category/travel`}>
        <div className="box-labelcategory">
          <div
            className="labelcategory"
            style={{
              "--custom-color": getCategoryColor(`travel`),
              top: "300px",
            }}
          >
            <img src={travelIcon} alt="" />
            <h4>TRAVEL</h4>
          </div>
        </div>
      </Link>
    </>
  );
}

export default LabelCategory;
