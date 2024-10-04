import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import LoadingPage from '../pages/LoadingPage'

function Carousel(props) {
  const { getCategoryColor, news } = props
  const [imageIndex, setImageIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const carouselRef = useRef(null)

  const filterImage = news.map((eachNew) => eachNew.image)

  const extendedImages = [
    filterImage[filterImage.length - 1],
    ...filterImage,
    filterImage[0],
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => prevIndex + 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (imageIndex === extendedImages.length - 1) {
      setIsTransitioning(false)
      setImageIndex(1)
    }

    if (imageIndex === 0) {
      setIsTransitioning(false)
      setImageIndex(extendedImages.length - 2)
    }

    if (imageIndex > 0 && imageIndex < extendedImages.length - 1) {
      setIsTransitioning(true)
    }
  }, [imageIndex, extendedImages.length])

  if (!news || news.length < 4) {
    return <LoadingPage />
  }

  const realNewsIndex = () => {
    if (imageIndex === 0) {
      return news.length - 1
    } else if (imageIndex === extendedImages.length - 1) {
      return 0
    } else {
      return imageIndex - 1
    }
  }

  return (
    <div
      className="container-carousel"
      style={{
        '--custom-color': getCategoryColor(news[realNewsIndex()].categories),
      }}
    >
      <div
        className="box-carousel"
        ref={carouselRef}
        style={{
          transform: `translateX(-${imageIndex * 100}%)`,
          transition: isTransitioning ? 'transform 0.8s ease-in-out' : 'none',
        }}
      >
        {extendedImages.map((image, i) => (
          <div className="image-container" key={i}>
            <Link to={`/details/${news[realNewsIndex()].id}`}>
              <img className="image-carousel" src={image} alt={`Imagen ${i}`} />

              <div className="carousel-overlay">
                <h2 className="carousel-title">
                  {news[realNewsIndex()].title}
                </h2>
              </div>
            </Link>
            <span
              className="image-tag"
              style={{
                '--custom-color': getCategoryColor(
                  news[realNewsIndex()].categories
                ),
              }}
            >
              {news[realNewsIndex()].categories}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
