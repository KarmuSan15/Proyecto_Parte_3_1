// src/components/myfavouriteborder/__docs__/example.tsx
import React from "react"; // Importamos React
import MyFavouriteBorder, { MyFavouriteBorderProps } from "../MyFavouriteBorder"; // Importamos el componente y sus props

// Creamos un componente Example al que le pasaremos las props definidas
// en nuestro componente MyFavouriteBorder. La idea es que llamemos al componente 
// Example con valores de las props para renderizar el componente <MyFavouriteBorder /> 
// de diferentes maneras, creando así una historia de renderizados de nuestro componente.
function Example(props: MyFavouriteBorderProps) { // Actualizamos el tipo de props a MyFavouriteBorderProps
  return (
    <MyFavouriteBorder // Renderizamos el componente MyFavouriteBorder
      color={props.color} // Color del icono
      disabled={props.disabled} // Estado del botón
      onClick={props.onClick} // Función al hacer clic
    />
  );
}

export default Example; // Exportamos el componente Example
