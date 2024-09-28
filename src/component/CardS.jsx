import naturaleza from '../assets/naturalez.png'
function CardS() {
  return (
    <div class="contenedor">
      <div class="imagen">
        <img src={naturaleza} alt="" />
      </div>
      <div class="info">
        <h3>TITULAR</h3>
        <p>Este es un resumen del la noticia y todo es clicable</p>
      </div>
    </div>
  )
}

export default CardS
