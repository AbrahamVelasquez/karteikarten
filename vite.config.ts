import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://abrahamvelasquez.github.io/karteikarten/', // ¡Ojo! Pon el nombre exacto de tu repo en GitHub
})
