import React from 'react';
import ToruhDL, { ToruhDLProps } from '../ToruhDL'; // Importa correctamente el componente y sus props

// Creamos un componente Example para renderizar ToruhDL con las props que le pasamos
function Example(props: ToruhDLProps) {
  return (
    <ToruhDL
      name={props.name} // Nombre del usuario
      description={props.description} // Descripción del usuario
      avatarUrl={props.avatarUrl} // URL del avatar
    />
  );
}

export default Example; // Exporta el componente Example
