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
      reportsDirectory: './test-results/coverage',
    },
    exclude: [...configDefaults.exclude, './src/tests'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src/'),
    },
  },
})
