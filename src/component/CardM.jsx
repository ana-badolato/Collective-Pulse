import new4 from '../assets/new4.jpg'

function CardM(props) {
  const {
    author,
    categories,
    content,
    date,
    image,
    title
  } = props
  

  return (
    <div className="cardM-container">
      <div className="cardM-image">
        <img src={image} alt="" />
      </div>
      <div className="cardM-category"><p>{categories}</p></div>
      <div className="cardM-info">
        <div className='cardM-hover-header'>
        <h3>{title}</h3>
        <p>{content.slice(0,200)}...</p>
        </div>
        <hr />
        <div className="cardM-hover-data">
          <div className='author'>
            <img src="" alt="" />
            <p>{author}</p>
            
          </div>
          <p>{date}</p>
        </div>
    </div>
    </div>
  )
}

export default CardM