import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners"; // Importa PulseLoader
import "../SliderText.css";
import arrowIcon from "../assets/icons/arrowIcon.png";

function SliderText({ news, getCategoryColor }) {
  const [visibleNews, setVisibleNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [animationDuration, setAnimationDuration] = useState("20s"); // Duración por defecto

  const sliderContentRef = useRef(null); // Ref para medir el ancho del contenido
  const sliderContainerRef = useRef(null); // Ref para medir el ancho del contenedor

  useEffect(() => {
    let interval;

    const updateVisibleNews = () => {
      if (news.length > 0) {
        const shuffledNews = [...news].sort(() => 0.5 - Math.random());
        // const selectedNews = shuffledNews.slice(0, 20);
        setVisibleNews(shuffledNews);
        setIsLoading(false);
      }
    };

    updateVisibleNews();

    interval = setInterval(() => {
      updateVisibleNews();
    }, 120000); // Cambiar cada 10 segundos

    return () => clearInterval(interval);
  }, [news]);

  useEffect(() => {
    if (sliderContentRef.current && sliderContainerRef.current) {
      const contentWidth = sliderContentRef.current.offsetWidth; // Ancho del contenido
      const containerWidth = sliderContainerRef.current.offsetWidth; // Ancho del contenedor

      // Cálculo dinámico de la duración de la animación basado en el ancho
      const duration = (contentWidth / containerWidth) * 20; // Ajusta 30 según la velocidad deseada

      setAnimationDuration(`${duration}s`); // Actualiza la duración de la animación
    }
  }, [visibleNews]);

  return (
    <div className="slider-text-container" ref={sliderContainerRef}>
      <div className="slider-text-header">
        <span>Breaking News</span>
      </div>

      <div className="slider">
        {isLoading ? (
          <div className="news-loading">
            <PulseLoader color="#fefdfb" loading={isLoading} size={15} />
          </div>
        ) : (
          <div
            className="slider-text-content"
            ref={sliderContentRef}
            style={{ "--animation-duration": animationDuration }}
          >
            {visibleNews.map((newsItem, index) => {
              const categoryColor = getCategoryColor(newsItem.categories);

              return (
                <Link
                  key={index}
                  to={`/details/${newsItem.id}`}
                  className="slider-text-link"
                >
                  <img className="arrow-icon" src={arrowIcon} alt="Arrow Icon" />
                  <p style={{ color: categoryColor }} className="slider-title">
                    {newsItem.title}
                  </p>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default SliderText;