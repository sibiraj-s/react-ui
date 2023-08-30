/* eslint no-console: ["error", { allow: ["error"] }] */
import { vi } from 'vitest';

const consoleFilters = [
  /^The above error occurred in the <.*?> component:/, // error boundary output
  /^Error: Uncaught .+/, // jsdom output
];

export const suppressErrorOutput = () => {
  const originalError = console.error;

  const error = (...args: Parameters<typeof originalError>) => {
    const message = typeof args[0] === 'string' ? args[0] : null;
    if (!message || !consoleFilters.some((filter) => filter.test(message))) {
      originalError(...args);
    }
  };

  console.error = error;

  return () => {
    console.error = originalError;
  };
};

export const mockConsoleError = () => {
  const originalConsole = console.error;
  console.error = vi.fn();

  return () => {
    console.error = originalConsole;
  };
};
