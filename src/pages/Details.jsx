import {useParams } from "react-router";
import ModalForm from "../component/ModalForm"
import FormComment from "../component/FormComment";
import { useEffect } from "react";

function Details(props) {
  const params = useParams();
  const { news, getData, setIsOpen, modalIsOpen, isUpdate, handleDelete } = props;
 console.log("params", params )
 console.log("news", news)

 useEffect(() => {
  if (!news.length) {
    getData(); // Obtener los datos si no están cargados
  }
}, [news, getData]);

 let thisNew = news.find((eachNew) => {

    return eachNew.id === Number(params.id);
  });

  if (!thisNew) {
    return <div>Loading or news not found</div>;
  }

  return (
    <div>
      <h1>{thisNew.title}</h1>
      <img src="" alt="" />
      <div>
        <p>{thisNew.content}</p>
      </div>
      <button onClick={()=>{handleDelete(params.id)}}>delete</button>
      <button>edit</button>
      <ModalForm
        news={news}
        getData={getData}
        setIsOpen={setIsOpen}
        modalIsOpen={modalIsOpen}
        isUpdate={isUpdate}
      />

      <FormComment />

    </div>
  );
}

export default Details;
