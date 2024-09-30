import Carousel from "../component/Carousel";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "../component/SearchBar";
import CardM from "../component/CardM";
import LabelCategory from "../component/LabelCategory";
import ModalForm from "../component/ModalForm";

function Home(props) {
  const {setIsOpen,modalIsOpen }=props
  const [news, setNews] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get("http://localhost:5000/news");
    setNews(response.data);
  };

  const latestNews = news.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  console.log(latestNews);

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
        {latestNews.slice(0,4).map((eachNew) => {
          return <CardM {...eachNew} />;
        })}
      </div>
      {/* el slider iría aquí entre sección y sección */}
      <div className="section-header">
        <h2>TRENDING</h2>
        <hr />
      </div>
      <ModalForm setIsOpen={setIsOpen} modalIsOpen={modalIsOpen}/>
    </div>
  );
}

export default Home;
