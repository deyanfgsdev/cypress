module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Rutas de los archivos de tu proyecto
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  },
  // Otras opciones de configuración de Tailwind CSS...
};
