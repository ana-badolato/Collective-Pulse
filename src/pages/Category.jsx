import { useEffect} from "react";
import CardM from "../component/CardM";
import { Link } from "react-router-dom";
import ModalForm from "../component/ModalForm";
import { useParams } from "react-router-dom";
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

  const params = useParams()
  useEffect(() => {
    if (params.category) {
      getDataCategory(params.category); // Pasa la categoría de params directamente
    }
  }, [params.category, news]); // Se ejecuta cuando cambia la categoría o las noticias

  
 /* Añadir aquí el loading*/
 if (!category || category.length === 0) {
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