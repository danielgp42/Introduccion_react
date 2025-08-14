import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../Styles/CitaDetalle.css';

function CitaDetalle() {
  // Extrae el parámetro 'id' de la URL
  const { id } = useParams();

  // En una aplicación real, aquí buscarías los detalles de la cita usando el 'id'
  // Por ahora, usamos un objeto dummy para simular la información de la cita
  const cita = {
    '1': { paciente: 'Juan Pérez', doctor: 'Dra. Ana García', fecha: '2025-08-15', hora: '10:00 AM', motivo: 'Consulta general' },
    '2': { paciente: 'María López', doctor: 'Dr. Carlos Ruiz', fecha: '2025-08-15', hora: '11:30 AM', motivo: 'Revisión anual' },
    '3': { paciente: 'Pedro Gómez', doctor: 'Dra. Sofía Martínez', fecha: '2025-08-16', hora: '09:00 AM', motivo: 'Control de diabetes' },
  };

  const detalleCita = cita[id];

  return (
    <div className="cita-detalle-container">
      <h2 className="text-3xl font-semibold text-gray-700 mb-6">Detalles de la Cita</h2>
      {detalleCita ? (
        <div className="cita-detalle-card">
          <p className="text-gray-700 mb-2"><span className="font-medium">ID de la cita:</span> <span className="text-blue-600">{id}</span></p>
          <p className="text-gray-700 mb-2"><span className="font-medium">Paciente:</span> {detalleCita.paciente}</p>
          <p className="text-gray-700 mb-2"><span className="font-medium">Doctor:</span> {detalleCita.doctor}</p>
          <p className="text-gray-700 mb-2"><span className="font-medium">Fecha:</span> {detalleCita.fecha}</p>
          <p className="text-gray-700 mb-2"><span className="font-medium">Hora:</span> {detalleCita.hora}</p>
          <p className="text-gray-700 mb-4"><span className="font-medium">Motivo:</span> {detalleCita.motivo}</p>
          <Link to="/citas" className="cita-detalle-back-link">Volver a Citas</Link>
        </div>
      ) : (
        <p className="text-red-500">Cita no encontrada.</p>
      )}
    </div>
  );
}

export default CitaDetalle;
