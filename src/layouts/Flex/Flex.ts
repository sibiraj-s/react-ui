import { styled } from '../../stitches.config';
import Box from '../Box';

export const Flex = styled(Box, {
  display: 'flex',

  variants: {
    direction: {
      r: {
        flexDirection: 'row',
      },
      c: {
        flexDirection: 'column',
      },
      rr: {
        flexDirection: 'row-reverse',
      },
      cr: {
        flexDirection: 'column-reverse',
      },
    },
    align: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
      stretch: {
        alignItems: 'stretch',
      },
      baseline: {
        alignItems: 'baseline',
      },
    },
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
      between: {
        justifyContent: 'space-between',
      },
    },
    wrap: {
      no: {
        flexWrap: 'nowrap',
      },
      wrap: {
        flexWrap: 'wrap',
      },
      reverse: {
        flexWrap: 'wrap-reverse',
      },
    },
    gap: {
      1: {
        gap: '$1',
      },
      2: {
        gap: '$2',
      },
      3: {
        gap: '$3',
      },
      4: {
        gap: '$4',
      },
      5: {
        gap: '$5',
      },
      6: {
        gap: '$6',
      },
      7: {
        gap: '$7',
      },
      8: {
        gap: '$8',
      },
      9: {
        gap: '$9',
      },
    },
    spacing: {
      sm: {
        gap: '$2',
      },
      md: {
        gap: '$4',
      },
      lg: {
        gap: '$6',
      },
      xl: {
        gap: '$8',
      },
      xxl: {
        gap: '$10',
      },
    },
  },
  defaultVariants: {
    direction: 'r',
    align: 'stretch',
    justify: 'start',
    wrap: 'no',
  },
});

export default Flex;
