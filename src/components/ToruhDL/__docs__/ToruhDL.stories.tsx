import type { Meta, StoryObj } from "@storybook/react"; // Importa tipos Meta y StoryObj de Storybook
import ToruhDL from "../ToruhDL"; // Importa el componente ToruhDL

// Define la metadata para el componente ToruhDL
const meta: Meta<typeof ToruhDL> = {
  title: "Components/ToruhDL", // Título que se mostrará en el panel de Storybook
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
