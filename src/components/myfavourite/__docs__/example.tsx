import React from "react"; // Importamos React
// Importamos nuestro componente MyFavourite y sus props
import MyFavourite, { MyFavouriteProps } from "../MyFavourite"; // Asegúrate de que la ruta de importación sea correcta

// Creamos un componente Example al cual le pasaremos las props definidas
// en nuestro componente MyFavourite. Luego renderizamos nuestro componente 
// <MyFavourite /> con esas props. La idea es que llamemos al componente Example 
// con valores de las props para renderizar el componente <MyFavourite /> de diferentes 
// maneras, es decir, crear una historia de renderizados de nuestro componente.
function Example(props: MyFavouriteProps) { // Actualizamos el tipo de props a MyFavouriteProps
  return (
    <MyFavourite // Cambiamos el componente a MyFavourite
      color={props.color} // Color del ícono
      disabled={props.disabled} // Estado del ícono
      onClick={props.onClick} // Función al hacer clic
    />
  );
}

export default Example; // Exportamos el componente Example
