import { cva } from 'styled-system/css';
import { HTMLStyledProps, styled } from 'styled-system/jsx';
import rx from '@/utils/factory';

export const textStyle = cva({
  variants: {
    size: {
      sm: {
        fontSize: 'sm',
      },
      xs: {
        fontSize: 'xs',
      },
      md: {
        fontSize: 'md',
      },
      '1': {
        fontSize: '4xl',
      },
      '2': {
        fontSize: '3xl',
      },
      '3': {
        fontSize: '2xl',
      },
      '4': {
        fontSize: 'xl',
      },
      '5': {
        fontSize: 'lg',
      },
      '6': {
        fontSize: '$base',
      },
    },
    variant: {
      primary: {
        color: '$accentSolid',
      },
      secondary: {
        color: '$secondarySolid',
      },
      success: {
        color: '$successSolid',
      },
      danger: {
        color: '$dangerSolid',
      },
      muted: {
        color: '$muted',
      },
    },
    weight: {
      bold: {
        fontWeight: 'bold',
      },
    },
  },
});

export const Text = styled(rx.p, textStyle);
export type TextProps = HTMLStyledProps<typeof Text>;

export default Text;
