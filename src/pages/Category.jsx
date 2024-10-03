import { useEffect } from 'react'
import ModalForm from '../component/ModalForm'
import { useParams, Link, useNavigate } from 'react-router-dom'
import LabelCategory from '../component/LabelCategory'
import SliderText from '../component/SliderText'
import CardM from '../component/CardM'
import CardS from '../component/CardS'
import catCulture from '../assets/images/catCulture.png'
import catScience from '../assets/images/catScience.png'
import catSustainability from '../assets/images/catSustainability.png'
import catTravel from '../assets/images/catTravel.png'
import catLifestyle from '../assets/images/catLifestyle.png'
import catVivics from '../assets/images/catCivics.png'
import CardL from '../component/CardL'
import LoadingPage from './LoadingPage'
import NotContent from '../component/NotContent'

function Category(props) {
  const {
    getCategoryColor,
    news,
    getData,
    setIsOpen,
    isUpdate,
    modalIsOpen,
    getDataCategory,
    category,
    getRandomAvatar,
    incrementViews,
  } = props
  const navigate = useNavigate()
  const categoryImages = {
    culture: catCulture,
    science: catScience,
    sustainability: catSustainability,
    travel: catTravel,
    lifestyle: catLifestyle,
    civics: catVivics,
  }

  useEffect(() => {
    if (!modalIsOpen) {
      getData()
    }
  }, [modalIsOpen])

  const params = useParams()
  const selectedImage = categoryImages[params.category]
  useEffect(() => {
    if (params.category) {
      getDataCategory(params.category) // Pasa la categoría de params directamente
    }
  }, [params.category, news]) // Se ejecuta cuando cambia la categoría o las noticias

  const getRandomNew = (newsArray) => {
    const randomIndex = Math.floor(Math.random() * newsArray.length)
    return newsArray[randomIndex]
  }

  const latestNews = category
    .slice() // Hacer una copia del array
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4) // Limitar a las últimas 4 noticias

  const randomNew = latestNews.length > 0 ? getRandomNew(latestNews) : null

  // Obtener las noticias en tendencia dentro de la categoría (por vistas)
  const trendingNews = category
    .slice() // Hacer una copia del array
    .sort((a, b) => b.views - a.views)
    .slice(0, 6) // Limitar a las 6 noticias más vistas

  if (!category) {
    return <LoadingPage />
  } else if (category.length === 0) {
    return <NotContent />
  }
  return (
    <div className="category-container">
      <div className="hero-category">
        <img className="hero-stamp" src={selectedImage} alt="" />
      </div>

      <div className="title-container">
        <h1 className="title">
          <span style={{ color: getCategoryColor(params.category) }}>
            {params.category.toUpperCase()}
          </span>{' '}
          <br />
          PULSE <br />
        </h1>
      </div>
      {randomNew && (
        <div className="cardL-section">
          <Link to={`/details/${randomNew.id}`}>
            <img
              className="cardL-image"
              src={randomNew.image}
              alt={randomNew.title}
              style={{
                '--custom-color': getCategoryColor(randomNew.categories),
              }}
            />
            <div className="cardL-overlay">
              <h2 className="cardL-title">{randomNew.title}</h2>
            </div>
          </Link>
        </div>
      )}
      {/* <Carousel news={news} getCategoryColor={getCategoryColor} /> */}
      <div className="section-header">
        <h2>LATEST</h2>
        <hr />
      </div>

      <div>
        <div className="container-labels-colors">
          <LabelCategory getCategoryColor={getCategoryColor} news={news} />
        </div>

        <div className="cardM-section">
          {latestNews.slice(0, 4).map((eachNew) => {
            return (
              <Link
                className="link-cardM"
                key={eachNew.id}
                to={`/details/${eachNew.id}`}
                onClick={() => incrementViews(eachNew.id)}
              >
                <CardM
                  {...eachNew}
                  getData={getData}
                  getCategoryColor={getCategoryColor}
                  news={news}
                  getRandomAvatar={getRandomAvatar}
                />
              </Link>
            )
          })}
        </div>
      </div>
      <SliderText news={news} getCategoryColor={getCategoryColor} />
      <div className="section-header">
        <h2>TRENDING</h2>
        <hr />
      </div>
      <div className="cardS-section">
        {trendingNews.map((eachNew) => (
          <Link
            className="link-cards"
            to={`/details/${eachNew.id}`}
            onClick={() => incrementViews(eachNew.id)}
            key={eachNew.id}
          >
            <CardS
              getCategoryColor={getCategoryColor}
              news={news}
              {...eachNew}
              getRandomAvatar={getRandomAvatar}
            />
          </Link>
        ))}
      </div>

      <ModalForm
        getDataCategory={getDataCategory}
        getData={getData}
        setIsOpen={setIsOpen}
        modalIsOpen={modalIsOpen}
        isUpdate={isUpdate}
        news={news}
      />
    </div>
  )
}

export default Category
