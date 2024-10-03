import { useParams } from "react-router";
import ModalForm from "../component/ModalForm";
import FormComment from "../component/FormComment";
import { useEffect, useState } from "react";
import axios from "axios";
import deleteIcon from "../assets/icons/deleteIcon.png";
import editIcon from "../assets/icons/editIcon.png";
import SliderText from "../component/SliderText";

import podcast01 from "../assets/images/podcast01.webp"
import podcast02 from "../assets/images/podcast02.jpg"
import podcast03 from "../assets/images/podcast03.png"

import vblog01 from "../assets/images/vblog01.webp"
import vblog02 from "../assets/images/vblog02.jpg"
import vblog03 from "../assets/images/vblog03.jpg"



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
    getRandomAvatar,
  } = props;

  useEffect(() => {
    if (!news.length) {
      getData().then(() => setLoading(false));
    } else {
      setLoading(false);
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
    );
  };
  // function openModal() {
  //   setIsOpen(true)
  // }

  return (
    <div
      key={thisNew.id}
      style={{ backgroundColor: "var(--color-neutral-black)" }}
    >
      <div className="details-title">
        <h1 className="title-left">{thisNew.title}</h1>
        <div className="cardL-section">
          <img
            className="cardL-image"
            src={thisNew.image}
            alt={thisNew.title}
            style={{ "--custom-color": getCategoryColor(thisNew.categories) }}
          />
        </div>
      </div>
      <div className="container-content">

        <div className="box-content">
          <p style={{color: "#ffffff"}}>{thisNew.content}</p>
          <p style={{color: "#ffffff"}}>{thisNew.content}</p>
          <p style={{color: "#ffffff"}}>{thisNew.content}</p>
          <p style={{color: "#ffffff"}}>{thisNew.content}</p>
        </div>

        <div className="right-section">
          <div className="cardXs-container">
          <h4 className="cardXs-h4">PODCASTS</h4>

            <div className="cardXs">
              <img src={podcast01} alt="" />
              <div className="cardXs-content">
                <a href="https://themoth.org/">The Moth</a>
                <p>A storytelling platform where real people share personal experiences and connections.</p>
              </div>
            </div>

            <div className="cardXs">
              <img src={podcast02} alt="" />
              <div className="cardXs-content">
                <a href="https://www.ted.com/podcasts/ted-radio-hour">TED Radio Hour</a>
                <p>Inspiring TED Talks organized by themes, showcasing innovative ideas.</p>
              </div>
            </div>

            <div className="cardXs">
              <img src={podcast03} alt="" />
              <div className="cardXs-content">
                <a href="https://hiddenbrain.org/">Hidden Brain</a>
                <p>Explores the unconscious patterns that drive human behavior and shape our choices.</p>
              </div>
            </div>
          </div>

          <div className="cardXs-container">
            <h4 className="cardXs-h4">VIDEOBLOGS</h4>

            <div className="cardXs">
              <img src={vblog01} alt="" />
              <div className="cardXs-content">
                <a href="https://karaandnate.com/about-us/">Kara and Nate</a>
                <p>A couple's travel adventures showcasing diverse cultures and inspiring exploration.</p>
              </div>
            </div>

            <div className="cardXs">
              <img src={vblog02} alt="" />
              <div className="cardXs-content">
                <a href="https://www.nowness.com/">Nowness</a>
                <p>Visually stunning short films that highlight contemporary culture, art, and social issues.</p>
              </div>
            </div>

            <div className="cardXs">
              <img src={vblog03} alt="" />
              <div className="cardXs-content">
                <a href="https://everydayastronaut.com/">Everyday Astronaut</a>
                <p>Breaks down complex space topics with humor, making science accessible.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="author-date">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h5>
              {thisNew.author} |{" "}
              <span style={{ color: "#3c3939" }}>{thisNew.date}</span>{" "}
            </h5>
          </div>
          <button
            onClick={() => {
              handleDelete(params.id);
            }}
          >
            <img src={deleteIcon} alt="" /> Delete
          </button>
          <button onClick={openModal}>
            <img src={editIcon} alt="" /> Edit
          </button>
        </div>

       
      </div>
      <hr style={{ width: "1000px", textAlign: "left", marginLeft: "60px" }} />
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
                  marginBottom: "20px",
                }}
              />
              <div className="author-comment">
                <img
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                  src={getRandomAvatar()}
                  alt="avatar"
                />
                <h3>{eachComment.author}</h3>
                <p>20024/10/02</p>
              </div>
              <div className="comment-box">
                <p>{eachComment.comment}</p>
              </div>
              <div className="likes-comment">
                <p style={{ color: "#fefdfb", fontWeight: "bold" }}>
                  {eachComment.likes}
                </p>
                <button
                  style={{
                    backgroundColor: getCategoryColor(thisNew.categories),
                    color: "#fefdfb",
                    padding: "5px",
                    border: "none",
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
        );
      })}
      <SliderText news={news} getCategoryColor={getCategoryColor} />
    </div>
  );
}

export default Details;
