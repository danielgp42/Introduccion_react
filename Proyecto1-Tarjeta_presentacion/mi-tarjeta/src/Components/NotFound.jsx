import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NotFound.css';

function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="text-6xl font-extrabold text-red-600 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Página No Encontrada</h2>
      <p className="text-lg text-gray-600 mb-6">Lo sentimos, la página que buscas no existe.</p>
      {/* Enlace para volver a la página de inicio */}
      <Link to="/" className="not-found-link">Volver al Inicio</Link>
    </div>
  );
}

export default NotFound;
