import { defineSemanticTokens } from '@pandacss/dev';
import createTokenValues from './utils/create-token-values';

const semanticTokens = defineSemanticTokens({
  colors: createTokenValues({
    // primary shades
    accentBase: '{colors.blue.50}',
    accentBgSubtle: '{colors.blue.100}',
    accentBg: '{colors.blue.200}',
    accentBgHover: '{colors.blue.300}',
    accentBgActive: '{colors.blue.400}',
    accentLine: '{colors.blue.500}',
    accentBorder: '{colors.blue.600}',
    accentSolid: '{colors.blue.700}',
    accentSolidHover: '{colors.blue.800}',
    accentText: '{colors.blue.900}',
    accentTextContrast: '{colors.blue.950}',

    // secondary shades
    secondaryBase: '{colors.slate.50}',
    secondaryBgSubtle: '{colors.slate.100}',
    secondaryBg: '{colors.slate.200}',
    secondaryBgHover: '{colors.slate.300}',
    secondaryBgActive: '{colors.slate.400}',
    secondaryLine: '{colors.slate.500}',
    secondaryBorder: '{colors.slate.600}',
    secondarySolid: '{colors.slate.700}',
    secondarySolidHover: '{colors.slate.800}',
    secondaryText: '{colors.slate.900}',
    secondaryTextContrast: '{colors.slate.950}',

    // success
    successBase: '{colors.green.50}',
    successBgSubtle: '{colors.green.100}',
    successBg: '{colors.green.200}',
    successBgHover: '{colors.green.300}',
    successBgActive: '{colors.green.400}',
    successLine: '{colors.green.500}',
    successBorder: '{colors.green.600}',
    successSolid: '{colors.emerald.700}',
    successSolidHover: '{colors.green.800}',
    successText: '{colors.green.900}',
    successTextContrast: '{colors.green.950}',

    // danger
    dangerBase: '{colors.red.50}',
    dangerBgSubtle: '{colors.red.100}',
    dangerBg: '{colors.red.200}',
    dangerBgHover: '{colors.red.300}',
    dangerBgActive: '{colors.red.400}',
    dangerLine: '{colors.red.500}',
    dangerBorder: '{colors.red.600}',
    dangerSolid: '{colors.red.700}',
    dangerSolidHover: '{colors.red.800}',
    dangerText: '{colors.red.900}',
    dangerTextContrast: '{colors.red.950}',

    // primary shades
    neutralBase: '{colors.gray.50}',
    neutralBgSubtle: '{colors.gray.100}',
    neutralBg: '{colors.gray.200}',
    neutralBgHover: '{colors.gray.300}',
    neutralBgActive: '{colors.gray.400}',
    neutralLine: '{colors.gray.500}',
    neutralBorder: '{colors.gray.600}',
    neutralSolid: '{colors.gray.700}',
    neutralSolidHover: '{colors.gray.800}',
    neutralText: '{colors.gray.900}',
    neutralTextContrast: '{colors.gray.950}',

    // other colors
    muted: '{colors.gray.500}',
    body: '{colors.gray.950}',
  }),
});

export default semanticTokens;
