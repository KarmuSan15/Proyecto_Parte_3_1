// src/components/myfavourite/__test__/MyFavourite.test.tsx
import React from "react"; // Importamos React para poder utilizar JSX en las pruebas
import { render, screen } from "@testing-library/react"; // Importamos funciones de testing-library para renderizar el componente y seleccionar elementos
import '@testing-library/jest-dom'; // Necesario para el uso de toBeInTheDocument, que facilita las aserciones
import { describe, it, expect } from "vitest"; // Importamos funciones de Vitest para estructurar las pruebas
import MyFavourite from "../MyFavourite"; // Importamos el componente MyFavourite desde su ubicación

// Describimos el bloque de pruebas para el componente MyFavourite
describe("MyFavourite component", () => {
  // Definimos una prueba específica
  it("Se debería renderizar el botón de favorito en el DOM", () => {
    render(<MyFavourite color="red" />); // Renderizamos el componente con el color rojo para verificar su visualización
    const button = screen.getByRole("button"); // Buscamos el botón en el DOM utilizando su rol
    expect(button).toBeInTheDocument(); // Comprobamos que el botón esté presente en el documento
  });
});
