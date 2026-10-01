import { defineConfig } from 'vitest/config';
import path from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
      'styled-system': `${path.resolve(import.meta.dirname, './styled-system/')}`,
      '@': `${path.resolve(import.meta.dirname, './src/')}`,
    },
  },
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
    },
    setupFiles: ['./test/setup.ts'],
  },
});
