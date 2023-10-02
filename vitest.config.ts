import react from '@vitejs/plugin-react'
import path from 'path'
import { configDefaults, defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    coverage: {
      reporter: ['json'],
      reportsDirectory: './coverage',
    },
    exclude: [...configDefaults.exclude, './tests'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app/'),
    },
  },
})
