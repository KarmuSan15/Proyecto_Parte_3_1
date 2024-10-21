// src/components/myfavourite/__docs__/MyFavourite.stories.tsx
import type { Meta, StoryObj } from "@storybook/react"; // Importamos tipos para definir la metadata y las historias de Storybook
import MyFavourite from "../MyFavourite"; // Importamos el componente MyFavourite desde su ubicación

// Definimos los metadatos para el componente MyFavourite en Storybook
const meta: Meta<typeof MyFavourite> = {
  title: "Components/MyFavourite", // Título que aparecerá en Storybook, usado para agrupar las historias
  component: MyFavourite, // Componente que se utilizará en las historias
};

export default meta; // Exportamos los metadatos para que Storybook los reconozca

// Definimos el tipo de historia para las historias de MyFavourite
type Story = StoryObj<typeof MyFavourite>; 

// Definimos la historia 'Default', que representa el estado normal del componente
export const Default: Story = {
  args: {
    color: "red", // Color por defecto del icono
    disabled: false, // Estado habilitado por defecto
    onClick: () => alert("¡Botón de favorito clicado!"), // Función que se ejecuta al hacer clic
  },
};

// Definimos otra historia llamada 'Disabled', que muestra el componente deshabilitado
export const Disabled: Story = {
  args: {
    color: "gray", // Color del icono cuando está deshabilitado
    disabled: true, // Estado del botón deshabilitado
  },
};
