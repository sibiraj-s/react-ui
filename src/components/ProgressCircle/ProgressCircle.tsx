import { type FC, useRef } from 'react';
import { type Variants, motion, useInView, Transition } from 'framer-motion';
import { useProgressBar } from 'react-aria';

import Counter from './Counter';
import { VariantProps, styled } from '../../stitches.config';

const StyledContainer = styled('div', {
  position: 'relative',
});

const StyledCounterContainer = styled('label', {
  position: 'absolute',
  size: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: '$semiBold',
  fontSize: 'calc(var(--rx-progress-circle-size) / 5)',
  paddingLeft: 'calc(var(--rx-progress-circle-size) / 20)',
});

const StyledSvg = styled('svg', {
  variants: {
    variant: {
      primary: {
        color: '$accentSolid',
      },
      success: {
        color: '$successSolid',
      },
      danger: {
        color: '$dangerSolid',
      },
      muted: {
        color: '$neutralSolid',
      },
    },
  },
  defaultVariants: {
    variant: 'success',
  },
});

const StyledCircle = styled('circle', {
  stroke: 'CurrentColor',
  strokeOpacity: 0.1,
  fill: 'transparent',
});

const StyledProgressCircle = styled(motion.circle, {
  stroke: 'CurrentColor',
  fill: 'transparent',
});

interface ProgressCircleProps {
  value: number;
  min?: number;
  max?: number;
  duration?: number;
  delay?: number;
  size?: number;
  strokeWidth?: number;
  variant?: VariantProps<typeof StyledSvg>['variant'];
}

const getPercents = (value: number, min: number, max: number): number => {
  const percents = ((value - min) / (max - min)) * 100;

  if (percents < 0) {
    return 0;
  }

  if (percents >= 100) {
    return 100;
  }

  return percents;
};

export const ProgressCircle: FC<ProgressCircleProps> = ({
  min = 0,
  max = 100,
  value,
  duration = 3,
  delay = 0.5,
  size = 100,
  strokeWidth = 6,
  variant,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useInView(ref);

  const radius = 45;
  const circumference = Math.ceil(2 * Math.PI * radius);

  const percents = getPercents(value, min, max);
  const fillPercents = Math.abs(Math.ceil((circumference / 100) * (percents - 100)));

  const { progressBarProps, labelProps } = useProgressBar({
    minValue: min,
    maxValue: max,
    value,
    label: `${percents}%`,
  });

  const transition: Transition = {
    duration,
    delay,
    type: 'spring',
    bounce: 0,
  };

  const variants: Variants = {
    hidden: {
      strokeDashoffset: circumference,
      transition,
    },
    show: {
      strokeDashoffset: fillPercents,
      transition,
    },
  };

  return (
    <StyledContainer css={{ size, '--rx-progress-circle-size': `${size}px` }} ref={ref} {...progressBarProps}>
      <StyledCounterContainer {...labelProps}>
        <Counter from={0} to={percents} duration={duration + delay} />%
      </StyledCounterContainer>

      <StyledSvg
        viewBox='0 0 100 100'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        width={size}
        height={size}
        variant={variant}
      >
        <StyledCircle cx='50' cy='50' r={radius} strokeWidth={strokeWidth} />
        <StyledProgressCircle
          cx='50'
          cy='50'
          r={radius}
          strokeWidth={strokeWidth}
          strokeDashoffset={fillPercents}
          strokeDasharray={circumference}
          transform='rotate(-90 50 50)'
          variants={variants}
          initial='hidden'
          animate={isVisible ? 'show' : 'hidden'}
        />
      </StyledSvg>
    </StyledContainer>
  );
};

export default ProgressCircle;
