import { useParams } from 'react-router'
import ModalForm from '../component/ModalForm'
import FormComment from '../component/FormComment'
import { useEffect, useState } from 'react'
import axios from 'axios'
import deleteIcon from '../assets/icons/deleteIcon.png'
import editIcon from '../assets/icons/editIcon.png'

function Details(props) {
  const params = useParams();
  const [comment, setComment] = useState([]);
  const [likes, setLikes] = useState(0);
  const [loading, setLoading] = useState(true);
  const {
    news,
    getData,
    setIsOpen,
    modalIsOpen,
    isUpdate,
    handleDelete,
    getDataCategory,
    openModal,
    getCategoryColor,
  } = props;

  useEffect(() => {
    if (!news.length) {
      getData().then(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [news, getData]);

  const getComments = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/comments?newId=${params.id}`
    )
    setComment(response.data)
  }

  let thisNew = news.find((eachNew) => {
    return eachNew.id === Number(params.id)
  })

  if (!thisNew) {
    return <div>Loading or news not found</div>
  }
  const handleLike = async (commentId) => {
    const response = await axios.patch(
      `${import.meta.env.VITE_SERVER_URL}/comments/${commentId}`,
      {
        likes: likes + 1,
      }
    );
    setLikes(response.data.likes);
    setComment((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? { ...comment, likes: response.data.likes }
          : comment
      )
    )
  }
  // function openModal() {
  //   setIsOpen(true)
  // }

  return (
    <div style={{ backgroundColor: 'var(--color-neutral-black)' }}>
      <div className="details-title">
        <h1>{thisNew.title}</h1>
        <img
          src={thisNew.image}
          alt={thisNew.title}
          style={{ '--custom-color': getCategoryColor(thisNew.categories) }}
        />
      </div>
      <div className="container-content">
        <div className="box-content">
          <p>{thisNew.content}</p>
          <p>{thisNew.content}</p>
          <p>{thisNew.content}</p>
          <p>{thisNew.content}</p>
        </div>
        <div style={{ margin: '10px', marginTop: '50px' }}>
          <div
            style={{
              width: '400px',
              height: '100px',
              backgroundColor: 'wheat',
              margin: '10px',
            }}
          ></div>
          <div
            style={{
              width: '400px',
              height: '100px',
              backgroundColor: 'wheat',
              margin: '10px',
            }}
          ></div>
          <div
            style={{
              width: '400px',
              height: '100px',
              backgroundColor: 'wheat',
              margin: '10px',
            }}
          ></div>
          <div
            style={{
              width: '400px',
              height: '100px',
              backgroundColor: 'wheat',
              margin: '10px',
            }}
          ></div>

          <div
            style={{
              width: '400px',
              height: '100px',
              backgroundColor: 'wheat',
              margin: '10px',
            }}
          ></div>
          <div
            style={{
              width: '400px',
              height: '100px',
              backgroundColor: 'wheat',
              margin: '10px',
            }}
          ></div>
        </div>
      </div>
      <div className="author-date">
        <div>
          <h5>
            {thisNew.author} | <span>{thisNew.date}</span>{' '}
          </h5>
        </div>
        <button
          onClick={() => {
            handleDelete(params.id)
          }}
        >
          <img src={deleteIcon} alt="" />
          delete
        </button>
        <button onClick={openModal}>
          <img src={editIcon} alt="" /> edit
        </button>
        <div
          style={{
            width: '400px',
            height: '100px',
            backgroundColor: 'wheat',
            margin: '10px',
          }}
        ></div>
      </div>
      <button
        onClick={() => {
          handleDelete(params.id);
        }}
      >
        delete
      </button>
      {/* <button onClick={() => openModal(true)}>edit</button> */}
      <button onClick={() => {
  console.log("Opening Edit modal", isUpdate);
  openModal(true);  // Modo edición
}}>
  Edit
</button>

      <ModalForm
      
        getDataCategory={getDataCategory}
        news={news}
        getData={getData}
        setIsOpen={setIsOpen}
        modalIsOpen={modalIsOpen}
        isUpdate={isUpdate}
      />

      <FormComment likes={likes} newId={thisNew.id} setComment={setComment} />
      <h4>{comment.length} COMMENTS</h4>

      {comment.map((eachComment) => {
        return eachComment ? (
          <div key={eachComment.id}>
            <img src="" alt="" />
            <h3>{eachComment.author}</h3>
            <p>{eachComment.comment}</p>
            <p>{eachComment.date}</p>
            <p>{eachComment.likes}</p>
            <button onClick={() => handleLike(eachComment.id)}>like</button>
          </div>
        ) : (
          <p>No comments to show</p>
        );
      })}
    </div>
  )
}

export default Details
