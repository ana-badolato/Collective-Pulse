import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

// import "./App.css";
import "../FormStyles.css";
function NewsForm(props) {
  const { getData, isUpdate, news, getDataCategory } = props;
  const [newsData, setNewsData] = useState({
    category: "",
    title: "",
    author: "",
    content: "",
    image: "",
  });
  const [editNew, setEditNew] = useState(null);
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

    const newPulse = {
      ...newsData,
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
      } else {
        // Si es una nueva noticia, hacemos un POST request

        await axios.post(`${import.meta.env.VITE_SERVER_URL}/news`, newPulse);
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
        >
          <option>Select category</option>
          <option value="civics">Civics</option>
          <option value="culture">Culture</option>
          <option value="science">Scince</option>
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
          />
        </Form.Group>
        <Form.Group className="mb-3 form-block" controlId="exampleForm.ControlInput1">
          <Form.Label>Image <span>*</span></Form.Label>
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
          />
        </Form.Group>
        <p className="form-required">(<span>*</span>) All fields are required</p>
        <div className="form-submit-container">
        <button className="form-submit" type="submit">Submit</button></div>
      </Form>
    </div>
  );
}

export default NewsForm;
