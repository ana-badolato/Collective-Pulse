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

function App() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [news, setNews] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const navigate = useNavigate();
  const getData = async () => {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/news`);
    setNews(response.data);
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const allCategories = ["civics", "culture", "science", "lifestyle", "sustainability", "travel"];



  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_SERVER_URL}/news/${id}`);
      //setNews(response.data)
      // const response = await axios.get(${import.meta.env.VITE_SERVER_URL})
      // setNews((prevNews) => prevNews.filter((item) => item.id !== id));
      getData();
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };

  //console.log(news);
  return (
    <>
      <div className="main">
        <Navbar openModal={openModal} allCategories={allCategories} />
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
              />
            }
          />
          <Route path="/categories" element={<NewsCategory />} />
          <Route
            path="/details/:id"
            element={
              <Details
                news={news}
                getData={getData}
                setIsOpen={setIsOpen}
                modalIsOpen={modalIsOpen}
                isUpdate={true}
                handleDelete={handleDelete}
              />
            }
          />
          <Route path="/category" element={<Category />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
