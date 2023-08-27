import { definePreset } from '@pandacss/dev';
import { PropertyValue } from 'styled-system/types/csstype';

import createTokenValues from './theme/utils/create-token-values';
import normalize from './normalize';
import colors from './theme/colors';
import fonts from './theme/fonts';
import fontSizes from './theme/font-sizes';
import zIndices from './theme/zIndices';

export const preset = definePreset({
  globalCss: normalize,
  theme: {
    extend: {
      tokens: {
        colors: createTokenValues(colors),
        fontSizes: createTokenValues(fontSizes),
        zIndex: createTokenValues(zIndices),
        fonts: createTokenValues(fonts),
      },
      semanticTokens: {
        colors: createTokenValues({
          // primary shades
          accentBase: '{colors.$indigo1}',
          accentBgSubtle: '{colors.$indigo2}',
          accentBg: '{colors.$indigo3}',
          accentBgHover: '{colors.$indigo4}',
          accentBgActive: '{colors.$indigo5}',
          accentLine: '{colors.$indigo6}',
          accentBorder: '{colors.$indigo7}',
          accentBorderHover: '{colors.$indigo8}',
          accentSolid: '{colors.$indigo9}',
          accentSolidHover: '{colors.$indigo10}',
          accentText: '{colors.$indigo11}',
          accentTextContrast: '{colors.$indigo12}',

          // secondary shades
          secondaryBase: '{colors.$slate1}',
          secondaryBgSubtle: '{colors.$slate2}',
          secondaryBg: '{colors.$slate3}',
          secondaryBgHover: '{colors.$slate4}',
          secondaryBgActive: '{colors.$slate5}',
          secondaryLine: '{colors.$slate6}',
          secondaryBorder: '{colors.$slate7}',
          secondaryBorderHover: '{colors.$slate8}',
          secondarySolid: '{colors.$slate9}',
          secondarySolidHover: '{colors.$slate10}',
          secondaryText: '{colors.$slate11}',
          secondaryTextContrast: '{colors.$slate12}',

          // success
          successBase: '{colors.$green1}',
          successBgSubtle: '{colors.$green2}',
          successBg: '{colors.$green3}',
          successBgHover: '{colors.$green4}',
          successBgActive: '{colors.$green5}',
          successLine: '{colors.$green6}',
          successBorder: '{colors.$green7}',
          successBorderHover: '{colors.$green8}',
          successSolid: '{colors.$green9}',
          successSolidHover: '{colors.$green10}',
          successText: '{colors.$green11}',
          successTextContrast: '{colors.$green12}',

          // danger
          dangerBase: '{colors.$tomato1}',
          dangerBgSubtle: '{colors.$tomato2}',
          dangerBg: '{colors.$tomato3}',
          dangerBgHover: '{colors.$tomato4}',
          dangerBgActive: '{colors.$tomato5}',
          dangerLine: '{colors.$tomato6}',
          dangerBorder: '{colors.$tomato7}',
          dangerBorderHover: '{colors.$tomato8}',
          dangerSolid: '{colors.$tomato9}',
          dangerSolidHover: '{colors.$tomato10}',
          dangerText: '{colors.$tomato11}',
          dangerTextContrast: '{colors.$tomato12}',

          // primary shades
          neutralBase: '{colors.$gray1}',
          neutralBgSubtle: '{colors.$gray2}',
          neutralBg: '{colors.$gray3}',
          neutralBgHover: '{colors.$gray4}',
          neutralBgActive: '{colors.$gray5}',
          neutralLine: '{colors.$gray6}',
          neutralBorder: '{colors.$gray7}',
          neutralBorderHover: '{colors.$gray8}',
          neutralSolid: '{colors.$gray9}',
          neutralSolidHover: '{colors.$gray10}',
          neutralText: '{colors.$gray11}',
          neutralTextContrast: '{colors.$gray12}',

          // other colors
          muted: '{colors.$gray11}',
          body: '{colors.$gray12}',
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
