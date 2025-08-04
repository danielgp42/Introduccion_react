import React, {useEffect} from "react";

function Planeta({ nombre }) {
  useEffect(() => {
    // Mensaje que se muestra cuando el componente Planeta se monta (aparece)
    console.log(`¡El planeta ${nombre} ha aparecido!`);

    // Función de limpieza que se ejecuta cuando el componente Planeta se desmonta (desaparece)
    return () => {
      console.log(`¡El planeta ${nombre} ha desaparecido!`);
    };
  }, [nombre]); // La dependencia 'nombre' asegura que el efecto se re-ejecute si el nombre del planeta cambia

  return <div>{nombre}</div>;
}

export default Planeta;