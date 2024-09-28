import { useState, useEffect } from 'react'
import noticia1 from '../assets/noticia1.png'
import noticia2 from '../assets/noticia2.png'
import noticia3 from '../assets/noticia3.png'

function Carousel(props) {
  //const { rentals } = props
  const [imageIndex, setImageIndex] = useState(0)

  let images = [noticia1, noticia2, noticia3]
  // Esta función maneja el cambio automático a la siguiente imagen
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="container-carousel">
      <div className="box-carousel">
        {images.map((cada, i) => (
          <img
            className="image-carousel"
            key={i}
            src={images[imageIndex]}
            alt={`Imagen ${imageIndex}`}
          />
        ))}
      </div>
    </div>
  )
}
export default Carousel
