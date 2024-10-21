import React from "react"; // Importamos React
// Importamos nuestro componente MyButton y sus props
import MyButton, { MyButtonProps } from "../mybutton"; // Cambiamos a MyButton

// Creamos un componente Example al cual le pasaremos las props definidas
// en nuestro componente MyButton. Luego renderizamos nuestro componente 
// <MyButton /> con esas props. La idea es que llamemos al componente Example 
// con valores de las props para renderizar el componente <MyButton /> de diferentes 
// maneras, es decir, crear una historia de renderizados de nuestro componente.
function Example(props: MyButtonProps) { // Actualizamos el tipo de props a MyButtonProps
  return (
    <MyButton // Cambiamos el componente a MyButton
      text={props.text} // Texto del botón
      bgcolor={props.bgcolor} // Color de fondo
      txtcolor={props.txtcolor} // Color del texto
      borderColor={props.borderColor} // Color del borde
      borderWidth={props.borderWidth} // Ancho del borde
      size={props.size} // Tamaño del botón
      hoverTxtColor={props.hoverTxtColor} // Color del texto al hacer hover
      hoverBgColor={props.hoverBgColor} // Color de fondo al hacer hover
      disabled={props.disabled} // Estado del botón
      onClick={props.onClick} // Función al hacer clic
    />
  );
}

export default Example; // Exportamos el componente Example
