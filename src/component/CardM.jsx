function CardM(props) {
  const {
    id,
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
    <>
      <div className="cardM-container">
        <div className="cardM-image">
          <img src={image} alt="" />
        </div>
        <div className="cardM-info">
          <div
            className="cardM-category"
            style={{ '--custom-color': getCategoryColor(categories) }}
          >
            <p>{categories}</p>
          </div>
          <div className="cardM-hover-header">
            <h3>{title}</h3>
            <p>{content.slice(0, 190)}...</p>
          </div>
          <hr className="cardM-hr" />
          <div className="cardM-hover-data">
            <div className="author">
              <img src={getRandomAvatar()} alt="" />
              <p>{author}</p>
            </div>
            <p>{new Date(date).toLocaleDateString('es-ES')}</p>
          </div>
        </div>
      </div>
      <h2 className="titlecardM">{title}</h2>
    </>
  )
}

export default CardM
