import { ComponentProps, ElementRef, forwardRef } from 'react';
import { styled } from 'styled-system/jsx';

export const StyledSpinner = styled('div', {
  base: {
    aspectRatio: 'square',
    color: 'accent',
  },
  variants: {
    size: {
      xxs: {
        width: '4',
      },
      xs: {
        width: '5',
      },
      sm: {
        width: '8',
      },
      md: {
        width: '12',
      },
      lg: {
        width: '14',
      },
      xl: {
        width: '20',
      },
      '2xl': {
        width: '24',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

type SpinnerVariantProps = ComponentProps<typeof StyledSpinner>;
type SpinnerExtraProps = {
  strokeWidth?: number;
  percents?: number;
};
type SpinnerOwnProps = SpinnerVariantProps & SpinnerExtraProps;

type SpinnerElementRef = ElementRef<typeof StyledSpinner>;
type SpinnerProps = SpinnerOwnProps;

export const Spinner = forwardRef<SpinnerElementRef, SpinnerProps>((props, forwardedRef) => {
  const { strokeWidth = 10, percents = 75 } = props;

  const size = 100;
  const center = size / 2;
  const radius = center - strokeWidth;
  const circumference = Math.ceil(2 * Math.PI * radius);

  const fillPercents = Math.abs(Math.ceil((circumference / 100) * (percents - 100)));

  return (
    <StyledSpinner {...props} ref={forwardedRef}>
      <svg viewBox={`0 0 ${size} ${size}`} version='1.1' xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
        <circle
          role='presentation'
          cx={center}
          cy={center}
          r={radius}
          stroke='currentColor'
          strokeWidth={strokeWidth}
          strokeOpacity='0.1'
          fill='transparent'
        />
        <circle
          role='presentation'
          cx={center}
          cy={center}
          r={radius}
          stroke='currentColor'
          strokeWidth={strokeWidth}
          strokeDashoffset={fillPercents}
          fill='transparent'
          strokeDasharray={circumference}
          transform={`rotate(-90 ${center} ${center})`}
        >
          <animateTransform
            attributeName='transform'
            type='rotate'
            begin='0s'
            dur='1s'
            from={`0 ${center} ${center}`}
            to={`360 ${center} ${center}`}
            repeatCount='indefinite'
          />
        </circle>
      </svg>
    </StyledSpinner>
  );
});

Spinner.displayName = 'Spinner';

export default Spinner;
