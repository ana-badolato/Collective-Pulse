import new4 from "../assets/new4.jpg";
import axios from "axios";
import { useParams } from "react-router";
import { useState } from "react";

function CardM(props) {
  //const [news, setNews] = useState([]);
  const { id, author, categories, content, date, image, title, getData,getCategoryColor } =
    props;
const {category} =useParams()
  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`${import.meta.env.VITE_SERVER_URL}/news/${id}`);
  //     //setNews(response.data)
  //     // const response = await axios.get(${import.meta.env.VITE_SERVER_URL})
  //     // setNews((prevNews) => prevNews.filter((item) => item.id !== id));
  //     getData();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>

    <div className="cardM-container">
      <div className="cardM-image">
        <img src={image} alt="" />
      </div>
      <div className="cardM-info">
      <div className="cardM-category" style={{ '--custom-color': getCategoryColor(categories) }} >
        <p>{categories}</p>
      </div>
        <div className="cardM-hover-header">
          <h3>{title}</h3>
          <p>{content.slice(0, 200)}...</p>
        </div>
        <hr />
        <div className="cardM-hover-data">
          <div className="author">
            <img src="" alt="" />
            <p>{author}</p>
          </div>
          <p>{date}</p>
        </div>
        {/* <button
          onClick={() => {
            handleDelete(id);
            
          }}
        >
          Delete
        </button> */}
      </div>
    </div>
      <h2 className="titlecardM" style={{padding:'10pxs', color:'#fefdfb'}}>{title}</h2>
    </>
  );
}

export default CardM;
