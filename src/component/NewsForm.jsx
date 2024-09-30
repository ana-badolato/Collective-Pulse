import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import axios from "axios";
function NewsForm(props) {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleTitle = (e) => setTitle(e.target.value);
  const handleContent = (e) => setContent(e.target.value);
  const handleAuthor = (e) => setAuthor(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);

  // useEffect(()=>{
  //   const response = axios.put("http://localhost:5000/news", newPulse)
  //   setNewPulse(newPulse)
  // }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPulse = {
      category: category,
      title: title,
      image: image,
      content: content,
      author: author,
      date: new Date(),
      views: 0,
    };
    props.getData()
    try {
      const response = await axios.post("http://localhost:5000/news", newPulse);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <Form onSubmit={handleSubmit}>
        <Form.Select
          aria-label="Select category"
          name="category"
          onChange={handleCategory}
        >
          <option>Select category</option>
          <option value="civics">Civics</option>
          <option value="culture">Culture</option>
          <option value="science">Science</option>
          <option value="lifestyle">Lifestyle</option>
          <option value="sustainability">Sustainability</option>
          <option value="travel">Travel</option>
        </Form.Select>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            name="author"
            value={author}
            placeholder="author"
            onChange={handleAuthor}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={title}
            placeholder="title"
            onChange={handleTitle}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            name="image"
            value={image}
            placeholder="image"
            onChange={handleImage}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            name="content"
            value={content}
            rows={3}
            onChange={handleContent}
          />
        </Form.Group>

        <button type="submit">Submit</button>  
      </Form>
    </div>
  );
}

export default NewsForm;
