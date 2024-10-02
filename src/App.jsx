import { Routes, Route, useNavigate } from "react-router";
import Home from "./pages/Home";
import NewsCategory from "./pages/Categories";
import Details from "./pages/Details";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import Navbar from "./component/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import NewsForm from "./component/NewsForm";
import SearchResults from "./pages/SearchResults";

function App() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    getData();
  }, []);
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/news`
      )
      setNews(response.data)
    } catch (error) {
      console.log(error)
    }
  };

  const getDataCategory = async (category) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/news?categories=${category}`
      );
      setCategory(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const incrementViews = async (id) => {
    try {
      const response = await axios.patch(`${import.meta.env.VITE_SERVER_URL}/news/${id}`, {
        views:
          (await axios.get(`${import.meta.env.VITE_SERVER_URL}/news/${id}`)).data.views + 1,
      });
      console.log("Vistas incrementadas:", response.data.views);
    } catch (error) {
      console.error('Error al incrementar las vistas:', error)
    }
  }

  function openModal(isEditing) {
    // Si isEditing es true, estamos en modo edición
    if (isEditing) {
      setIsUpdate(true);  // Poner el estado en modo edición
    } else {
      setIsUpdate(false); // Poner el estado en modo creación
      // Limpiar el formulario aquí también si es necesario
    }
    setIsOpen(true); // Abrir el modal
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false)
  }

  const getCategoryColor = (category) => {
    let categoryColor = "";

    if (category === "civics") {
      categoryColor = "#27cbb8";
    } else if (category === "culture") {
      categoryColor = "#ea3f70";
    } else if (category === "science") {
      categoryColor = "#fe6316";
    } else if (category === "lifestyle") {
      categoryColor = "#8427ec";
    } else if (category === "sustainability") {
      categoryColor = "#80e65e";
    } else if (category === "travel") {
      categoryColor = "#fbfd57";
    }

    return categoryColor
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_SERVER_URL}/news/${id}`)

      getData()
      navigate('/')
    } catch (error) {
      console.log(error)
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

  return (
    <>
      <div className="main">
        <Navbar openModal={openModal} getCategoryColor={getCategoryColor} isUpdate={isUpdate}/>
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
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
