import { defineConfig } from 'cypress';
import plugins from './cypress/plugins';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: '**/*.spec.{js,ts}',
    setupNodeEvents(on, config) {
      return plugins(on, config);
    },
    experimentalStudio: true,
  },
});
