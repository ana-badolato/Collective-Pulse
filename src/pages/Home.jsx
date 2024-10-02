import Carousel from "../component/Carousel";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "../component/SearchBar";
import CardM from "../component/CardM";
import LabelCategory from "../component/LabelCategory";
import ModalForm from "../component/ModalForm";
import { Link } from "react-router-dom";

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
  } = props;

  useEffect(() => {
    if (!modalIsOpen) {
      getData();
    }
  }, [modalIsOpen]);

  const latestNews = news.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const trendingNews = [...news].sort((a, b) => b.views - a.views).slice(0, 6);

  return (
    <div className="home">
      <div className="hero"></div>
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearchChange={handleSearchChange}
      />
      <h1 className="title">
        <span>COLLECTIVE</span> <br />
        PULSE
      </h1>
      <Carousel />
      <div className="section-header">
        <h2>LATEST</h2>
        <hr />
      </div>
      <div className="cardM-section">
        {latestNews.slice(0, 4).map((eachNew) => {
          return (
            <Link
              className="cardM-section"
              key={eachNew.id}
              to={`/details/${eachNew.id}`}
              onClick={() => incrementViews(eachNew.id)}
            >
              <CardM
                {...eachNew}
                getData={getData}
                getCategoryColor={getCategoryColor}
                news={news}
              />
              ;
            </Link>
          );
        })}
      </div>

      <div className="section-header">
        <h2>TRENDING</h2>
        <hr />
      </div>
      <div className="cardM-section">
        {trendingNews.map((eachNew) => (
          <Link
            className="cardM-section"
            to={`/details/${eachNew.id}`}
            onClick={() => incrementViews(eachNew.id)}
            key={eachNew.id}
          >
            <CardM
              getCategoryColor={getCategoryColor}
              news={news}
              {...eachNew}
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
  );
}

export default Home;
