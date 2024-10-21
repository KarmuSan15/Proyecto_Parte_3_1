// src/components/myfavouriteborder/MyFavouriteBorder.tsx
import React from "react"; // Importamos React para poder crear componentes
import IconButton from "@mui/material/IconButton"; // Importamos IconButton de MUI para el botón
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"; // Importamos el icono de favorito con borde de MUI

// Definimos las propiedades que aceptará el componente MyFavouriteBorder
type MyFavouriteBorderProps = {
  color: string; // Color del icono, requerido
  disabled?: boolean; // Propiedad opcional para deshabilitar el botón
  onClick?: () => void; // Propiedad opcional para manejar el evento de clic
};

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
