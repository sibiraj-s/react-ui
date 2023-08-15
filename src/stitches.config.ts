import { createStitches } from '@stitches/react';
import { gray, slate, tomato, blue, green, indigo, whiteA, blackA } from '@radix-ui/colors';
import * as Stitches from '@stitches/react';

// Read this first
// https://stitches.dev/docs/tokens#naming-convention

const spaces = {
  px: '1px',
  '0_5': '0.125rem',
  1: '0.25rem',
  '1_5': '0.375rem',
  2: '0.5rem',
  '2_5': '0.625rem',
  3: '0.75rem',
  '3_5': '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
};

export const utils = {
  // margin
  m: (value: Stitches.PropertyValue<'margin'>) => ({ margin: value }),
  mt: (value: Stitches.PropertyValue<'marginTop'>) => ({ marginTop: value }),
  mr: (value: Stitches.PropertyValue<'marginRight'>) => ({ marginRight: value }),
  mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({ marginBottom: value }),
  ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({ marginLeft: value }),
  my: (value: Stitches.PropertyValue<'marginTop'>) => ({ marginTop: value, marginBottom: value }),
  mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({ marginLeft: value, marginRight: value }),

  // padding
  p: (value: Stitches.PropertyValue<'padding'>) => ({ padding: value }),
  pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({ paddingRight: value }),
  pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({ paddingTop: value }),
  pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({ paddingBottom: value }),
  pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({ paddingLeft: value }),
  py: (value: Stitches.PropertyValue<'paddingTop'>) => ({ paddingTop: value, paddingBottom: value }),
  px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({ paddingLeft: value, paddingRight: value }),

  // border
  br: (value: Stitches.PropertyValue<'borderRadius'>) => ({ borderRadius: value }),
  brl: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({ borderTopLeft: value, borderBottomLeft: value }),
  brr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
    borderTopRight: value,
    borderBottomRight: value,
  }),

  // height, width
  size: (value: Stitches.PropertyValue<'width'>) => ({ height: value, width: value }),

  // computed sytles

  // heading margin
  // https://spectrum.adobe.com/page/heading/#Margins
  hmr: (value: Stitches.PropertyValue<'fontSize'>) => ({
    marginTop: `calc(${value} / 1.125)`,
    marginBottom: `calc(${value} * 0.25)`,
  }),
};

export const { styled, createTheme, globalCss, keyframes, config, getCssText, css } = createStitches({
  prefix: 'rxui',

  theme: {
    colors: {
      ...blue,
      ...indigo,
      ...slate,
      ...green,
      ...tomato,
      ...gray,
      ...whiteA,
      ...blackA,

      // black and white
      white: 'white',
      black: 'black',

      // primary shades
      accentBase: '$indigo1',
      accentBgSubtle: '$indigo2',
      accentBg: '$indigo3',
      accentBgHover: '$indigo4',
      accentBgActive: '$indigo5',
      accentLine: '$indigo6',
      accentBorder: '$indigo7',
      accentBorderHover: '$indigo8',
      accentSolid: '$indigo9',
      accentSolidHover: '$indigo10',
      accentText: '$indigo11',
      accentTextContrast: '$indigo12',

      // secondary shades
      secondaryBase: '$slate1',
      secondaryBgSubtle: '$slate2',
      secondaryBg: '$slate3',
      secondaryBgHover: '$slate4',
      secondaryBgActive: '$slate5',
      secondaryLine: '$slate6',
      secondaryBorder: '$slate7',
      secondaryBorderHover: '$slate8',
      secondarySolid: '$slate9',
      secondarySolidHover: '$slate10',
      secondaryText: '$slate11',
      secondaryTextContrast: '$slate12',

      // success
      successBase: '$green1',
      successBgSubtle: '$green2',
      successBg: '$green3',
      successBgHover: '$green4',
      successBgActive: '$green5',
      successLine: '$green6',
      successBorder: '$green7',
      successBorderHover: '$green8',
      successSolid: '$green9',
      successSolidHover: '$green10',
      successText: '$green11',
      successTextContrast: '$green12',

      // danger
      dangerBase: '$tomato1',
      dangerBgSubtle: '$tomato2',
      dangerBg: '$tomato3',
      dangerBgHover: '$tomato4',
      dangerBgActive: '$tomato5',
      dangerLine: '$tomato6',
      dangerBorder: '$tomato7',
      dangerBorderHover: '$tomato8',
      dangerSolid: '$tomato9',
      dangerSolidHover: '$tomato10',
      dangerText: '$tomato11',
      dangerTextContrast: '$tomato12',

      // primary shades
      neutralBase: '$gray1',
      neutralBgSubtle: '$gray2',
      neutralBg: '$gray3',
      neutralBgHover: '$gray4',
      neutralBgActive: '$gray5',
      neutralLine: '$gray6',
      neutralBorder: '$gray7',
      neutralBorderHover: '$gray8',
      neutralSolid: '$gray9',
      neutralSolidHover: '$gray10',
      neutralText: '$gray11',
      neutralTextContrast: '$gray12',

      // other colors
      muted: '$neutralText',
      default: '$neutralTextContrast',
    },
    space: {
      ...spaces,
    },
    sizes: {
      ...spaces,

      max: 'max-content',
      min: 'min-content',
    },
    fontSizes: {
      html: '16px', // keep in pixel, used as base for rem caluclation

      1: '0.688rem', // 11px
      2: '0.75rem', // 12px
      3: '0.875rem', // 14px
      4: '1rem', // 16px
      5: '1.25rem', // 20px
      6: '1.5rem', // 24px
      7: '1.75rem', // 28px
      8: '2rem', // 32px
      9: '2.25rem', // 36px
      10: '2.5rem', // 40px
      12: '3rem', // 48px

      // user tokens
      xxxxl: '$10',
      xxxl: '$8',
      xxl: '$7',
      xl: '$6',
      l: '$5',
      regular: '$4',
      sm: '$3',
      xs: '$2',
    },
    radii: {
      0: 0,
      1: '0.125rem', // 2px
      2: '0.25rem', // 4px
      3: '0.375rem', // 6px
      4: '0.5rem', // 8px
      5: '0.625rem', // 10px

      // user tokens
      none: '$0',
      roundedXs: '$1',
      roundedSm: '$2',
      rounded: '$3',
      roundedMd: '$4',
      roundedLg: '$5',
      circle: '50%',
      pill: '9999px',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      5: '500',
      6: '600',
      7: '700',
      8: '800',
      9: '900',
      10: '1000',
      max: '999',
    },
    fonts: {
      system: `-apple-system, BlinkMacSystemFont, 'Segoe UI (Custom)', Roboto, 'Helvetica Neue', 'Open Sans (Custom)', system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'`,
      body: '$system',
    },
    fontWeights: {
      1: 100,
      2: 200,
      3: 300,
      4: 400,
      5: 500,
      6: 600,
      7: 700,

      // user tokens
      normal: '$4',
      semiBold: '$6',
      medium: '$5',
      bold: '$7',
    },
    lineHeights: {
      1: 1,
      2: 1.3,
      3: 1.5,

      xs: '$1',
      sm: '$2',
      default: '$3',
    },
    letterSpacings: {
      space: '0.0025em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '1em',
    },
    borderWidths: {},
    borderStyles: {},
    shadows: {
      default: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);',
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      xxl: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      innner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    },
    transitions: {},
  },
  utils,
});

export type CSS = Stitches.CSS<typeof config>;
export type { VariantProps } from '@stitches/react';
