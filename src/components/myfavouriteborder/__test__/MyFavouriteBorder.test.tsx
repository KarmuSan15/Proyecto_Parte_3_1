// src/components/myfavouriteborder/__test__/MyFavouriteBorder.test.tsx
import React from "react"; // Importamos React para poder utilizar JSX en las pruebas
import { render, screen } from "@testing-library/react"; // Importamos funciones de testing-library para renderizar el componente y seleccionar elementos
import '@testing-library/jest-dom'; // Necesario para el uso de toBeInTheDocument
import { describe, it, expect } from "vitest"; // Importamos funciones de Vitest para estructurar las pruebas
import MyFavouriteBorder from "../MyFavouriteBorder"; // Importamos el componente MyFavouriteBorder desde su ubicación

// Describimos el bloque de pruebas para el componente MyFavouriteBorder
describe("MyFavouriteBorder component", () => {
  // Definimos una prueba específica
  it("Se debería renderizar el botón de favorito en el DOM", () => {
    render(<MyFavouriteBorder color="blue" />); // Renderizamos el componente con el color azul para verificar su visualización
    const button = screen.getByRole("button"); // Buscamos el botón en el DOM utilizando su rol
    expect(button).toBeInTheDocument(); // Comprobamos que el botón esté presente en el documento
  });
});
