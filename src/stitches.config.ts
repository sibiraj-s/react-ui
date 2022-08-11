import { createStitches } from '@stitches/react';
import {
  gray,
  mauve,
  slate,
  sage,
  olive,
  sand,
  tomato,
  red,
  crimson,
  pink,
  plum,
  purple,
  violet,
  indigo,
  blue,
  sky,
  mint,
  cyan,
  teal,
  green,
  grass,
  lime,
  yellow,
  amber,
  orange,
  brown,
  bronze,
  gold,
} from '@radix-ui/colors';
import type * as Stitches from '@stitches/react';

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

export const { styled, createTheme, globalCss, keyframes, config, getCssText } = createStitches({
  prefix: 'hrx',

  theme: {
    colors: {
      ...gray,
      ...mauve,
      ...slate,
      ...sage,
      ...olive,
      ...sand,
      ...tomato,
      ...red,
      ...crimson,
      ...pink,
      ...plum,
      ...purple,
      ...violet,
      ...indigo,
      ...blue,
      ...sky,
      ...mint,
      ...cyan,
      ...teal,
      ...green,
      ...grass,
      ...lime,
      ...yellow,
      ...amber,
      ...orange,
      ...brown,
      ...bronze,
      ...gold,

      // black and white
      white: 'white',
      black: 'black',

      // primary shades
      accentBase: '$blue1',
      accentBgSubtle: '$blue2',
      accentBg: '$blue3',
      accentBgHover: '$blue4',
      accentBgActive: '$blue5',
      accentLine: '$blue6',
      accentBorder: '$blue7',
      accentBorderHover: '$blue8',
      accentSolid: '$blue9',
      accentSolidHover: '$blue10',
      accentText: '$blue11',
      accentTextContrast: '$blue12',

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
      dangerBase: '$red1',
      dangerBgSubtle: '$red2',
      dangerBg: '$red3',
      dangerBgHover: '$red4',
      dangerBgActive: '$red5',
      dangerLine: '$red6',
      dangerBorder: '$red7',
      dangerBorderHover: '$red8',
      dangerSolid: '$red9',
      dangerSolidHover: '$red10',
      dangerText: '$red11',
      dangerTextContrast: '$red12',

      // other colors
      muted: '$gray11',
      default: '$gray12',
    },
    space: {
      ...spaces,

      inputPaddingY: '$1_5',
      inputPaddingX: '$3',
      buttonPaddingY: '$inputPaddingY',
      buttonPaddingX: '$inputPaddingX',
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
      arial: 'Arial, Helvetica, sans-serif',
      body: '$arial',
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
      bold: '$7',
    },
    lineHeights: {
      1: 1,
      2: 1.5,

      default: '$2',
    },
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    shadows: {},
    transitions: {},
  },
  utils: {
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
  },
});

export type CSS = Stitches.CSS<typeof config>;
export type { VariantProps } from '@stitches/react';
