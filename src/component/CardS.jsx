import nature from '../assets/naturalez.png'
function CardS() {
  return (
    <div className="container">
      <div className="image">
        <img src={nature} alt="" />
      </div>
      <div className="info">
        <h3>TITULAR</h3>
        <p>Este es un resumen del la noticia y todo es clicable</p>
      </div>
    </div>
  )
}

export default CardS
