import { FC } from 'react';
import { motion } from 'framer-motion';
import { useProgressBar } from 'react-aria';

import { VariantProps, keyframes, styled } from '../../stitches.config';

const Bar = styled('div', {
  width: '100%',
  border: '1px solid',
  borderColor: '$successBorder',
  height: '1.5rem',
  borderRadius: '$rounded',
  overflow: 'hidden',
});

const progressStripes = keyframes({
  '0%': { backgroundPosition: '1rem 0' },
  '100%': { backgroundPosition: '0 0' },
});

const BarFiling = styled(motion.div, {
  backgroundColor: '$successSolid',
  height: '100%',

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
        animation: `${progressStripes} 1s linear infinite`,
      },
    },
  ],
});

interface ProgressBarProps {
  value: number;
  min?: number;
  max?: number;
  duration?: number;
  delay?: number;
  striped?: VariantProps<typeof BarFiling>['striped'];
  animated?: VariantProps<typeof BarFiling>['animated'];
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

const ProgressBar: FC<ProgressBarProps> = ({
  min = 0,
  max = 100,
  value = 0,
  duration = 3,
  delay = 0.5,
  striped = false,
  animated = false,
}) => {
  const percents = getValidPercents(value, min, max);
  const barWidth = `${percents}%`;

  const { progressBarProps } = useProgressBar({
    value,
    minValue: min,
    maxValue: max,
    'aria-label': barWidth,
  });

  return (
    <Bar {...progressBarProps}>
      <BarFiling
        initial={{ width: 0 }}
        animate={{
          width: barWidth,
        }}
        transition={{ duration, delay }}
        striped={striped}
        animated={animated}
      />
    </Bar>
  );
};

export default ProgressBar;
