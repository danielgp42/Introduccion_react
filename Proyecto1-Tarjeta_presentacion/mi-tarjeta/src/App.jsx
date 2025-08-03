import React, { useState, useEffect, useMemo } from 'react';
import "./Compras.css";

function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [duracion, setDuracion] = useState('');

  const calcularTiempoTotal = useMemo(() => {
    console.log("Calculando tiempo total...");
    return tareas.reduce((total, tarea) => total + tarea.duracion, 0);
  }, [tareas]); // Solo se recalcula cuando cambian las tareas

  // Efecto secundario: Actualizar el título del documento cada vez que cambia el total
  useEffect(() => {
    // Usamos el valor directamente de totalTiempoCalculado
    document.title = `Total: ${calcularTiempoTotal} minutos`;
  }, [calcularTiempoTotal]); // Se ejecuta cada vez que el totalTiempoCalculado cambia

  // Función para agregar una nueva tarea
  const agregarTarea = (e) => {
    e.preventDefault(); // Previene la recarga de la página

    if (nuevaTarea.trim() !== '' && duracion.trim() !== '') {
      const nuevaTareaObj = {
        nombre: nuevaTarea,
        duracion: parseInt(duracion) // Asegúrate de que la duración sea un número
      };
      setTareas([...tareas, nuevaTareaObj]);
      setNuevaTarea('');
      setDuracion('');
    }
  };


  return (
    <div>
      <h1>Contador de Tareas</h1>
      <div>
        <input 
          type="text" 
          value={nuevaTarea} 
          onChange={(e) => setNuevaTarea(e.target.value)} 
          placeholder="Nombre de la tarea" 
        />
        <input 
          type="number" 
          value={duracion} 
          onChange={(e) => setDuracion(e.target.value)} 
          placeholder="Duración en minutos" 
        />
        <button onClick={agregarTarea}>Agregar tarea</button>
      </div>

      <h2>Tareas</h2>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea.nombre}: {tarea.duracion} minutos</li>
        ))}
      </ul>

      <h3>Total de tiempo: {calcularTiempoTotal} minutos</h3>
    </div>
  );
}

export default App;