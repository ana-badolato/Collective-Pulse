import { useParams } from "react-router";
import ModalForm from "../component/ModalForm";

function Details(props) {
  const params = useParams();
  const { news, getData, setIsOpen, modalIsOpen, isUpdate } = props;
  //console.log(news);
  let thisNew = news.find((eachNew) => {
    return eachNew.id === Number(params.id);
  });
  //console.log(thisNew);
  //console.log(params)
  return (
    <div>
      <h1>{thisNew.title}</h1>
      <img src="" alt="" />
      <div>
        <p>{thisNew.content}</p>
      </div>
      <button>delete</button>
      <button>edit</button>
      <ModalForm
        news={news}
        getData={getData}
        setIsOpen={setIsOpen}
        modalIsOpen={modalIsOpen}
        isUpdate={isUpdate}
      />
    </div>
  );
}

export default Details;
