import Carousel from "../component/Carousel";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "../component/SearchBar";
import CardM from "../component/CardM";
import LabelCategory from "../component/LabelCategory";
import ModalForm from "../component/ModalForm";
import { Link } from "react-router-dom";

function Home(props) {
  const { setIsOpen, modalIsOpen, news, getData, isUpdate, incrementViews ,getCategoryColor, searchValue, setSearchValue, handleSearchChange } =
    props;

    useEffect(() => {

      getData();
    }, []); 

  const latestNews = news.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });


  

  //console.log(latestNews);
 // Filtramos las 6 noticias con más vistas para la sección "Trending"
 const trendingNews = [...news] // Clonamos el array para evitar modificar el original
 .sort((a, b) => b.views - a.views) // Ordenamos por vistas, de mayor a menor
 .slice(0, 6); // Tomamos las primeras 6 noticias más vistas

 //console.log('Trending News Order by Views:', trendingNews);
 //console.log(getCategoryColor("science"), "color")
  return (
    <div className="home">
      <div className="hero"></div>
      <SearchBar searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearchChange={handleSearchChange}/>
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
        {/* <LabelCategory /> */}
        {latestNews.slice(0, 4).map((eachNew) => {
          return (
            <Link
              className="cardM-section"
              key={eachNew.id}
              to={`/details/${eachNew.id}`}
              onClick={() => incrementViews(eachNew.id)}
            >
              <CardM {...eachNew} getData={getData} getCategoryColor={getCategoryColor} news={news}/>;
            </Link>
          );
        })}
      </div>
      {/* el slider iría aquí entre sección y sección */}
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
            <CardM getCategoryColor={getCategoryColor} news={news} {...eachNew} />
          </Link>
        ))}
      </div>
      <ModalForm
        getData={getData}
        setIsOpen={setIsOpen}
        modalIsOpen={modalIsOpen}
        isUpdate={isUpdate}
      />
    </div>
  );
}

export default Home;
