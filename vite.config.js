import { defineConfig } from 'vitest/config';
import path from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
      'styled-system': `${path.resolve(__dirname, './styled-system/')}`,
      '@': `${path.resolve(__dirname, './src/')}`,
    },
  },
  test: {
    environment: 'jsdom',
  },
});
