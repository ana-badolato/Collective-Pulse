import new4 from '../assets/new4.jpg'

function CardM() {
  return (
    <div className="cardM-container">
      <div className="cardM-image">
        <img src={new4} alt="" />
      </div>
      <div className="cardM-info">
        <h3>TITULAR</h3>
        <p>Este es un resumen del la noticia y todo es clicable</p>
      </div>
    </div>
  )
}

export default CardM