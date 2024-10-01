import { useParams } from "react-router"
import { useEffect, useState } from "react";
import axios from "axios";
import CardM from "../component/CardM";
import { Link } from "react-router-dom";
import ModalForm from "../component/ModalForm";

function Category(props) {
  const {
    getCategoryColor,
  news,
  getData,
  setIsOpen,
  isUpdate,
  modalIsOpen
  }=props
  const params= useParams()
  const[category, setCategory]= useState([])
  useEffect(() => {
    getDataCategory();
  }, [params.category]);
  
  const getDataCategory = async ()=>{
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
          <CardM getCategoryColor={getCategoryColor}  {...eachNew}  getDataCategory={getData} />;
        </Link>
      );
    })}
  </div>
  <ModalForm
        getData={getData}
        setIsOpen={setIsOpen}
        modalIsOpen={modalIsOpen}
        isUpdate={isUpdate}
      />
  </div>
  )
}

export default Category