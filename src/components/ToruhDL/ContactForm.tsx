import React, { useState } from 'react'; // Importa React y el hook useState para manejar el estado
import { TextField, Button, Typography, Card } from '@mui/material'; // Importa componentes de Material UI

// Define las propiedades que acepta el componente ContactForm
interface ContactFormProps {
  onClose: () => void; // Función para cerrar el formulario
  onThankYou: () => void; // Nueva prop para manejar el agradecimiento
}

// Componente funcional ContactForm que recibe props
const ContactForm: React.FC<ContactFormProps> = ({ onClose, onThankYou }) => {
  const [name, setName] = useState(''); // Estado para el nombre
  const [email, setEmail] = useState(''); // Estado para el correo electrónico
  const [message, setMessage] = useState(''); // Estado para el mensaje
  const [error, setError] = useState(''); // Estado para manejar errores
  const [success, setSuccess] = useState(false); // Estado para manejar el éxito del envío

  // Función para manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    setError(''); // Resetea el error al enviar

    // Validación para asegurarse de que todos los campos estén completos
    if (!name || !email || !message) {
      setError('Por favor, completa todos los campos.'); // Muestra un mensaje de error si falta algún campo
      return;
    }

    console.log({ name, email, message }); // Muestra los datos del formulario en la consola
    setSuccess(true); // Cambia el estado de éxito a verdadero
    onThankYou(); // Llama a la función de agradecimiento pasada como prop
    onClose(); // Cierra el formulario
  };

  return (
    <Card 
      sx={{ 
        maxWidth: 400, // Ancho máximo de la tarjeta
        background: "linear-gradient(to right, #00bfff, #20b2aa)", // Gradiente de fondo
        boxShadow: 3, // Sombra de la tarjeta
        borderRadius: '16px', // Bordes redondeados
        padding: 3, // Padding interno
        marginTop: 2, // Espaciado superior
        textAlign: 'center', // Texto centrado
      }}
    >
      <Typography variant="h6" gutterBottom>Contacto</Typography> {/* Título del formulario */}
      {success && <Typography color="success.main">¡Mensaje enviado con éxito!</Typography>} {/* Mensaje de éxito */}
      {error && <Typography color="error.main">{error}</Typography>} {/* Mensaje de error */}
      <form onSubmit={handleSubmit}> {/* Maneja el evento de envío del formulario */}
        <TextField
          label="Nombre" // Etiqueta del campo
          variant="outlined" // Estilo del campo
          fullWidth // Ancho completo
          margin="normal" // Margen normal
          value={name} // Valor del campo de nombre
          onChange={(e) => setName(e.target.value)} // Actualiza el estado de nombre al cambiar
          sx={{ 
            backgroundColor: '#a0d7f0', // Color de fondo del campo
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#a0d7f0', // Color del borde
              },
              '&:hover fieldset': {
                borderColor: '#80c2e6', // Color del borde al pasar el mouse
              },
              '&.Mui-focused fieldset': {
                borderColor: '#007bbf', // Color del borde cuando el campo está enfocado
              },
            },
          }} 
        />
        <TextField
          label="Correo Electrónico" // Etiqueta del campo
          variant="outlined" // Estilo del campo
          fullWidth // Ancho completo
          margin="normal" // Margen normal
          type="email" // Tipo de campo
          value={email} // Valor del campo de correo electrónico
          onChange={(e) => setEmail(e.target.value)} // Actualiza el estado de email al cambiar
          sx={{ 
            backgroundColor: '#a0d7f0', // Color de fondo del campo
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#a0d7f0', // Color del borde
              },
              '&:hover fieldset': {
                borderColor: '#80c2e6', // Color del borde al pasar el mouse
              },
              '&.Mui-focused fieldset': {
                borderColor: '#007bbf', // Color del borde cuando el campo está enfocado
              },
            },
          }} 
        />
        <TextField
          label="Mensaje" // Etiqueta del campo
          variant="outlined" // Estilo del campo
          fullWidth // Ancho completo
          margin="normal" // Margen normal
          multiline // Permite múltiples líneas
          rows={4} // Número de filas visibles
          value={message} // Valor del campo de mensaje
          onChange={(e) => setMessage(e.target.value)} // Actualiza el estado de mensaje al cambiar
          sx={{ 
            backgroundColor: '#a0d7f0', // Color de fondo del campo
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#a0d7f0', // Color del borde
              },
              '&:hover fieldset': {
                borderColor: '#80c2e6', // Color del borde al pasar el mouse
              },
              '&.Mui-focused fieldset': {
                borderColor: '#007bbf', // Color del borde cuando el campo está enfocado
              },
            },
          }} 
        />
        <Button 
          type="submit" // Tipo del botón
          variant="contained" // Estilo del botón
          color="secondary" // Color del botón, manteniendo el estilo del botón de contacto
          sx={{ marginTop: 2 }} // Margen superior
        >
          Enviar {/* Texto del botón */}
        </Button>
        <Button 
          variant="outlined" // Estilo del botón
          color="secondary" // Color del botón
          onClick={onClose} // Maneja el clic para cerrar el formulario
          sx={{ marginTop: 2, marginLeft: 2 }} // Márgenes superior e izquierdo
        >
          Cerrar {/* Texto del botón */}
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm; // Exporta el componente ContactForm para que pueda ser utilizado en otras partes de la aplicación
