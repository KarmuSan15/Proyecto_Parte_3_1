import type { Meta, StoryObj } from "@storybook/react"; // Importa tipos Meta y StoryObj de Storybook
import ToruhDL from "../ToruhDL"; // Importa el componente ToruhDL

// Define la metadata para el componente ToruhDL
const meta: Meta<typeof ToruhDL> = {
  title: "ToruhDL", // Título que se mostrará en el panel de Storybook
  component: ToruhDL, // Componente que se está documentando
};

export default meta; // Exporta la metadata por defecto
type Story = StoryObj<typeof ToruhDL>; // Define un tipo Story basado en el componente ToruhDL

// Define una historia por defecto para el componente
export const Default: Story = {
  args: {
    name: "Toruh Delgado Lahera", // Prop 'name' que se pasará al componente
    description: "Desarrollador Web y Entusiasta de la Tecnología.", // Prop 'description' que se pasará al componente
    avatarUrl: "https://i.pinimg.com/736x/88/e9/aa/88e9aa944c9bc14936d6e8cf7c954473.jpg", // Prop 'avatarUrl' que se pasará al componente
  },
};

// Historia alterna con descripción larga
export const LongDescription: Story = {
  args: {
    name: "Toruh Delgado Lahera",
    description: "Desarrollador Web, apasionado por la creación de aplicaciones interactivas y por el aprendizaje continuo en el mundo de la tecnología. Siempre buscando nuevas formas de mejorar mis habilidades y aportar valor a los proyectos en los que trabajo.",
    avatarUrl: "https://i.pinimg.com/736x/88/e9/aa/88e9aa944c9bc14936d6e8cf7c954473.jpg",
  },
};

// Historia con avatar alternativo
export const AlternativeAvatar: Story = {
  args: {
    name: "Toruh Delgado Lahera",
    description: "Desarrollador Web y Entusiasta de la Tecnología.",
    avatarUrl: "https://i.pinimg.com/736x/d5/1a/ab/d51aabb7e7e3cda14171be68456e1b0d.jpg", // Cambia la URL para un avatar diferente
  },
};

// Historia interactiva con controles
export const Interactive: Story = {
  args: {
    name: "Toruh Delgado Lahera",
    description: "Desarrollador Web y Entusiasta de la Tecnología.",
    avatarUrl: "https://i.pinimg.com/736x/88/e9/aa/88e9aa944c9bc14936d6e8cf7c954473.jpg",
  },
  argTypes: {
    name: { control: 'text' },
    description: { control: 'text' },
    avatarUrl: { control: 'text' },
  },
};
