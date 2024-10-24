import { MouseEventHandler } from 'react'; // Importamos el tipo MouseEventHandler de React
import IconButton from '@mui/material/IconButton'; // Importamos IconButton de Material UI
import FavoriteIcon from '@mui/icons-material/Favorite'; // Importamos el ícono de favorito de Material UI

// Declaro la interfaz del componente MyFavourite.
export interface MyFavouriteProps {
  color: string; // Prop 'color' de tipo string: color del ícono (requerido)
  disabled?: boolean; // Prop 'disabled': indica si el ícono está deshabilitado (opcional)
  onClick?: MouseEventHandler<HTMLButtonElement>; // Prop 'onClick': función que se ejecuta al hacer clic en el ícono (opcional)
}

// Defino mi componente MyFavourite y le digo que las props son las que definí arriba
function MyFavourite(props: MyFavouriteProps) {
  // Paso el valor de las props a un objeto:
  const { color, disabled = false, onClick } = props; // Desestructuramos las props

  return (
    // Uso IconButton de la librería MUI y lo personalizo con las props que pasan a mi componente.
    <IconButton
      onClick={onClick} // Maneja el evento de clic
      disabled={disabled} // Determina si el botón está habilitado
      color="inherit" // Mantiene el color del tema
    >
      <FavoriteIcon style={{ color }} /> {/* Renderizo el ícono de favorito con el color especificado */}
    </IconButton>
  );
}

export default MyFavourite; // Exportamos el componente MyFavourite
