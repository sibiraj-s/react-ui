import { Recursive } from 'styled-system/types/composition';

type TokenValue = any;

const createTokenValues = (
  properties: Record<string | number, TokenValue | Record<string, TokenValue>>,
  prefix = true,
  solidAsDefault = false
): Recursive<TokenValue> => {
  const tokens: Recursive<TokenValue> = {};

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
