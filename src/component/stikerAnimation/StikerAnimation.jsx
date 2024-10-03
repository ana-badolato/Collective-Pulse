import { useEffect, useState } from 'react'
import catCulture from '../../assets/images/catCulture.png'
import catScience from '../../assets/images/catScience.png'
import catSustainability from '../../assets/images/catSustainability.png'
import catTravel from '../../assets/images/catTravel.png'
import catLifestyle from '../../assets/images/catLifestyle.png'
import catVivics from '../../assets/images/catCivics.png'
import './stiker.css'
function StikerAnimation(props) {
  const [animate, setAnimate] = useState(false)
  const { params, getCategoryColor } = props
  const categoryImages = {
    culture: catCulture,
    science: catScience,
    sustainability: catSustainability,
    travel: catTravel,
    lifestyle: catLifestyle,
    civics: catVivics,
  }
  const selectedImage = categoryImages[params.category]
  useEffect(() => {
    // Activar la animación después de un breve retraso
    const timer = setTimeout(() => {
      setAnimate(true)
    }, 500) // Ajusta el tiempo si es necesario

    return () => clearTimeout(timer) // Limpiar el temporizador al desmontar
  }, [])

  return (
    <div className="container">
      <div className={`sticker left ${animate ? 'animate' : ''}`}>
        <h1 className="title">
          <span style={{ color: getCategoryColor(params.category) }}>
            {params.category.toUpperCase()}
          </span>{' '}
          <br />
          PULSE <br />
        </h1>
      </div>
      <div className={`sticker right ${animate ? 'animate' : ''} `}>
        <img className="hero-stamp" src={selectedImage} alt="" />
      </div>
    </div>
  )
}

export default StikerAnimation
