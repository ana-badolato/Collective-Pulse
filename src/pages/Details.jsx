import { useParams } from 'react-router';
import ModalForm from '../component/ModalForm';
import FormComment from '../component/FormComment';
import { useEffect, useState } from 'react';
import axios from 'axios';
import deleteIcon from '../assets/icons/deleteIcon.png';
import editIcon from '../assets/icons/editIcon.png';
import SliderText from '../component/SliderText';
import podcast01 from '../assets/images/podcast01.webp';
import podcast02 from '../assets/images/podcast02.jpg';
import podcast03 from '../assets/images/podcast03.png';
import vblog01 from '../assets/images/vblog01.webp';
import vblog02 from '../assets/images/vblog02.jpg';
import vblog03 from '../assets/images/vblog03.jpg';
import DeleteModal from '../component/DeleteModal';
import CardHorocopo from '../component/CardHorocopo'

function Details(props) {
  const params = useParams();
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
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
    
    // Agregamos el avatar aleatorio a cada comentario cuando se cargan
    const commentsWithAvatars = response.data.map(comment => ({
      ...comment,
      avatar: getRandomAvatar() // Asigna un avatar aleatorio al comentario
    }));
    
    setComment(commentsWithAvatars); // Guardamos los comentarios con avatares en el estado
  };
  
  const thisNew = news.find((eachNew) => eachNew.id === Number(params.id));

  if (!thisNew) {
    return <div>Loading or news not found</div>;
  }

  // Aquí está la lógica para manejar los likes
  const handleLike = async (commentId) => {
    try {
      // Encuentra el comentario específico que se va a actualizar
      const commentToLike = comment.find((comment) => comment.id === commentId);

      if (!commentToLike) {
        console.error('Comentario no encontrado');
        return;
      }

      // Envía una petición para incrementar los likes de este comentario
      const response = await axios.patch(
        `${import.meta.env.VITE_SERVER_URL}/comments/${commentId}`,
        {
          likes: commentToLike.likes + 1, // Sumar 1 al número actual de likes del comentario
        }
      );

      // Actualiza el estado de los comentarios localmente
      setComment((prevComments) =>
        prevComments.map((comment) =>
          comment.id === commentId
            ? { ...comment, likes: response.data.likes } // Actualiza solo el comentario que cambió
            : comment
        )
      );
    } catch (error) {
      console.error('Error al incrementar los likes:', error);
    }
  };

  const handleShow = () => setShow(true);

  return (
    <div
      key={thisNew.id}
      style={{ backgroundColor: 'var(--color-neutral-black)' }}
    >
      <div className="details-title">
        <h1 className="title-left">{thisNew.title}</h1>
        <div className="cardL-section">
          <img
            className="cardL-image"
            src={thisNew.image}
            alt={thisNew.title}
            style={{ '--custom-color': getCategoryColor(thisNew.categories) }}
          />
        </div>
      </div>

      {/* Contenedor principal */}
      <div className="container-content">
        {/* Contenido principal (párrafos de texto) */}
        <div className="box-content">
          <p style={{ color: '#ffffff' }}>{thisNew.content}</p>
          <p style={{ color: '#ffffff' }}>{thisNew.content}</p>
          <p style={{ color: '#ffffff' }}>{thisNew.content}</p>
          <p style={{ color: '#ffffff' }}>{thisNew.content}</p>

          {/* Sección inferior del artículo (autor y acciones) */}
          <div className="bottom-section-article">
            <div className="author-date-article">
              <div className="data-author-article">
                <img src={getRandomAvatar()} alt="" />
                <div className="author-article">
                  <p>{thisNew.author}</p>
                  <p> | </p>
                  <p className="date-article">
                    {new Date(thisNew.date).toLocaleDateString('es-ES')}
                  </p>
                </div>
              </div>
            </div>
            <div className="actions-article">
              <button className="actions-article-button" onClick={handleShow}>
                <img src={deleteIcon} alt="" />
                <p>Delete</p>
              </button>

              <button onClick={openModal} className="actions-article-button">
                <img src={editIcon} alt="" />
                <p>Edit</p>
              </button>
            </div>
          </div>

          <DeleteModal
            params={params}
            handleDelete={handleDelete}
            show={show}
            setShow={setShow}
          />
          <hr className="content-comments-hr" />

          {/* Sección de comentarios */}
          <FormComment
            likes={0} // Este es el valor inicial de los likes al agregar un nuevo comentario
            newId={thisNew.id}
            setComment={setComment}
            getRandomAvatar={getRandomAvatar}
            getCategoryColor={getCategoryColor}
            categories={thisNew.categories}
          />

          <p className="number-comments">
            <span
              style={{
                color: getCategoryColor(thisNew.categories),
              }}
            >
              {comment.length}
            </span>{' '}
            COMMENTS
          </p>
          <hr
            style={{
              borderTop: `0.5px solid ${getCategoryColor(thisNew.categories)}`,
            }}
          />
          <div className="comment-container">
            {comment
              .slice()
              .reverse()
              .map((eachComment) => (
                <div className="complete-comment" key={eachComment.id}>
                  <div className="block-author-comment">
                    <div className="img-author-comment">
                      <div>
                        <img src={eachComment.avatar}  alt="avatar" />
                      </div>
                      <p>{eachComment.author}</p>
                    </div>
                    <p className="date-comment">
                      {new Date(eachComment.date).toLocaleDateString('es-ES')}
                    </p>
                  </div>
                  <p className="comment-content">{eachComment.comment}</p>
                  <div className="likes-comment">
                    <p
                      style={{
                        color: '#fefdfb',
                        
                        fontSize: '16px',
                      }}
                    >
                      {eachComment.likes}
                    </p>
                    <button
                      className="button-like"
                      style={{
                        backgroundColor: getCategoryColor(thisNew.categories),
                        textolor: '#f1f1f1',
                        padding: '8px 24px',
                        border: 'none',
                        fontFamily: "'Oswald', sans-serif",
                        textTransform: 'uppercase',
                      }}
                      onClick={() => handleLike(eachComment.id)}
                    >
                      like
                    </button>
                  </div>
                  <hr className="content-comments-hr" />
                </div>
              ))}
          </div>
        </div>

        {/* Sección derecha (podcasts y videoblogs) */}
        <div className="right-section">
          <div className="cardXs-container">
            <h4
              className="cardXs-h4"
              style={{
                backgroundColor: getCategoryColor(thisNew.categories),
              }}
            >
              PODCASTS
            </h4>

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
            <h4
              className="cardXs-h4"
              style={{
                backgroundColor: getCategoryColor(thisNew.categories),
              }}
            >
              VIDEOBLOGS
            </h4>

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
                <a href="https://everydayastronaut.com/">Everyday Astronaut</a>
                <p>
                  Breaks down complex space topics with humor, making science
                  accessible.
                </p>
              </div>
            </div>
            <CardHorocopo />
            <CardHorocopo />
            <CardHorocopo />
            <CardHorocopo />
          </div>
        </div>
      </div>

      {/* Slider de noticias relacionadas */}
      <div style={{ marginTop: '96px' }}>
        <SliderText news={news} getCategoryColor={getCategoryColor} />
      </div>
      <ModalForm
        getDataCategory={getDataCategory}
        getData={getData}
        setIsOpen={setIsOpen}
        modalIsOpen={modalIsOpen}
        isUpdate={isUpdate}
        news={news}
      />
    </div>
  );
}

export default Details;
