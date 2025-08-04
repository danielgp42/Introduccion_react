import React, { useState, useEffect, useMemo } from 'react';
import Planeta from "./Planeta";
import './Planetas.css';
function App() {
  //Estado de la Nave
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState("En órbita");
  const [planetasVisitados, setPlanetasVisitados] = useState([]);
  const [planetaCounter, setPlanetaCounter] = useState(1);
  const [mensajeAlerta, setMensajeAlerta] = useState('');

  useEffect(() => {
    console.log("¡El panel de control está listo!"); // Mensaje de montaje

    // Simulacion de vuelo
    const intervaloVuelo = setInterval(() => {
      setCombustible(prevCombustible => {
        if (prevCombustible > 0) {
          return prevCombustible - 1;
        }
        setEstadoNave("Sin combustible");
        return 0;
      });
      setDistancia(prevDistancia => prevDistancia + 10); // Aumenta la distancia en 10 km
    }, 1000); //Un segundo
    return () => {
      clearInterval(intervaloVuelo);
      console.log("El panel de control se ha apagado."); // Mensaje de desmontaje
    };
  }, []);

  useEffect(() => {
    if (combustible < 100 && combustible >= 0) {
      console.log(`¡Combustible actualizado! Combustible actual: ${combustible}`);
    }
    if (combustible === 0 && estadoNave !== "Sin combustible") {
      setEstadoNave("Sin combustible");
    }
  }, [combustible, estadoNave]); 

  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`;
  }, [estadoNave]); 

  // --- Función para Aterrizar ---
  const aterrizar = () => {
    if (combustible > 0 && estadoNave !== "Aterrizando") {
      setEstadoNave("Aterrizando"); // Cambia el estado de la nave a "Aterrizando"
      const nuevoPlaneta = `Planeta ${planetaCounter}`; // Genera un nombre para el nuevo planeta
      setPlanetasVisitados(prevPlanetas => [...prevPlanetas, nuevoPlaneta]);
      setPlanetaCounter(prevCounter => prevCounter + 1); 
      setMensajeAlerta(''); 
    } else if (combustible === 0) {
      setMensajeAlerta("¡No tienes suficiente combustible para aterrizar!");
    }
  };

  return (
    <div className='app-container'>
      <h1>Panel de Control de la Nave</h1>
      <div>
        <p>Distancia recorrida: {distancia} km </p>
        <p >Combustible: {combustible} unidades
          {combustible <= 10 && combustible > 0 && <span className="low-fuel"> (¡Bajo!)</span>}
          {combustible === 0 && <span className="out-of-fuel"> (¡Agotado!)</span>}
        </p>
        <p >{mensajeEstado}</p>
        
        <button
          onClick={aterrizar}
          disabled={combustible <= 0 || estadoNave === "Aterrizando" || estadoNave === "Sin combustible"}
        >
          Aterrizar
        </button>
      </div>

      {mensajeAlerta && (
        <div className="alert-message">
          {mensajeAlerta}
        </div>
      )}

      <h2>Planetas Visitados:</h2>
      <div>
        {planetasVisitados.length === 0 ? (
          <p className="no-planets-message">Aún no has visitado ningún planeta.</p>
        ) : (
          <ul>
            {planetasVisitados.map((planeta, index) => (
              <li key={index}>
                <Planeta nombre={planeta} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
