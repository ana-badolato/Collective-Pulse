import { useParams } from 'react-router'
import ModalForm from '../component/ModalForm'
import FormComment from '../component/FormComment'
import { useEffect, useState } from 'react'
import axios from 'axios'
import deleteIcon from '../assets/icons/deleteIcon.png'
import editIcon from '../assets/icons/editIcon.png'
import SliderText from '../component/SliderText'
import avatar from '../assets/avatar.png'

function Details(props) {
  const params = useParams()
  const [comment, setComment] = useState([])
  const [likes, setLikes] = useState(0)
  const [loading, setLoading] = useState(true)
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
    getRandomAvatar,
  } = props
    
  

  useEffect(() => {
    if (!news.length) {
      getData().then(() => setLoading(false))
    } else {
      setLoading(false)
    }
    getComments()
  }, [news, getData])

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
    )
    setLikes(response.data.likes)
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
    <div key={thisNew.id} style={{ backgroundColor: 'var(--color-neutral-black)' }}>
      <div className="details-title">
        <h1>{thisNew.title}</h1>
        <div className="container-img-details">
          <img
            src={thisNew.image}
            alt={thisNew.title}
            style={{ '--custom-color': getCategoryColor(thisNew.categories) }}
          />
        </div>
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
      <div style={{ display: 'flex' }}>
        <div className="author-date">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h5>
              {thisNew.author} |{' '}
              <span style={{ color: '#3c3939' }}>{thisNew.date}</span>{' '}
            </h5>
          </div>
          <button
            onClick={() => {
              handleDelete(params.id)
            }}
          >
            <img src={deleteIcon} alt="" /> Delete
          </button>
          <button onClick={openModal}>
            <img src={editIcon} alt="" /> Edit
          </button>
        </div>

        <div
          style={{
            width: '400px',
            height: '100px',
            backgroundColor: 'wheat',
            margin: '10px',
          }}
        ></div>
      </div>
      <hr style={{ width: '1000px', textAlign: 'left', marginLeft: '60px' }} />
      <ModalForm
        getDataCategory={getDataCategory}
        news={news}
        getData={getData}
        setIsOpen={setIsOpen}
        modalIsOpen={modalIsOpen}
        isUpdate={isUpdate}
      />

      <FormComment likes={likes} newId={thisNew.id} setComment={setComment} />
      <h4 className="number-comments">{comment.length} COMMENTS</h4>

      {comment.map((eachComment) => {
        return eachComment ? (
          <>
            <div className="comment-container" key={eachComment.id}>
              <hr
                style={{
                  borderColor: getCategoryColor(thisNew.categories),
                  marginBottom: '20px',
                }}
              />
              <div className="author-comment">
                <img
                  style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                  src={avatar}
                  alt="avatar"
                />
                <h3>{eachComment.author}</h3>
                <p>20024/10/02</p>
              </div>
              <div className="comment-box">
                <p>{eachComment.comment}</p>
              </div>
              <div className="likes-comment">
                <p style={{ color: '#fefdfb', fontWeight: 'bold' }}>
                  {eachComment.likes}
                </p>
                <button
                  style={{
                    backgroundColor: getCategoryColor(thisNew.categories),
                    color: '#fefdfb',
                    padding: '5px',
                    border: 'none',
                  }}
                  onClick={() => handleLike(eachComment.id)}
                >
                  like
                </button>
              </div>
            </div>
          </>
        ) : (
          <p>No comments to show</p>
        )
      })}
      <SliderText news={news} getCategoryColor={getCategoryColor} />
    </div>
  )
}

export default Details
