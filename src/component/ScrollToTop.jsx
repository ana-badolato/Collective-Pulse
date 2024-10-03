import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation(); // Obtiene la ubicación actual (ruta)

  useEffect(() => {
    window.scrollTo(0, 0); // Forzar scroll a la parte superior cuando cambie la ruta
  }, [pathname]); // Se ejecuta cada vez que cambia la ruta

  return null; // No necesita renderizar nada
}

export default ScrollToTop;