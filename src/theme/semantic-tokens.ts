import { defineSemanticTokens } from '@pandacss/dev';
import createTokenValues from './utils/create-token-values';

const semanticTokens = defineSemanticTokens({
  colors: createTokenValues(
    {
      // primary shades
      primary: {
        base: '{colors.blue.50}',
        bgSubtle: '{colors.blue.100}',
        bg: '{colors.blue.200}',
        bgHover: '{colors.blue.300}',
        bgActive: '{colors.blue.400}',
        line: '{colors.blue.500}',
        border: '{colors.blue.600}',
        solid: '{colors.blue.700}',
        solidHover: '{colors.blue.800}',
        text: '{colors.blue.900}',
        textContrast: '{colors.blue.950}',
      },

      // secondary shades
      secondary: {
        base: '{colors.slate.50}',
        bgSubtle: '{colors.slate.100}',
        bg: '{colors.slate.200}',
        bgHover: '{colors.slate.300}',
        bgActive: '{colors.slate.400}',
        line: '{colors.slate.500}',
        border: '{colors.slate.600}',
        solid: '{colors.slate.700}',
        solidHover: '{colors.slate.800}',
        text: '{colors.slate.900}',
        textContrast: '{colors.slate.950}',
      },

      // success
      success: {
        base: '{colors.green.50}',
        bgSubtle: '{colors.green.100}',
        bg: '{colors.green.200}',
        bgHover: '{colors.green.300}',
        bgActive: '{colors.green.400}',
        line: '{colors.green.500}',
        border: '{colors.green.600}',
        solid: '{colors.emerald.700}',
        solidHover: '{colors.green.800}',
        text: '{colors.green.900}',
        textContrast: '{colors.green.950}',
      },

      // danger
      danger: {
        base: '{colors.red.50}',
        bgSubtle: '{colors.red.100}',
        bg: '{colors.red.200}',
        bgHover: '{colors.red.300}',
        bgActive: '{colors.red.400}',
        line: '{colors.red.500}',
        border: '{colors.red.600}',
        solid: '{colors.red.700}',
        solidHover: '{colors.red.800}',
        text: '{colors.red.900}',
        textContrast: '{colors.red.950}',
      },

      // primary shades
      neutral: {
        base: '{colors.gray.50}',
        bgSubtle: '{colors.gray.100}',
        bg: '{colors.gray.200}',
        bgHover: '{colors.gray.300}',
        bgActive: '{colors.gray.400}',
        line: '{colors.gray.500}',
        border: '{colors.gray.600}',
        solid: '{colors.gray.700}',
        solidHover: '{colors.gray.800}',
        text: '{colors.gray.900}',
        textContrast: '{colors.gray.950}',
      },

      // other colors
      muted: '{colors.gray.500}',
    },
    false,
    true
  ),
});

export default semanticTokens;
