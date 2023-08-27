import { definePreset } from '@pandacss/dev';
import { PropertyValue } from 'styled-system/types/csstype';

import createTokenValues from './theme/utils/create-token-values';
import normalize from './normalize';
import fonts from './theme/fonts';
import fontSizes from './theme/font-sizes';
import zIndices from './theme/zIndices';

export const preset = definePreset({
  globalCss: normalize,
  theme: {
    extend: {
      tokens: {
        fontSizes: createTokenValues(fontSizes),
        zIndex: createTokenValues(zIndices),
        fonts: createTokenValues(fonts),
      },
      semanticTokens: {
        colors: createTokenValues({
          // primary shades
          accentBase: '{colors.blue.100}',
          accentBgSubtle: '{colors.blue.200}',
          accentBg: '{colors.blue.300}',
          accentBgHover: '{colors.blue.400}',
          accentBgActive: '{colors.blue.500}',
          accentLine: '{colors.blue.600}',
          accentSolid: '{colors.blue.700}',
          accentSolidHover: '{colors.blue.800}',
          accentText: '{colors.blue.900}',
          accentTextContrast: '{colors.blue.950}',

          // secondary shades
          secondaryBase: '{colors.slate.100}',
          secondaryBgSubtle: '{colors.slate.200}',
          secondaryBg: '{colors.slate.300}',
          secondaryBgHover: '{colors.slate.400}',
          secondaryBgActive: '{colors.slate.500}',
          secondaryLine: '{colors.slate.600}',
          secondarySolid: '{colors.slate.700}',
          secondarySolidHover: '{colors.slate.800}',
          secondaryText: '{colors.slate.900}',
          secondaryTextContrast: '{colors.slate.950}',

          // success
          successBase: '{colors.$green1}',
          successBgSubtle: '{colors.$green2}',
          successBg: '{colors.$green3}',
          successBgHover: '{colors.$green4}',
          successBgActive: '{colors.$green5}',
          successLine: '{colors.$green6}',
          successSolid: '{colors.emerald.700}',
          successSolidHover: '{colors.$green10}',
          successText: '{colors.$green11}',
          successTextContrast: '{colors.$green12}',

          // danger
          dangerBase: '{colors.red.100}',
          dangerBgSubtle: '{colors.red.200}',
          dangerBg: '{colors.red.300}',
          dangerBgHover: '{colors.red.400}',
          dangerBgActive: '{colors.red.500}',
          dangerLine: '{colors.red.600}',
          dangerSolid: '{colors.red.700}',
          dangerSolidHover: '{colors.red.800}',
          dangerText: '{colors.red.900}',
          dangerTextContrast: '{colors.red.950}',

          // primary shades
          neutralBase: '{colors.gray.100}',
          neutralBgSubtle: '{colors.gray.200}',
          neutralBg: '{colors.gray.300}',
          neutralBgHover: '{colors.gray.400}',
          neutralBgActive: '{colors.gray.500}',
          neutralLine: '{colors.gray.600}',
          neutralSolid: '{colors.gray.700}',
          neutralSolidHover: '{colors.gray.800}',
          neutralText: '{colors.gray.900}',
          neutralTextContrast: '{colors.gray.950}',

          // other colors
          muted: '{colors.gray.500}',
          body: '{colors.gray.950}',
        }),
      },
      keyframes: {
        stripedBg: {
          '0%': { backgroundPosition: '1rem 0' },
          '100%': { backgroundPosition: '0 0' },
        },
      },
    },
  },
  utilities: {
    extend: {
      size: {
        className: 'size',
        values: 'sizes',
        transform(value: PropertyValue<'size'>) {
          return { height: value, width: value };
        },
      },
    },
  },
});

export default preset;
