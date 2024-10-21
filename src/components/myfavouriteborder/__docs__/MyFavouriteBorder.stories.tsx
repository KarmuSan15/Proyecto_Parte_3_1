// src/components/myfavouriteborder/__docs__/MyFavouriteBorder.stories.tsx
import type { Meta, StoryObj } from "@storybook/react"; // Importamos tipos para definir la metadata y las historias de Storybook
import MyFavouriteBorder from "../MyFavouriteBorder"; // Importamos el componente MyFavouriteBorder desde su ubicación

// Definimos los metadatos para el componente MyFavouriteBorder en Storybook
const meta: Meta<typeof MyFavouriteBorder> = {
  title: "Components/MyFavouriteBorder", // Título que aparecerá en Storybook para organizar el componente
  component: MyFavouriteBorder, // Componente que se utilizará en las historias
};

export default meta; // Exportamos los metadatos para que Storybook los reconozca

// Definimos el tipo de historia para las historias de MyFavouriteBorder
type Story = StoryObj<typeof MyFavouriteBorder>; 

// Definimos la historia 'Default', que representa el estado normal del componente
export const Default: Story = {
  args: {
    color: "blue", // Color por defecto del icono
    disabled: false, // Indica que el botón está habilitado por defecto
    onClick: () => alert("¡Botón de favorito clicado!"), // Función que se ejecuta al hacer clic en el botón
  },
};

// Definimos otra historia llamada 'Disabled', que muestra el componente en estado deshabilitado
export const Disabled: Story = {
  args: {
    color: "gray", // Color del icono cuando está deshabilitado
    disabled: true, // Indica que el botón está deshabilitado
  },
};
