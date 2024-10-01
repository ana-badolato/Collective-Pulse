import { useParams } from "react-router"
import { useEffect, useState } from "react";
import axios from "axios";
import CardM from "../component/CardM";
import { Link } from "react-router-dom";

function Category(props) {
  const params= useParams()
  const[category, setCategory]= useState([])
  useEffect(() => {
    getData();
  }, [params.category]);
  
  const getData = async ()=>{
    try {
    
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/news?categories=${params.category}`)
   
      setCategory(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  
 /* Añadir aquí el loading*/

  return (
    <div>
    <div>{params.category}</div>
    <div className="cardM-section">
    {/* <LabelCategory /> */}
    {category.map((eachNew) => {
      return (
        <Link
          className="cardM-section"
          key={eachNew.id}
          to={`/details/${eachNew.id}`}
          onClick={() => incrementViews(eachNew.id)}
        >
          <CardM {...eachNew} getData={getData} />;
        </Link>
      );
    })}
  </div>
  </div>
  )
}

export default Category