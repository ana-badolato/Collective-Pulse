import { Routes, Route } from "react-router";
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

  //console.log(news);
  return (
    <>
      <div className="main">
        <Navbar openModal={openModal}  />
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
