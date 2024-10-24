import React from "react"; // Importa React
import { Card, CardContent, Typography, Button, Box } from "@mui/material"; // Importa componentes de Material UI
import { motion } from "framer-motion"; // Importa la biblioteca de animaciones Framer Motion

// Define las propiedades que acepta el componente EmailCard
interface EmailCardProps {
  email: string; // Propiedad para el correo electrónico que se mostrará
  onClose: () => void; // Función para cerrar la tarjeta
}

// Componente funcional EmailCard que recibe props
const EmailCard: React.FC<EmailCardProps> = ({ email, onClose }) => {
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
            Correo Electrónico
          </Typography>
          <Typography variant="body2" color="text.secondary"> {/* Texto secundario para el correo electrónico */}
            {email} {/* Muestra el correo electrónico pasado como prop */}
          </Typography>
          <Box sx={{ marginTop: 3 }}> {/* Caja para el botón con margen superior */}
            <Button 
              variant="contained" // Estilo del botón
              color="secondary" // Color del botón, igual al botón "Contactar"
              onClick={onClose} // Maneja el clic para cerrar la tarjeta
              sx={{ borderRadius: '8px' }} // Bordes redondeados para el botón
            >
              Cerrar {/* Texto del botón */}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EmailCard; // Exporta el componente EmailCard para que pueda ser utilizado en otras partes de la aplicación
