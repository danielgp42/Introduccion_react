import React from 'react';
import '../Styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">¡Bienvenido a tu Gestor de Citas Médicas!</h1>
      <p className="text-lg text-gray-600">Tu plataforma integral para una gestión de citas eficiente.</p>
      <p className="text-md text-gray-500 mt-2">
        Navega usando los enlaces de arriba para ver tus citas o para más funcionalidades.
      </p>
    </div>
  );
}

export default Home;
