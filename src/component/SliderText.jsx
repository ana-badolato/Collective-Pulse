import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners"; // Importa PulseLoader
import "../SliderText.css";
import arrowIcon from "../assets/icons/arrowIcon.png";

function SliderText({ news, getCategoryColor }) {
  const [visibleNews, setVisibleNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar la carga

  useEffect(() => {
    let interval;

    const updateVisibleNews = () => {
      if (news.length > 0) {
        const shuffledNews = [...news].sort(() => 0.5 - Math.random());
        const selectedNews = shuffledNews.slice(0, 8); // Ajusta el número de noticias visibles
        setVisibleNews(selectedNews);
        setIsLoading(false); // Oculta el spinner cuando las noticias están cargadas
      }
    };

    // Llamar inmediatamente para cargar el primer conjunto de noticias
    updateVisibleNews();

    // Cambiar noticias cada 60 segundos
    interval = setInterval(() => {
      updateVisibleNews();
    }, 60000); // 60 segundos

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, [news]);

  return (
    <div className="slider-text-container">
      <div className="slider-text-header">
        <span>Breaking News</span>
      </div>

      <div className="slider">
        {isLoading ? (
          // Mostrar PulseLoader dentro del contenedor de noticias mientras cargan
          <div className="news-loading">
            <PulseLoader color="#fefdfb" loading={isLoading} size={15} />
          </div>
        ) : (
          <div className="slider-text-content">
            {visibleNews.map((newsItem, index) => {
              const categoryColor = getCategoryColor(newsItem.categories);

              return (
                <Link
                  key={index} // Usamos el índice como key ya que estamos rotando noticias
                  to={`/details/${newsItem.id}`}
                  className="slider-text-link"
                >
                  <img className="arrow-icon" src={arrowIcon} alt="Arrow Icon" />
                  <p
                    style={{ color: categoryColor }}
                    className="slider-title"
                  >
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
