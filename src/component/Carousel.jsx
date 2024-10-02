import { useState, useEffect } from 'react'
import new1 from '../assets/new1.jpg'
import new2 from '../assets/new2.jpg'
import new3 from '../assets/new3.jpg'

function Carousel(props) {
  const { getCategoryColor,latestNews } = props
  const [imageIndex, setImageIndex] = useState(0)

  let images = [new1, new2, new3]
  // Esta función maneja el cambio automático a la siguiente imagen
  const filterImage= latestNews.slice(0, 4).map((eachNew)=>{
    console.log(eachNew.categories)
    return eachNew.image
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) =>
        prevIndex === filterImage.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [filterImage.length])

  return (
    <div className="container-carousel">
      <div className="box-carousel"style={{
        "--custom-color": getCategoryColor(latestNews[imageIndex].categories)}}>
      {latestNews.slice(0, 4).map((cada, i) => (
          <div className="image-container" key={i}>
            <img
              className="image-carousel"
              src={filterImage[imageIndex]}
              alt={`Imagen ${imageIndex}`}
            />
            <span className="image-tag" style={{
              "--custom-color": getCategoryColor(latestNews[imageIndex].categories)}}>{latestNews[imageIndex].categories}</span> {/* Tag fijo */}
          </div>
        ))}
        </div>
    </div>
  )
}
export default Carousel
