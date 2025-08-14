import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Citas from './Components/Citas';
import CitaDetalle from './Components/CitaDetalle';
import NotFound from './Components/NotFound';

function App() {
  return (
    // BrowserRouter envuelve toda la aplicación para habilitar el enrutamiento
    <BrowserRouter>
      {/* Barra de navegación con enlaces */}
      <nav className="p-4 bg-blue-600 text-white shadow-md rounded-b-lg">
        <ul className="flex justify-center space-x-6">
          <li>
            {/* Enlace a la página de inicio */}
            <Link to="/" className="text-white hover:text-blue-200 font-medium transition-colors duration-200">Inicio</Link>
          </li>
          <li>
            {/* Enlace a la página de lista de citas */}
            <Link to="/citas" className="text-white hover:text-blue-200 font-medium transition-colors duration-200">Ver Citas</Link>
          </li>
        </ul>
      </nav>

      {/* Definición de las rutas de la aplicación */}
      <main className="container mx-auto p-4 mt-8 bg-white shadow-lg rounded-lg">
        <Routes>
          {/* Ruta para la página de inicio */}
          <Route path="/" element={<Home />} />
          {/* Ruta para la lista de citas */}
          <Route path="/citas" element={<Citas />} />
          {/* Ruta para los detalles de una cita específica, con un parámetro dinámico 'id' */}
          <Route path="/cita/:id" element={<CitaDetalle />} />
          {/* Ruta de comodín para manejar URLs no coincidentes (página 404) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;