import { useState, useEffect } from 'react'
import new1 from '../assets/new1.jpg'
import new2 from '../assets/new2.jpg'
import new3 from '../assets/new3.jpg'

function Carousel(props) {
  //const { rentals } = props
  const [imageIndex, setImageIndex] = useState(0)

  let images = [new1, new2, new3]
  // Esta función maneja el cambio automático a la siguiente imagen
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

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
