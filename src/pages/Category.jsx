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
  modalIsOpen,
  getDataCategory,
  category
  }=props


  useEffect(() => {
    getDataCategory();
   
  }, [params.category, news]);
  

  
 /* Añadir aquí el loading*/
 if (!category.length) {
  return <div>Loading or news not found</div>;
}
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
  getDataCategory={getDataCategory}
        getData={getData}
        setIsOpen={setIsOpen}
        modalIsOpen={modalIsOpen}
        isUpdate={isUpdate}
      />
  </div>
  )
}

export default Category