import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom"; 
import placeholderImg from "../assets/images/placeholder.jpg"

// import "./App.css";
import "../FormStyles.css";
function NewsForm(props) {
  const { getData, isUpdate, news, getDataCategory, closeModal } = props;
  const [newsData, setNewsData] = useState({
    categories: "",
    title: "",
    author: "",
    content: "",
    image: "",
  });
  const [editNew, setEditNew] = useState(null);
  const navigate = useNavigate(); // Usa useNavigate para la redirección
  const params = useParams();
  useEffect(() => {
    // Si estamos en modo edición, cargamos la noticia existente
    if (isUpdate) {
      const existingNews = news.find(
        (eachNew) => eachNew.id === Number(params.id)
      );
      if (existingNews) {
        setEditNew(existingNews);
        setNewsData(existingNews); // Sincronizamos el estado para edición
      }
    }
  }, [isUpdate, news, params.id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewsData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const imageToUse = newsData.image || placeholderImg;
    const newPulse = {
      ...newsData,
      image: imageToUse,
      date: new Date(),
      views: editNew ? editNew.views : 0,
    };

    getData();
    getDataCategory();

    try {
      if (isUpdate) {
        // Si es una actualización, hacemos un PUT request
        await axios.put(
          `${import.meta.env.VITE_SERVER_URL}/news/${params.id}`,
          newPulse
        );
        await getData();  // Asegurarse de que los datos se actualizan en el estado

        // Cerrar el modal y redirigir a la página actualizada de detalles
        closeModal();
        navigate(`/details/${params.id}`);  // Redirigir a la misma página para mostrar la noticia actualizada
      } else {
        // Si es una nueva noticia, hacemos un POST request

        const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/news`, newPulse);
        
            // Obtenemos el ID de la noticia recién creada para redirigir
            const newNewsId = response.data.id;

               // Actualizar datos antes de redirigir
      await getData(); // Espera que los datos se actualicen
            // Redirigir al usuario a la página de detalles de la noticia creada
            navigate(`/details/${newNewsId}`);
            closeModal();
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div  className="form-container">
      <Form onSubmit={handleSubmit}>
      <div className="form-row">
      <Form.Group className="mb-3 form-block" controlId="exampleForm.ControlInput1">
            <Form.Label>Category <span>*</span></Form.Label>
            <Form.Select
              aria-label="Select category"
              name="categories"
              value={newsData.categories} // Asegúrate de que este valor esté sincronizado
              onChange={handleChange}
              className="input-small"
              required
            >
              <option value="">Select category</option> {/* Evitar que el valor vacío sea válido */}
              <option value="civics">Civics</option>
              <option value="culture">Culture</option>
              <option value="science">Science</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="sustainability">Sustainability</option>
              <option value="travel">Travel</option>
            </Form.Select>
          </Form.Group>
        <Form.Group className="mb-3 form-block" controlId="exampleForm.ControlInput1">
          <Form.Label>Author <span>*</span></Form.Label>
          <Form.Control
            
            type="text"
            name="author"
            value={newsData.author}
            placeholder="author"
            onChange={handleChange}
            className="input-small"
            required
          />
        </Form.Group>
        </div>
        <Form.Group className="mb-3 form-block" controlId="exampleForm.ControlInput1">
          <Form.Label>Title <span>*</span></Form.Label>
          <Form.Control
          className="input-large"
            type="text"
            name="title"
            value={newsData.title}
            placeholder="Give your article a catchy title!"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 form-block" controlId="exampleForm.ControlInput1">
          <Form.Label>Image</Form.Label>
          <Form.Control
          className="input-large"
            type="text"
            name="image"
            value={newsData.image}
            placeholder="Drop a link to an awesome image here"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 form-block" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Content <span>*</span></Form.Label>
          <Form.Control
          className="textarea-large"
            as="textarea"
            name="content"
            value={newsData.content}
            rows={10}
            onChange={handleChange}
            placeholder="Start writing something amazing..."
            required
          />
        </Form.Group>
        <p className="form-required">(<span>*</span>) Required fields</p>
        <div className="form-submit-container">
        <button className="form-submit" type="submit">Submit</button></div>
      </Form>
    </div>
  );
}

export default NewsForm;
