import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación
import LoadingPage from '../pages/LoadingPage';

function Carousel(props) {
  const { getCategoryColor, news } = props;
  const [imageIndex, setImageIndex] = useState(1); // Empezamos en el índice 1 (primera imagen real)
  const [isTransitioning, setIsTransitioning] = useState(true);
  const carouselRef = useRef(null);

  // Filtrar imágenes y crear array extendido para el bucle infinito
  const filterImage = news.map((eachNew) => eachNew.image);

  const extendedImages = [
    filterImage[filterImage.length - 1], // Agregar la última imagen al principio
    ...filterImage,
    filterImage[0], // Agregar la primera imagen al final
  ];

  // Cambiar de imagen automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => prevIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Manejar el bucle infinito
  useEffect(() => {
    if (imageIndex === extendedImages.length - 1) {
      // Al llegar al duplicado final, saltamos al índice real sin transición
      setIsTransitioning(false); // Desactivamos la transición
      setImageIndex(1); // Saltamos al primer índice real
    }

    if (imageIndex === 0) {
      // Al llegar al duplicado del inicio, saltamos al índice real sin transición
      setIsTransitioning(false); // Desactivamos la transición
      setImageIndex(extendedImages.length - 2); // Saltamos al último índice real
    }

    // Reactivar la transición después del salto para los cambios normales
    if (imageIndex > 0 && imageIndex < extendedImages.length - 1) {
      setIsTransitioning(true); // Activamos la transición normal
    }
  }, [imageIndex, extendedImages.length]);

  if (!news || news.length < 4) {
    return <LoadingPage />;
  }

  // Calcular el índice real de las noticias
  const realNewsIndex = () => {
    if (imageIndex === 0) {
      return news.length - 1; // Último elemento real
    } else if (imageIndex === extendedImages.length - 1) {
      return 0; // Primer elemento real
    } else {
      return imageIndex - 1; // Ajuste por el duplicado al principio
    }
  };

  return (
    <div
      className="container-carousel"
      style={{
        '--custom-color': getCategoryColor(news[realNewsIndex()].categories),
      }}
    >
      <div
        className="box-carousel"
        ref={carouselRef}
        style={{
          transform: `translateX(-${imageIndex * 100}%)`,
          transition: isTransitioning ? 'transform 0.8s ease-in-out' : 'none',
        }}
      >
        {extendedImages.map((image, i) => (
          <div className="image-container" key={i}>
            <Link to={`/details/${news[realNewsIndex()].id}`}>
              <img className="image-carousel" src={image} alt={`Imagen ${i}`} />
            
            <div className="carousel-overlay">
              <h2 className="carousel-title">{news[realNewsIndex()].title}</h2>
            </div>
            </Link>
            <span
              className="image-tag"
              style={{
                '--custom-color': getCategoryColor(news[realNewsIndex()].categories),
              }}
            >
              {news[realNewsIndex()].categories}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
