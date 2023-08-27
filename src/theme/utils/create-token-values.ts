import { Token } from 'styled-system/types/composition';

const createTokenValues = (
  properties: Record<string | number, string | number>,
  prefix = true
): Record<string, Token> => {
  const tokens: Record<string, Token> = {};

  for (const key in properties) {
    if (key) {
      const k = prefix ? `$${key}` : key;

      tokens[k] = {
        value: properties[key],
      };
    }
  }

  return tokens;
};

export default createTokenValues;
