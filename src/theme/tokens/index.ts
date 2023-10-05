import { defineTokens } from '@pandacss/dev';

import createTokenValues from '../utils/create-token-values';
import fonts from './fonts';
import fontSizes from './font-sizes';
import zIndices from './zIndices';

const tokens = defineTokens({
  fontSizes: createTokenValues(fontSizes),
  zIndex: createTokenValues(zIndices),
  fonts: createTokenValues(fonts),
});

export default tokens;
