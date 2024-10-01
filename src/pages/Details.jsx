import { useParams } from "react-router";
import ModalForm from "../component/ModalForm";
import FormComment from "../component/FormComment";
import { useEffect, useState } from "react";
import axios from "axios";

function Details(props) {
  const params = useParams();
  const [comment, setComment] = useState([]);

  const { news, getData, setIsOpen, modalIsOpen, isUpdate, handleDelete } =
    props;

  useEffect(() => {
    if (!news.length) {
      getData(); // Obtener los datos si no están cargados
    }
    getComments();
  }, [news, getData]);

  const getComments = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/comments?newId=${params.id}`
    );
    setComment(response.data);
  };

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
      <button
        onClick={() => {
          handleDelete(params.id);
        }}
      >
        delete
      </button>
      <button>edit</button>
      <ModalForm
        news={news}
        getData={getData}
        setIsOpen={setIsOpen}
        modalIsOpen={modalIsOpen}
        isUpdate={isUpdate}
      />

      <FormComment />
      {comment.map((eachComment) => {
        return (eachComment ?
          (<div>
            <img src="" alt="" />
            <h3>{eachComment.author}</h3>
            <p>{eachComment.comment}</p>
            <p>{eachComment.date}</p>
            <p>{eachComment.likes}</p>
            <button>like</button>
          </div>):
          (<p>No comments to show</p>)
        );
      })}
    </div>
  );
}

export default Details;
