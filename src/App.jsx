import { Routes, Route, useNavigate } from 'react-router'
import Home from './pages/Home'
import Details from './pages/Details'
import Category from './pages/Category'
import NotFound from './pages/NotFound'
import Navbar from './component/Navbar'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import SearchResults from './pages/SearchResults'
import Footer from './component/Footer'
import ScrollToTop from './component/ScrollToTop'
import avatar01Icon from './assets/icons/avatar01Icon.png'
import avatar02Icon from './assets/icons/avatar02Icon.png'
import avatar03Icon from './assets/icons/avatar03Icon.png'
import avatar04Icon from './assets/icons/avatar04Icon.png'
import avatar05Icon from './assets/icons/avatar05Icon.png'
import avatar06Icon from './assets/icons/avatar06Icon.png'
//Avatar Author......................................................................
const avatarImages = [
  avatar01Icon,
  avatar02Icon,
  avatar03Icon,
  avatar04Icon,
  avatar05Icon,
  avatar06Icon,
]

function getRandomAvatar() {
  const randomIndex = Math.floor(Math.random() * avatarImages.length)
  return avatarImages[randomIndex]
}

function App() {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [news, setNews] = useState([])
  const [category, setCategory] = useState([])
  const [isUpdate, setIsUpdate] = useState(false)
  const [activeCategory, setActiveCategory] = useState('')

  useEffect(() => {
    getData()
  }, [])
  const navigate = useNavigate()
  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/news`
      )
      setNews(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const getDataCategory = async (category) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/news?categories=${category}`
      )
      setCategory(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const incrementViews = async (id) => {
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_SERVER_URL}/news/${id}`,
        {
          views:
            (
              await axios.get(`${import.meta.env.VITE_SERVER_URL}/news/${id}`)
            ).data.views + 1,
        }
      )
    } catch (error) {
      console.error('Error al incrementar las vistas:', error)
    }
  }

  function openModal(isEditing) {
    if (isEditing) {
      setIsUpdate(true)
    } else {
      setIsUpdate(false)
    }
    setIsOpen(true)
  }

  const getCategoryColor = (category) => {
    let categoryColor = ''

    if (category === 'civics') {
      categoryColor = '#27cbb8'
    } else if (category === 'culture') {
      categoryColor = '#ea3f70'
    } else if (category === 'science') {
      categoryColor = '#fe6316'
    } else if (category === 'lifestyle') {
      categoryColor = '#8427ec'
    } else if (category === 'sustainability') {
      categoryColor = '#80e65e'
    } else if (category === 'travel') {
      categoryColor = '#fbfd57'
    }

    return categoryColor
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_SERVER_URL}/news/${id}`)
      await getData()
      navigate('/')
    } catch (error) {
      console.error('Error deleting the news:', error)
    }
  }
  const [searchValue, setSearchValue] = useState('')
  const [filteredNews, setFilteredNews] = useState(news)
  const handleSearchChange = () => {
    const filterSearch = news.filter((eachNew) => {
      return eachNew.title.toLowerCase().includes(searchValue.toLowerCase())
    })

    setFilteredNews(filterSearch)
    navigate('/searchresults')
  }

  const handleCategoryClick = (selectedCategory) => {
    setActiveCategory(selectedCategory)
  }

  return (
    <>
      <div className="main">
        <ScrollToTop />
        <Navbar
          openModal={openModal}
          getCategoryColor={getCategoryColor}
          isUpdate={isUpdate}
          handleCategoryClick={handleCategoryClick}
          activeCategory={activeCategory}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                news={news}
                getData={getData}
                setIsOpen={setIsOpen}
                modalIsOpen={modalIsOpen}
                isUpdate={false}
                incrementViews={incrementViews}
                getCategoryColor={getCategoryColor}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                handleSearchChange={handleSearchChange}
                getDataCategory={getDataCategory}
                openModal={openModal}
                getRandomAvatar={getRandomAvatar}
                handleCategoryClick={handleCategoryClick}
              />
            }
          />

          <Route
            path="/details/:id"
            element={
              <Details
                news={news}
                getData={getData}
                setIsOpen={setIsOpen}
                modalIsOpen={modalIsOpen}
                isUpdate={isUpdate}
                handleDelete={handleDelete}
                getDataCategory={getDataCategory}
                openModal={openModal}
                getCategoryColor={getCategoryColor}
                getRandomAvatar={getRandomAvatar}
              />
            }
          />
          <Route
            path="/category/:category"
            element={
              <Category
                getCategoryColor={getCategoryColor}
                news={news}
                getData={getData}
                setIsOpen={setIsOpen}
                modalIsOpen={modalIsOpen}
                isUpdate={false}
                category={category}
                getDataCategory={getDataCategory}
                openModal={openModal}
                getRandomAvatar={getRandomAvatar}
                incrementViews={incrementViews}
                handleCategoryClick={handleCategoryClick}
              />
            }
          />
          <Route
            path="/searchresults"
            element={
              <SearchResults
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                handleSearchChange={handleSearchChange}
                getCategoryColor={getCategoryColor}
                filteredNews={filteredNews}
                getRandomAvatar={getRandomAvatar}
                setIsOpen={setIsOpen}
                modalIsOpen={modalIsOpen}
                isUpdate={false}
                getDataCategory={getDataCategory}
                getData={getData}
                news={news}
              />
            }
          />

          <Route
            path="*"
            element={<NotFound />}
            getDataCategory={getDataCategory}
            getData={getData}
            setIsOpen={setIsOpen}
            modalIsOpen={modalIsOpen}
            isUpdate={isUpdate}
            news={news}
          />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
