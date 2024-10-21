import React from "react"; // Importa React para poder usar JSX
import { render, screen } from "@testing-library/react"; // Importa funciones de testing-library para renderizar componentes y acceder a elementos
import '@testing-library/jest-dom'; // Importa las extensiones de Jest para facilitar las aserciones en las pruebas
import { describe, it, expect } from "vitest"; // Importa funciones de Vitest para agrupar y definir pruebas
import ToruhDL from "../ToruhDL"; // Importa el componente ToruhDL que se va a probar

// Describe un conjunto de pruebas para el componente ToruhDL
describe("ToruhDL component", () => {
  // Define una prueba individual
  it("Se debería renderizar el perfil con nombre y descripción en el DOM", () => {
    // Renderiza el componente ToruhDL con propiedades específicas
    render(<ToruhDL name="Toruh Delgado Lahera" description="Desarrollador Web" avatarUrl="https://i.pinimg.com/736x/88/e9/aa/88e9aa944c9bc14936d6e8cf7c954473.jpg\n" />);
    
    // Busca el elemento de texto que coincide con el nombre proporcionado
    const name = screen.getByText("Toruh Delgado Lahera");
    
    // Verifica que el nombre está presente en el documento
    expect(name).toBeInTheDocument();
  });
});
