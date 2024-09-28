import new4 from '../assets/new4.jpg'

function CardM() {
  return (
    <div className="cardM-container">
      <div className="cardM-image">
        <img src={new4} alt="" />
      </div>
      <div className="cardM-category"><p>CULTURE</p></div>
      <div className="cardM-info">
        <div className='cardM-hover-header'>
        <h3>TITULAR</h3>
        <p>Este es un resumen del la noticia y todo es clicable</p>
        </div>
        <hr />
        <div className="cardM-hover-data">
          <div className='author'>
            <img src="" alt="" />
            <p>Núria Soley</p>
            
          </div>
          <p>25/07/2024</p>
        </div>
 0     </div>
    </div>
  )
}

export default CardM