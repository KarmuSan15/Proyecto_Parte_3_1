// src/components/myfavourite/MyFavourite.tsx
import React from "react"; // Importamos React para poder crear componentes
import IconButton from "@mui/material/IconButton"; // Importamos IconButton de MUI para crear un botón que contenga un icono
import FavoriteIcon from "@mui/icons-material/Favorite"; // Importamos el icono de favorito de MUI

// Definimos las propiedades que aceptará el componente MyFavourite
type MyFavouriteProps = {
  color: string; // Color del icono, requerido
  disabled?: boolean; // Propiedad opcional para deshabilitar el botón
  onClick?: () => void; // Propiedad opcional para manejar el evento de clic
};

// Definimos el componente MyFavourite utilizando las propiedades especificadas
const MyFavourite: React.FC<MyFavouriteProps> = ({ color, disabled = false, onClick }) => {
  return (
    <IconButton onClick={onClick} disabled={disabled}> {/* Renderizamos IconButton con las propiedades onClick y disabled */}
      <FavoriteIcon style={{ color }} /> {/* Renderizamos FavoriteIcon con el color especificado */}
    </IconButton>
  );
};

// Exportamos el componente MyFavourite para que pueda ser utilizado en otras partes de la aplicación
export default MyFavourite;
