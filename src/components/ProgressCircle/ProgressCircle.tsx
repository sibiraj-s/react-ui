import { type FC, useRef } from 'react';
import { type Variants, motion, useInView, Transition } from 'framer-motion';

import Counter from './Counter';
import { styled } from '../../stitches.config';

interface ProgressCircleProps {
  percents: number;
  duration?: number;
  delay?: number;
  size?: number;
  strokeWidth?: number;
}

const StyledContainer = styled('div', {
  position: 'relative',
});

const StyledCounterContainer = styled('div', {
  position: 'absolute',
  size: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: '$semiBold',
  fontSize: 'calc(var(--rx-progress-circle-size) / 5)',
  paddingLeft: 'calc(var(--rx-progress-circle-size) / 20)',
});

const StyledCircle = styled('circle', {
  stroke: '$successSolid',
  strokeOpacity: 0.1,
  fill: 'transparent',
});

const StyledSvg = styled('svg', {
  position: 'absolute',
  transform: 'rotate(-90deg)',
  overflow: 'visible',
});

const StyledProgressCircle = styled(motion.circle, {
  stroke: '$successSolid',
  fill: 'transparent',
});

const getValidPercents = (percents: number): number => {
  if (percents < 0) {
    return 0;
  }

  if (percents >= 100) {
    return 100;
  }

  return percents;
};

export const ProgressCircle: FC<ProgressCircleProps> = ({
  percents,
  duration = 3,
  delay = 0.5,
  size = 100,
  strokeWidth = 6,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useInView(ref);

  const radius = 45;
  const circumference = Math.ceil(2 * Math.PI * radius);

  const percentsToRender = getValidPercents(percents);
  const fillPercents = Math.abs(Math.ceil((circumference / 100) * (percentsToRender - 100)));

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
    <StyledContainer css={{ size, '--rx-progress-circle-size': `${size}px` }} ref={ref}>
      <StyledCounterContainer>
        <Counter from={0} to={percentsToRender} duration={duration + delay} />%
      </StyledCounterContainer>

      <svg viewBox='0 0 100 100' version='1.1' xmlns='http://www.w3.org/2000/svg' width={size} height={size}>
        <StyledCircle cx='50' cy='50' r={radius} strokeWidth={strokeWidth} />
      </svg>
      <StyledSvg viewBox='0 0 100 100' width={size} height={size} css={{ mt: -size }}>
        <StyledProgressCircle
          cx='50'
          cy='50'
          r={radius}
          strokeWidth={strokeWidth}
          strokeDashoffset={fillPercents}
          strokeDasharray={circumference}
          variants={variants}
          initial='hidden'
          animate={isVisible ? 'show' : 'hidden'}
        />
      </StyledSvg>
    </StyledContainer>
  );
};

export default ProgressCircle;
