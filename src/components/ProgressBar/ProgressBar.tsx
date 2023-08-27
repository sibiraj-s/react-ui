import { ComponentProps, FC } from 'react';
import { motion } from 'framer-motion';
import { useProgressBar } from 'react-aria';
import { styled } from 'styled-system/jsx';
import { cva } from 'styled-system/css';

const Bar = styled('div', {
  base: {
    width: '100%',
    border: '1px solid',
    height: '1.5rem',
    borderRadius: 'md',
    overflow: 'hidden',
    borderColor: 'currentcolor',
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
    variant: 'primary',
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

interface ProgressBarProps {
  value: number;
  min?: number;
  max?: number;
  duration?: number;
  delay?: number;
  variant?: ComponentProps<typeof Bar>['variant'];
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

const ProgressBar: FC<ProgressBarProps> = ({
  min = 0,
  max = 100,
  value = 0,
  duration = 3,
  delay = 0.5,
  variant,
  ...rest
}) => {
  const percents = getValidPercents(value, min, max);
  const barWidth = `${percents}%`;
  const [barFilingVariantProps] = barFilingStyle.splitVariantProps(rest);

  const { progressBarProps } = useProgressBar({
    value,
    minValue: min,
    maxValue: max,
    'aria-label': barWidth,
  });

  return (
    <Bar {...progressBarProps} variant={variant}>
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
