import { useParams } from "react-router";
import ModalForm from "../component/ModalForm";
import FormComment from "../component/FormComment";
import { useEffect, useState } from "react";
import axios from "axios";
import deleteIcon from "../assets/icons/deleteIcon.png";
import editIcon from "../assets/icons/editIcon.png";
import SliderText from "../component/SliderText";

import podcast01 from "../assets/images/podcast01.webp";
import podcast02 from "../assets/images/podcast02.jpg";
import podcast03 from "../assets/images/podcast03.png";

import vblog01 from "../assets/images/vblog01.webp";
import vblog02 from "../assets/images/vblog02.jpg";
import vblog03 from "../assets/images/vblog03.jpg";

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

  const thisNew = news.find((eachNew) => eachNew.id === Number(params.id));

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

  {/* Contenedor principal */}
  <div className="container-content">
    {/* Contenido principal (párrafos de texto) */}
    <div className="box-content">
      <p style={{ color: "#ffffff" }}>{thisNew.content}</p>
      <p style={{ color: "#ffffff" }}>{thisNew.content}</p>
      <p style={{ color: "#ffffff" }}>{thisNew.content}</p>
      <p style={{ color: "#ffffff" }}>{thisNew.content}</p>

      {/* Sección inferior del artículo (autor y acciones) */}
      <div className="bottom-section-article">
        <div className="author-date-article">
          <div className="data-author-article">
            <img src={getRandomAvatar()} alt="" />
            <div className="author-article">
              <p>{thisNew.author}</p>
              <p> | </p>
              <p className="date-article">
                {new Date(thisNew.date).toLocaleDateString("es-ES")}
              </p>
            </div>
          </div>
        </div>
        <div className="actions-article">


          <button className="actions-article-button"
            onClick={() => {
              handleDelete(params.id);
            }}
          >
            <img src={deleteIcon} alt="" /> 
            <p>Delete</p>
          </button >


          <button onClick={openModal} className="actions-article-button">
            <img src={editIcon} alt="" />
            <p>Edit</p>
          </button>
        </div>


      </div>

      <hr className="content-comments-hr"/>

      {/* Sección de comentarios */}
      <FormComment likes={likes} newId={thisNew.id} setComment={setComment} getRandomAvatar={getRandomAvatar} getCategoryColor={getCategoryColor} categories={thisNew.categories}/>
      <h4 className="number-comments">{comment.length} COMMENTS</h4>
      <div className="comment-container">
        {comment.map((eachComment) => (
          <div className="author-comment" key={eachComment.id}>
            <img
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              src={getRandomAvatar()}
              alt="avatar"
            />
            <h3>{eachComment.author}</h3>
            <p>{new Date(eachComment.date).toLocaleDateString("es-ES")}</p>
            <p>{eachComment.comment}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Sección derecha (podcasts y videoblogs) */}
    <div className="right-section">
      <div className="cardXs-container">
        <h4 className="cardXs-h4">PODCASTS</h4>

        <div className="cardXs">
          <img src={podcast01} alt="" />
          <div className="cardXs-content">
            <a href="https://themoth.org/">The Moth</a>
            <p>
              A storytelling platform where real people share personal
              experiences and connections.
            </p>
          </div>
        </div>

        <div className="cardXs">
          <img src={podcast02} alt="" />
          <div className="cardXs-content">
            <a href="https://www.ted.com/podcasts/ted-radio-hour">
              TED Radio Hour
            </a>
            <p>
              Inspiring TED Talks organized by themes, showcasing innovative
              ideas.
            </p>
          </div>
        </div>

        <div className="cardXs">
          <img src={podcast03} alt="" />
          <div className="cardXs-content">
            <a href="https://hiddenbrain.org/">Hidden Brain</a>
            <p>
              Explores the unconscious patterns that drive human behavior
              and shape our choices.
            </p>
          </div>
        </div>
      </div>

      <div className="cardXs-container">
        <h4 className="cardXs-h4">VIDEOBLOGS</h4>

        <div className="cardXs">
          <img src={vblog01} alt="" />
          <div className="cardXs-content">
            <a href="https://karaandnate.com/about-us/">Kara and Nate</a>
            <p>
              A couple's travel adventures showcasing diverse cultures and
              inspiring exploration.
            </p>
          </div>
        </div>

        <div className="cardXs">
          <img src={vblog02} alt="" />
          <div className="cardXs-content">
            <a href="https://www.nowness.com/">Nowness</a>
            <p>
              Visually stunning short films that highlight contemporary
              culture, art, and social issues.
            </p>
          </div>
        </div>

        <div className="cardXs">
          <img src={vblog03} alt="" />
          <div className="cardXs-content">
            <a href="https://everydayastronaut.com/">
              Everyday Astronaut
            </a>
            <p>
              Breaks down complex space topics with humor, making science
              accessible.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <hr style={{ width: "1000px", textAlign: "left", marginLeft: "60px" }} />

  {/* Slider de noticias relacionadas */}
  <SliderText news={news} getCategoryColor={getCategoryColor} />
</div>



  );
}

export default Details;
