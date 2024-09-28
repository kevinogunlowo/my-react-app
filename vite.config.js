import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [react()],

  root: 'React class project',  // Sets the base directory for the Vite server
  build: {
    outDir: 'public',  // Output directory for built files
  },
});

  

