function CardS(props) {
  const {
    author,
    categories,
    content,
    date,
    image,
    title,
    getCategoryColor,
    getRandomAvatar,
  } = props

  return (
    <div className="cardS-container">
      <div className="cardS-image">
        <img src={image} alt="" />
      </div>

      <div
        className="cardS-category"
        style={{ '--custom-color': getCategoryColor(categories) }}
      >
        <p>{categories}</p>
      </div>

      <div className="cardS-header">
        <h3 style={{ height: '48px' }}>{title}</h3>
        <p>{content.slice(0, 200)}...</p>
      </div>

      <hr />

      <div className="cardS-data">
        <div className="author">
          <img src={getRandomAvatar()} alt="" />
          <p>{author}</p>
        </div>
        <p>{new Date(date).toLocaleDateString('es-ES')}</p>
      </div>
    </div>
  )
}

export default CardS
