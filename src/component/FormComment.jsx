import { useState, useEffect } from 'react'
import axios from 'axios'

function FormComment(props) {
  const {
    newId,
    setComment,
    likes,
    getRandomAvatar,
    getCategoryColor,
    categories,
  } = props
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState(null)
  const [avatar, setAvatar] = useState('')

  useEffect(() => {
    setAvatar(getRandomAvatar())
  }, [getRandomAvatar])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/comments`,
        {
          newId,
          author,
          comment: content,
          likes: likes,
          date: new Date(),
        }
      )

      setComment((prevComments) => [...prevComments, response.data])

      setAuthor('')
      setContent('')
    } catch (err) {
      console.error('Error al añadir comentario', err)
      setError('Hubo un problema al añadir el comentario.')
    }
  }
  return (
    <div className="all-form-comment">
      <div className="comment-avatar">
        <img src={avatar} alt="Avatar" />
      </div>
      <form
        className="form-comment-container"
        action=""
        onSubmit={handleSubmit}
      >
        <textarea
          className="textarea-comment"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          placeholder="Leave a comment!"
        />

        <div className="input-submit-container">
          <input
            className="input-comment"
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Name / Alias"
            required
          />

          <button
            className="submit-comment"
            type="submit"
            style={{
              backgroundColor: getCategoryColor(categories),
            }}
          >
            submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormComment
