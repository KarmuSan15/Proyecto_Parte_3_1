import type { Meta, StoryObj } from "@storybook/react"; // Importamos tipos de Storybook
import Example from "./example"; // Importamos el componente Example (que utiliza MyButton)

// Definimos los metadatos para el componente MyButton en Storybook
const meta: Meta<typeof Example> = {
  title: "MyButton", // Título que aparecerá en Storybook
  component: Example, // Componente que se utilizará en las historias
};

export default meta; // Exportamos los metadatos

type Story = StoryObj<typeof Example>; // Definimos el tipo de historia

// Definimos la historia 'Default'
export const Default: Story = {
  args: {
    text: "Hola", // Texto del botón
    txtcolor: "white", // Color del texto
    bgcolor: "blue", // Color de fondo
    borderColor: "black", // Color del borde
    borderWidth: "1px", // Ancho del borde
    size: "medium", // Tamaño del botón
    hoverTxtColor: "yellow", // Color del texto al hacer hover
    hoverBgColor: "green", // Color de fondo al hacer hover
    disabled: false, // Estado del botón
    onClick: () => alert("¡Hola!"), // Función al hacer clic
  },
};

// Definimos otra historia llamada 'Disabled'
export const Disabled: Story = {
  args: {
    text: "Botón deshabilitado", // Texto del botón
    txtcolor: "gray", // Color del texto
    bgcolor: "lightgray", // Color de fondo
    borderColor: "darkgray", // Color del borde
    borderWidth: "1px", // Ancho del borde
    size: "medium", // Tamaño del botón
    disabled: true, // Botón deshabilitado
  },
};
