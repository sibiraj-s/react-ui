import { FC } from 'react';
import { motion } from 'framer-motion';
import { useProgressBar } from 'react-aria';
import { HTMLStyledProps, styled } from 'styled-system/jsx';
import { cva } from 'styled-system/css';

const barStyle = cva({
  base: {
    width: '100%',
    border: '1px solid',
    height: '1.5rem',
    borderRadius: 'md',
    overflow: 'hidden',
    borderColor: 'currentcolor',
    color: 'accent',
  },
});

const barFilingStyle = cva({
  base: {
    backgroundColor: 'currentColor',
    height: '100%',
  },

  variants: {
    striped: {
      true: {
        backgroundImage:
          'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)',
        backgroundSize: '1rem 1rem',
      },
    },
    animated: {
      true: {},
    },
  },
  compoundVariants: [
    {
      striped: true,
      animated: true,
      css: {
        animation: `stripedBg 1s linear infinite`,
      },
    },
  ],
});

const Bar = styled('div', barStyle);

interface ProgressBarProps extends HTMLStyledProps<typeof Bar> {
  value: number;
  min?: number;
  max?: number;
  duration?: number;
  delay?: number;
  striped?: boolean;
  animated?: boolean;
}

const getValidPercents = (value: number, min: number, max: number): number => {
  const percents = ((value - min) / (max - min)) * 100;

  if (percents < 0) {
    return 0;
  }

  if (percents >= 100) {
    return 100;
  }

  return percents;
};

const ProgressBar: FC<ProgressBarProps> = ({ min = 0, max = 100, value = 0, duration = 3, delay = 0.5, ...rest }) => {
  const percents = getValidPercents(value, min, max);
  const barWidth = `${percents}%`;
  const [barFilingVariantProps, progressBarRestProps] = barFilingStyle.splitVariantProps(rest);

  const { progressBarProps } = useProgressBar({
    value,
    minValue: min,
    maxValue: max,
    'aria-label': barWidth,
  });

  return (
    <Bar {...progressBarRestProps} {...progressBarProps}>
      <motion.div
        className={barFilingStyle(barFilingVariantProps)}
        initial={{ width: 0 }}
        animate={{
          width: barWidth,
        }}
        transition={{ duration, delay }}
      />
    </Bar>
  );
};

export default ProgressBar;
