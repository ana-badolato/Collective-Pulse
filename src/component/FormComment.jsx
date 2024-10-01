import { useState } from "react";
import axios from "axios";

function FormComment(props) {
  const {
    newId,
    setComment
  }=props
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/comments`,
        {
          newId,
          author,
          comment: content,
          likes: 0,
        }
      );
      // Actualizar la lista de comentarios con el nuevo comentario
      setComment((prevComments) => [...prevComments, response.data]);

      // Limpiar el formulario
      setAuthor("");
      setContent("");
    } catch (err) {
      console.error("Error al añadir comentario", err);
      setError("Hubo un problema al añadir el comentario.");
    }
  };
  return (
    <div>
      <div>commentForm</div>
      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <div style={{ display: "flex" }}>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <button type="submit">submit</button>
        </div>
        
      </form>
    </div>
  );
}

export default FormComment;
