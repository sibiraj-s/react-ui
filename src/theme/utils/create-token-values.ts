/* eslint-disable no-continue */

import { Token, Recursive } from 'styled-system/types/composition';

const createTokenValues = (
  properties: Record<string | number, string | number | Record<string, string>>,
  prefix = true,
  solidAsDefault = false
): Recursive<Token> => {
  const tokens: Recursive<Token> = {};

  for (const key in properties) {
    if (!key) {
      continue;
    }

    const k = prefix ? `$${key}` : key;
    const value = properties[k];

    if (typeof value === 'object') {
      tokens[k] = createTokenValues(value, prefix, solidAsDefault);
      continue;
    }

    if (solidAsDefault && k === 'solid') {
      tokens.DEFAULT = {
        value: properties[k],
      };
    }

    tokens[k] = {
      value: properties[k],
    };
  }

  return tokens;
};

export default createTokenValues;
