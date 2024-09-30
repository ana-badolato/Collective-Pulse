import Carousel from "../component/Carousel";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "../component/SearchBar";
import CardM from "../component/CardM";
import LabelCategory from "../component/LabelCategory";
import ModalForm from "../component/ModalForm";
import { Link } from "react-router-dom";

function Home(props) {
  const { setIsOpen, modalIsOpen, news, getData, isUpdate } = props;

  const latestNews = news.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  //console.log(latestNews);

  return (
    <div className="home">
      <div className="hero"></div>
      <SearchBar />
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
            <Link className="cardM-section" to={`/details/${eachNew.id}`}>
              <CardM {...eachNew} getData={getData} />;
            </Link>
          );
        })}
      </div>
      {/* el slider iría aquí entre sección y sección */}
      <div className="section-header">
        <h2>TRENDING</h2>
        <hr />
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
