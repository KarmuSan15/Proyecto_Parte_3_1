// src/components/toruhdl/ThankYouCard.tsx

import React from "react"; // Importa React
import { Card, CardContent, Typography, Box, Button } from "@mui/material"; // Importa componentes de Material UI
import { motion } from "framer-motion"; // Importa la biblioteca de animaciones Framer Motion

// Define las propiedades que acepta el componente ThankYouCard
interface ThankYouCardProps {
  onClose: () => void; // Función para cerrar la tarjeta de agradecimiento
}

// Componente funcional ThankYouCard que recibe props
const ThankYouCard: React.FC<ThankYouCardProps> = ({ onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }} // Estado inicial de la animación: opacidad 0 y escala 0.8
      animate={{ opacity: 1, scale: 1 }} // Estado final de la animación: opacidad 1 y escala 1
      transition={{ duration: 0.5 }} // Duración de la animación de 0.5 segundos
    >
      <Card 
        sx={{ 
          maxWidth: 400, // Ancho máximo de la tarjeta
          background: "linear-gradient(to right, #00bfff, #20b2aa)", // Gradiente de fondo
          boxShadow: 3, // Sombra de la tarjeta
          transition: 'all 0.3s ease-in-out', // Transición suave para hover
          borderRadius: '16px', // Bordes redondeados
          padding: 2, // Padding interno
          marginTop: 2 // Espaciado superior entre tarjetas
        }}
      >
        <CardContent sx={{ textAlign: "center" }}> {/* Contenido de la tarjeta centrado */}
          <Typography variant="h5" component="div" gutterBottom> {/* Título de la tarjeta */}
            ¡Gracias por Contactar! {/* Mensaje de agradecimiento */}
          </Typography>
          <Typography variant="body2" color="text.secondary"> {/* Texto secundario con mensaje adicional */}
            Agradecemos tu interés. Nos pondremos en contacto contigo pronto.
          </Typography>
          <Box sx={{ marginTop: 2, textAlign: "center" }}> {/* Caja para el botón con margen superior */}
            <Button 
              variant="contained" // Estilo del botón
              color="secondary" // Color del botón, debe ser consistente con el diseño
              onClick={onClose} // Maneja el clic para cerrar la tarjeta
            >
              Cerrar {/* Texto del botón */}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ThankYouCard; // Exporta el componente ThankYouCard para que pueda ser utilizado en otras partes de la aplicación
