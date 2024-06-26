import { type FC, useRef } from 'react';
import { type Variants, motion, useInView, Transition } from 'framer-motion';
import { useProgressBar } from '@react-aria/progress';
import { Box } from 'styled-system/jsx';
import { progressCircleRecipe } from 'styled-system/recipes';
import { JsxStyleProps } from 'styled-system/types';

import Counter from './Counter';

type ProgressCircleStyleProps = Pick<JsxStyleProps, 'color' | 'colorPalette'>;

interface ProgressCircleOwnProps {
  value: number;
  min?: number;
  max?: number;
  duration?: number;
  delay?: number;
  spin?: boolean;
  size?: number;
  strokeWidth?: number;
}

type ProgressCircleProps = ProgressCircleOwnProps & ProgressCircleStyleProps;

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

export const ProgressCircle: FC<ProgressCircleProps> = (props) => {
  const {
    value = 0,
    min = 0,
    max = 100,
    duration = 3,
    delay = 0.5,
    spin = false,
    size = 100,
    strokeWidth = 6,
    ...rest
  } = props;

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

  const styleClasses = progressCircleRecipe();

  return (
    <Box
      {...progressBarProps}
      style={{
        height: `${size}px`,
        width: `${size}px`,
        '--rx-progress-circle-size': `${size}px`,
      }}
      ref={ref}
      className={styleClasses.container}
      {...rest}
    >
      <label {...labelProps} className={styleClasses.label}>
        <Counter from={0} to={percents} duration={duration + delay} />%
      </label>

      <svg viewBox={`0 0 ${size} ${size}`} version='1.1' xmlns='http://www.w3.org/2000/svg' width={size} height={size}>
        <circle
          className={styleClasses.circle}
          role='presentation'
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <motion.circle
          className={styleClasses.progress}
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
    </Box>
  );
};

export default ProgressCircle;
