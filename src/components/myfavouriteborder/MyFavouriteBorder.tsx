// src/components/myfavouriteborder/MyFavouriteBorder.tsx
import React from "react"; // Importamos React para poder crear componentes
import IconButton from "@mui/material/IconButton"; // Importamos IconButton de MUI para el botón
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"; // Importamos el icono de favorito con borde de MUI
import { MouseEventHandler } from 'react'; // Importamos el tipo MouseEventHandler de React

// Declaro la interface del componente MyFavouriteBorder.
export interface MyFavouriteBorderProps {
  color: string; // Prop 'color' de tipo string: color del icono (requerido)
  disabled?: boolean; // Prop 'disabled': indica si el botón está deshabilitado (opcional)
  onClick?: MouseEventHandler<HTMLButtonElement>; // Prop 'onClick': función que se ejecuta al hacer clic (opcional)
}

// Definimos el componente MyFavouriteBorder utilizando las propiedades especificadas
const MyFavouriteBorder: React.FC<MyFavouriteBorderProps> = ({ color, disabled = false, onClick }) => {
  return (
    <IconButton onClick={onClick} disabled={disabled}> {/* Renderizamos IconButton con las propiedades onClick y disabled */}
      <FavoriteBorderIcon style={{ color }} /> {/* Renderizamos FavoriteBorderIcon con el color especificado */}
    </IconButton>
  );
};

// Exportamos el componente MyFavouriteBorder para que pueda ser utilizado en otras partes de la aplicación
export default MyFavouriteBorder;
