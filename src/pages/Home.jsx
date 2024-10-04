import Carousel from '../component/Carousel'
import axios from 'axios'
import { useEffect, useState } from 'react'
import SearchBar from '../component/SearchBar'
import CardM from '../component/CardM'
import CardS from '../component/CardS'
import LabelCategory from '../component/LabelCategory'
import ModalForm from '../component/ModalForm'
import { Link } from 'react-router-dom'
import SliderText from '../component/SliderText'
import Intro from '../component/Intro'

function Home(props) {
  const {
    setIsOpen,
    modalIsOpen,
    news,
    getData,
    isUpdate,
    incrementViews,
    getCategoryColor,
    searchValue,
    setSearchValue,
    handleSearchChange,
    getDataCategory,
    getRandomAvatar,
    handleCategoryClick,
  } = props

  const [introWatched, setIntroWatched] = useState(
    localStorage.getItem('introWatched')
  )

  const handleIntroEnd = () => {
    setIntroWatched(true)
    // Guardamos en localStorage para que la intro no se muestre la próxima vez
    localStorage.setItem('introWatched', 'true')
  }

  useEffect(() => {
    // Verificar si la intro ya se ha mostrado
    /*const introShown = localStorage.getItem('introShown')
    if (introShown) {
      setShowIntro(false) // Ocultar la intro si ya se ha mostrado antes
    }*/
    setSearchValue('') // Limpiar la barra de búsqueda
  }, [])

  useEffect(() => {
    if (!modalIsOpen) {
      getData()
    }
  }, [modalIsOpen])

  const latestNews = news.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const trendingNews = [...news].sort((a, b) => b.views - a.views).slice(0, 6)

  return (
    <div className="home">
      {/* Solo mostrar el contenido principal cuando la intro haya desaparecido */}
      {!introWatched ? (
        <Intro onVideoEnd={handleIntroEnd} />
      ) : (
        <>
          <div className="hero"></div>
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handleSearchChange={handleSearchChange}
          />
          <div className="title-container">
            <h1 className="title">
              <span>COLLECTIVE</span> <br />
              PULSE
            </h1>
          </div>

          <Carousel news={news} getCategoryColor={getCategoryColor} />
          <div className="section-header">
            <h2>LATEST</h2>
            <hr />
          </div>

          <div sytel={{ position: 'relative' }}>
            <div className="container-labels-colors">
              <LabelCategory
                handleCategoryClick={handleCategoryClick}
                getCategoryColor={getCategoryColor}
                news={news}
              />
            </div>

            <div className="cardM-section">
              {latestNews.slice(0, 4).map((eachNew) => {
                return (
                  <Link
                    className="link-cardM"
                    key={eachNew.id}
                    to={`/details/${eachNew.id}`}
                    onClick={() => {
                      incrementViews(eachNew.id),
                        handleCategoryClick(eachNew.categories)
                    }}
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
          <SliderText
            handleCategoryClick={handleCategoryClick}
            news={news}
            getCategoryColor={getCategoryColor}
          />
          <div className="section-header">
            <h2>TRENDING</h2>
            <hr />
          </div>
          <div className="cardS-section">
            {trendingNews.map((eachNew) => (
              <Link
                className="link-cards"
                to={`/details/${eachNew.id}`}
                onClick={() => {
                  handleCategoryClick(eachNew.categories),
                    incrementViews(eachNew.id)
                }}
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
        </>
      )}
    </div>
  )
}

export default Home
