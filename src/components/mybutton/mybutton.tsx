import { MouseEventHandler } from 'react'; // Importamos el tipo MouseEventHandler de React
import Button from '@mui/material/Button'; // Importamos el botón de Material UI

// Declaro la interface del componente MyButton.
export interface MyButtonProps {
  text: string; // Prop 'text' de tipo string: texto que se mostrará en el botón
  txtcolor: string; // Prop 'txtcolor' de tipo string: color del texto del botón
  bgcolor: string; // Prop 'bgcolor' de tipo string: color de fondo del botón
  borderColor: string; // Prop 'borderColor' de tipo string: color del borde del botón
  borderWidth: string; // Prop 'borderWidth' de tipo string: ancho del borde del botón
  size?: 'small' | 'medium' | 'large'; // Prop 'size': tamaño del botón (opcional)
  hoverTxtColor?: string; // Prop 'hoverTxtColor': color del texto al hacer hover (opcional)
  hoverBgColor?: string; // Prop 'hoverBgColor': color de fondo al hacer hover (opcional)
  disabled?: boolean; // Prop 'disabled': indica si el botón está deshabilitado (opcional)
  onClick?: MouseEventHandler<HTMLButtonElement>; // Prop 'onClick': función que se ejecuta al hacer clic en el botón (opcional)
}

// Defino mi componente MyButton y le digo que las props son las que definí arriba
function MyButton(props: MyButtonProps) {
  // Paso el valor de las props a un objeto:
  const { bgcolor, text, txtcolor, borderColor, borderWidth, size, hoverTxtColor, hoverBgColor, disabled, onClick } = props;

  return (
    // Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
    <Button
      variant="outlined" // Usamos el estilo "outlined" para incluir el borde
      type='button'
      onClick={onClick}
      disabled={disabled}
      size={size}
      sx={{
        backgroundColor: bgcolor, // Color de fondo del botón
        color: txtcolor, // Color del texto del botón
        borderColor: borderColor, // Color del borde del botón
        borderWidth: borderWidth, // Ancho del borde del botón
        ':hover': { // Estilos para el estado hover
          backgroundColor: hoverBgColor, // Color de fondo al pasar el ratón
          color: hoverTxtColor // Color del texto al pasar el ratón
        }
      }}
    >
      {text} {/* Muestra el texto del botón */}
    </Button>
  );
}

export default MyButton; // Exportamos el componente MyButton
