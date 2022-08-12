import { ComponentProps } from 'react';

import { CSS, styled, VariantProps } from '../../stitches.config';
import Text from '../Text';

const StyledAlert = styled('div', {
  borderRadius: '$rounded',
  padding: '1rem',

  variants: {
    variant: {
      primary: {
        backgroundColor: '$accentBg',
        color: '$accentText',
      },
      secondary: {
        backgroundColor: '$secondaryBg',
        color: '$secondaryText',
      },
      success: {
        backgroundColor: '$successBg',
        color: '$successText',
      },
      warning: {
        backgroundColor: '$warningBg',
        color: '$warningText',
      },
      danger: {
        backgroundColor: '$dangerBg',
        color: '$dangerText',
      },
    },
  },
});

type AlertVariants = VariantProps<typeof StyledAlert>;
type AlertExtraVariants = { css?: CSS };

type AlertProps = AlertVariants & AlertExtraVariants & ComponentProps<typeof StyledAlert>;

export const Alert = (props: AlertProps) => {
  const { children, ...rest } = props;
  return (
    <StyledAlert {...rest}>
      <Text as='span'>{children}</Text>
    </StyledAlert>
  );
};

export default Alert;
