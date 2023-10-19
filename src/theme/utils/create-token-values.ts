import { Token, Recursive } from 'styled-system/types/composition';

const createTokenValues = (
  properties: Record<string | number, string | number | Record<string, string>>,
  prefix = true,
  solidAsDefault = false
): Recursive<Token> => {
  const tokens: Recursive<Token> = {};

  Object.entries(properties).forEach(([key, value]) => {
    const k = prefix ? `$${key}` : key;

    if (typeof value === 'object') {
      tokens[k] = createTokenValues(value, prefix, solidAsDefault);
      return;
    }

    if (solidAsDefault && k === 'solid') {
      tokens.DEFAULT = {
        value: properties[k],
      };
    }

    tokens[k] = {
      value: properties[k],
    };
  });

  return tokens;
};

export default createTokenValues;
