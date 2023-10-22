import { FC } from 'react';
import { motion } from 'framer-motion';
import { useProgressBar } from 'react-aria';
import { HTMLStyledProps, styled } from 'styled-system/jsx';
import { cx, sva } from 'styled-system/css';

export const progressBarStyle = sva({
  slots: ['container', 'filing'],
  base: {
    container: {
      width: '100%',
      border: '1px solid',
      height: '1.5rem',
      borderRadius: 'md',
      overflow: 'hidden',
      borderColor: 'currentcolor',
    },
    filing: {
      backgroundColor: 'currentColor',
      height: '100%',
    },
  },
  variants: {
    animated: {
      true: {},
    },
    striped: {
      true: {
        filing: {
          backgroundImage:
            'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)',
          backgroundSize: '1rem 1rem',
        },
      },
    },
  },
  compoundVariants: [
    {
      striped: true,
      animated: true,
      css: {
        filing: {
          animation: `stripedBg 1s linear infinite`,
        },
      },
    },
  ],
  defaultVariants: {},
});

interface ProgressBarProps extends HTMLStyledProps<'div'> {
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

export const ProgressBar: FC<ProgressBarProps> = ({
  min = 0,
  max = 100,
  value = 0,
  duration = 3,
  delay = 0.5,
  ...rest
}) => {
  const percents = getValidPercents(value, min, max);
  const barWidth = `${percents}%`;

  const [barFilingVariantProps, progressBarRestProps] = progressBarStyle.splitVariantProps(rest);
  const styleClasses = progressBarStyle(barFilingVariantProps);

  const { progressBarProps } = useProgressBar({
    value,
    minValue: min,
    maxValue: max,
    'aria-label': barWidth,
  });

  return (
    <styled.div
      {...progressBarRestProps}
      {...progressBarProps}
      className={cx(styleClasses.container, progressBarRestProps.className)}
      color={progressBarRestProps.color ?? 'primary'}
    >
      <motion.div
        className={styleClasses.filing}
        initial={{ width: 0 }}
        animate={{
          width: barWidth,
        }}
        transition={{ duration, delay }}
      />
    </styled.div>
  );
};

export default ProgressBar;
