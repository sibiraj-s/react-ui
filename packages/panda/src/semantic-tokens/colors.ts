import { defineSemanticTokens } from '@pandacss/dev';

const colors = defineSemanticTokens.colors({
  accent: {
    50: { value: '{colors.blue.50}' },
    100: { value: '{colors.blue.100}' },
    200: { value: '{colors.blue.200}' },
    300: { value: '{colors.blue.300}' },
    400: { value: '{colors.blue.400}' },
    500: { value: '{colors.blue.500}' },
    600: { value: '{colors.blue.600}' },
    DEFAULT: { value: '{colors.blue.700}' },
    700: { value: '{colors.blue.700}' },
    800: { value: '{colors.blue.800}' },
    900: { value: '{colors.blue.900}' },
    950: { value: '{colors.blue.950}' },
  },

  border: {
    DEFAULT: { value: { base: '{colors.gray.400}', _dark: '{colors.gray.100}' } },
    light: { value: { base: '{colors.gray.100}', _dark: '{colors.gray.400}' } },
  },
  placeholder: { value: { base: '{colors.neutral.500}', _dark: '{colors.neutral.300}' } },
  error: { value: { base: '{colors.red.500}', _dark: '{colors.red.400}' } },
  muted: { value: { base: '{colors.gray.500}', _dark: '{colors.gray.200}' } },
});

export default colors;
