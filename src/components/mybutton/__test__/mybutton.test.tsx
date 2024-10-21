import React from "react"; // Importamos React
import { describe, expect, it } from "vitest"; // Importamos funciones de Vitest para pruebas
import { render, screen } from "@testing-library/react"; // Importamos funciones de testing-library
import '@testing-library/jest-dom'; // Necesario para el uso de toBeInTheDocument
import MyButton from "../mybutton"; // Importamos nuestro componente MyButton

describe("MyButton component", () => { // Cambiamos el nombre del componente en la descripción
  it("El botón se debería renderizar correctamente", () => { // Descripción de la prueba
    render(<MyButton text='Hola' txtcolor='white' bgcolor='orange' borderColor='black' borderWidth='1px' />); // Renderizamos MyButton con props
    const button = screen.getByRole("button"); // Buscamos el botón en el DOM
    expect(button).toBeInTheDocument(); // Comprobamos que el botón esté en el documento
  });
});
