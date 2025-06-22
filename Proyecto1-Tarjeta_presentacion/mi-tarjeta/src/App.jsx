import Tarjeta from './Tarjeta';

function App() {
  return (
    <div>
      <h1>Tarjeta de Presentación</h1>
      {/* Renderizamos el componente Tarjeta */}
      <Tarjeta 
        nombre={"Carlos"}
        profesion={"Ingeniero en telecomunicaciones"}
      />
      <Tarjeta 
        nombre={"Daniel"}
        profesion={"Ingeniero aeroespacial"}
      />
      <Tarjeta 
        nombre={"Alexis"}
        profesion={"Ingeniero civil"}
      />
    </div>
  );
}

export default App;