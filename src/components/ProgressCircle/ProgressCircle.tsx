import { type FC, useRef, ComponentProps } from 'react';
import { type Variants, motion, useInView, Transition } from 'framer-motion';
import { useProgressBar } from 'react-aria';
import { styled } from 'styled-system/jsx';
import { css, cva } from 'styled-system/css';

import Counter from './Counter';

const StyledContainer = styled('div', {
  base: {
    position: 'relative',
  },
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

const StyledCounterContainer = styled('label', {
  base: {
    position: 'absolute',
    size: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 'calc(var(--rx-progress-circle-size) / 5)',
    fontWeight: 'semibold',
  },
});

const StyledCircle = styled('circle', {
  base: {
    stroke: 'currentColor',
    strokeOpacity: 0.1,
    fill: 'transparent',
  },
});

const progressCircleStyle = cva({
  base: {
    stroke: 'currentColor',
    fill: 'transparent',
  },
});

interface ProgressCircleProps {
  value: number;
  min?: number;
  max?: number;
  duration?: number;
  delay?: number;
  spin?: boolean;
  size?: number;
  strokeWidth?: number;
  variant?: ComponentProps<typeof StyledContainer>['variant'];
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
  value = 0,
  duration = 3,
  delay = 0.5,
  spin = false,
  size = 100,
  strokeWidth = 6,
  variant,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useInView(ref);

  const center = size / 2;
  const radius = center - strokeWidth;
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
    <StyledContainer
      {...progressBarProps}
      className={css({ size: `${size}px`, '--rx-progress-circle-size': `${size}px` })}
      ref={ref}
      variant={variant}
      id='container'
    >
      <StyledCounterContainer {...labelProps}>
        <Counter from={0} to={percents} duration={duration + delay} />%
      </StyledCounterContainer>

      <svg viewBox={`0 0 ${size} ${size}`} version='1.1' xmlns='http://www.w3.org/2000/svg' width={size} height={size}>
        <StyledCircle role='presentation' cx={center} cy={center} r={radius} strokeWidth={strokeWidth} />
        <motion.circle
          className={progressCircleStyle()}
          role='presentation'
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDashoffset={fillPercents}
          strokeDasharray={circumference}
          transform={`rotate(-90 ${center} ${center})`}
          variants={variants}
          initial='hidden'
          animate={isVisible ? 'show' : 'hidden'}
        >
          {spin && percents !== 100 && (
            <animateTransform
              attributeName='transform'
              type='rotate'
              begin='0s'
              dur='1s'
              from={`0 ${center} ${center}`}
              to={`360 ${center} ${center}`}
              repeatCount='indefinite'
            />
          )}
        </motion.circle>
      </svg>
    </StyledContainer>
  );
};

export default ProgressCircle;
