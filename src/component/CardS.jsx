// import nature from '../assets/naturalez.png'
import new4 from "../assets/new4.jpg";
import axios from "axios";
import { useParams } from "react-router";
import { useState } from "react";
function CardS(props) {
  //const [news, setNews] = useState([]);
  const {
    id,
    author,
    categories,
    content,
    date,
    image,
    title,
    getData,
    getCategoryColor,
  } = props;
  const { category } = useParams();

  return (
    <div className="cardS-container">

      <div className="cardS-image">
        <img src={image} alt="" />
      </div>



      <div
        className="cardS-category"
        style={{ "--custom-color": getCategoryColor(categories) }}
      >
        <p>{categories}</p>
      </div>



      <div className="cardS-header">
        <h3>{title}</h3>
        <p>{content.slice(0, 200)}...</p>
      </div>


      <hr />


      <div className="cardS-data">
        <div className="author">
          <img src="" alt="" />
          <p>{author}</p>
        </div>
        <p>{date}</p>
      </div>


    </div>
  );
}

export default CardS;
