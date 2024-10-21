// src/components/toruhdl/ToruhDL.tsx

import React, { useState } from "react"; // Importa React y el hook useState para manejar el estado
import { Card, CardContent, Typography, Avatar, Button, Box } from "@mui/material"; // Importa componentes de Material UI
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material"; // Importa íconos de redes sociales
import { motion } from "framer-motion"; // Importa framer-motion para animaciones
import ContactForm from "./ContactForm"; // Importa el nuevo componente de formulario
import ThankYouCard from "./ThankYouCard"; // Importa el componente de agradecimiento

// Define las propiedades que acepta el componente
interface ToruhDLProps {
  name: string; // Nombre del usuario
  description: string; // Descripción del usuario
  avatarUrl?: string; // URL del avatar (opcional)
}

// URL de un avatar por defecto
const defaultAvatar = "https://i.pinimg.com/736x/88/e9/aa/88e9aa944c9bc14936d6e8cf7c954473.jpg"; 

// Componente funcional ToruhDL que recibe props
const ToruhDL: React.FC<ToruhDLProps> = ({ name, description, avatarUrl }) => {
  const [showContactForm, setShowContactForm] = useState(false); // Estado para mostrar el formulario de contacto
  const [showThankYouCard, setShowThankYouCard] = useState(false); // Estado para mostrar la tarjeta de agradecimiento

  // Función para manejar el clic en el botón de contactar
  const handleContactClick = () => {
    setShowContactForm(true); // Mostrar formulario de contacto
    setShowThankYouCard(false); // Ocultar tarjeta de agradecimiento
  };

  // Función para cerrar el formulario de contacto
  const handleCloseContactForm = () => {
    setShowContactForm(false); // Ocultar formulario de contacto
  };

  // Función para mostrar la tarjeta de agradecimiento
  const handleThankYou = () => {
    setShowThankYouCard(true); // Mostrar tarjeta de agradecimiento
    setTimeout(() => {
      setShowThankYouCard(false); // Ocultar tarjeta de agradecimiento después de 3 segundos
    }, 3000); // 3000 milisegundos = 3 segundos
  };

  return (
    <div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} // Estado inicial de la animación
        animate={{ opacity: 1, scale: 1 }} // Estado final de la animación
        transition={{ duration: 0.5 }} // Duración de la animación
      >
        <Card 
          sx={{ 
            maxWidth: 400, // Ancho máximo de la tarjeta
            background: "linear-gradient(to right, #00bfff, #20b2aa)", // Gradiente de fondo
            boxShadow: 3, // Sombra de la tarjeta
            '&:hover': { boxShadow: 6, transform: 'scale(1.02)' }, // Efecto hover
            transition: 'all 0.3s ease-in-out', // Transición suave
            borderRadius: '16px', // Bordes redondeados
            padding: 2 // Padding interno
          }}
        >
          <CardContent sx={{ textAlign: "center" }}> {/* Contenido centrado en la tarjeta */}
            <Avatar 
              alt={name} // Texto alternativo para el avatar
              src={avatarUrl || defaultAvatar} // Usa el avatar proporcionado o el por defecto
              sx={{ width: 100, height: 100, margin: "0 auto 16px auto" }} // Tamaño y márgenes del avatar
            />
            <Typography variant="h5" component="div" gutterBottom> {/* Título con el nombre */}
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary"> {/* Descripción del usuario */}
              {description}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}> {/* Contenedor para íconos de redes sociales */}
              <a href="https://github.com/KarmuSan15" target="_blank" rel="noopener noreferrer" aria-label="GitHub"> {/* Enlace a GitHub */}
                <GitHub sx={{ margin: "0 8px", cursor: "pointer", '&:hover': { color: "#333" } }} /> {/* Icono de GitHub */}
              </a>
              <a href="https://www.linkedin.com/in/toruh-delgado-lahera-1a5801310/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"> {/* Enlace a LinkedIn */}
                <LinkedIn sx={{ margin: "0 8px", cursor: "pointer", '&:hover': { color: "#0077b5" } }} /> {/* Icono de LinkedIn */}
              </a>
              <a href="https://x.com/karmu_San15_" target="_blank" rel="noopener noreferrer" aria-label="Twitter"> {/* Enlace a Twitter */}
                <Twitter sx={{ margin: "0 8px", cursor: "pointer", '&:hover': { color: "#1da1f2" } }} /> {/* Icono de Twitter */}
              </a>
            </Box>
            <Box sx={{ marginTop: 3 }}> {/* Contenedor para el botón de contacto */}
              <Button 
                variant="contained" // Estilo del botón
                color="secondary" // Color del botón
                onClick={handleContactClick} // Manejar clic en el botón
                sx={{ borderRadius: '8px' }} // Bordes redondeados
                aria-label="Contactar" // Texto alternativo para accesibilidad
              >
                Contactar {/* Texto del botón */}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </motion.div>

      {/* Condicional para mostrar el formulario de contacto si showContactForm es true */}
      {showContactForm && (
        <ContactForm 
          onClose={handleCloseContactForm} // Función para cerrar el formulario
          onThankYou={handleThankYou} // Pasar la función para mostrar la tarjeta de agradecimiento
        />
      )}

      {/* Condicional para mostrar la tarjeta de agradecimiento si showThankYouCard es true */}
      {showThankYouCard && (
        <ThankYouCard 
          onClose={() => setShowThankYouCard(false)} // Función para cerrar la tarjeta de agradecimiento
        />
      )}
    </div>
  );
};

export default ToruhDL; // Exporta el componente ToruhDL para que pueda ser utilizado en otras partes de la aplicación
