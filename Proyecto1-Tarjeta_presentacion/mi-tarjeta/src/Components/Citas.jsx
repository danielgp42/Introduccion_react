import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Citas.css'; 

function Citas() {
  const citas = [
    { id: '1', paciente: 'Juan Pérez', doctor: 'Dra. Ana García', fecha: '2025-08-15', hora: '10:00 AM' },
    { id: '2', paciente: 'María López', doctor: 'Dr. Carlos Ruiz', fecha: '2025-08-15', hora: '11:30 AM' },
    { id: '3', paciente: 'Pedro Gómez', doctor: 'Dra. Sofía Martínez', fecha: '2025-08-16', hora: '09:00 AM' },
  ];

  return (
    <div className="citas-container">
      <h1 className="text-3xl font-semibold text-gray-700 mb-6">Próximas Citas Médicas</h1>
      {citas.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {citas.map(cita => (
            <li key={cita.id} className="citas-item">
              <h3 className="text-xl font-medium text-blue-700">{cita.paciente} con {cita.doctor}</h3>
              <p className="text-gray-600">Fecha: {cita.fecha} - Hora: {cita.hora}</p>
              {/* Enlace para ver los detalles de la cita, pasando el ID como parámetro de URL */}
              <Link to={`/cita/${cita.id}`} className="citas-detail-link">Ver Detalles</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No hay citas programadas.</p>
      )}
    </div>
  );
}

export default Citas;
