import { FC } from 'react';
import { motion } from 'framer-motion';

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
    animateStripes: {
      true: {},
    },
  },
  compoundVariants: [
    {
      striped: true,
      animateStripes: true,
      css: {
        animation: `${progressStripes} 1s linear infinite`,
      },
    },
  ],
});

interface ProgressBarProps {
  percents: number;
  duration?: number;
  delay?: number;
  striped: VariantProps<typeof BarFiling>['striped'];
  animateStripes: VariantProps<typeof BarFiling>['animateStripes'];
}

const getValidPercents = (percents: number): number => {
  if (percents < 0) {
    return 0;
  }

  if (percents >= 100) {
    return 100;
  }

  return percents;
};

const ProgressBar: FC<ProgressBarProps> = ({
  percents = 0,
  duration = 3,
  delay = 0.5,
  striped = false,
  animateStripes = false,
}) => {
  const percentsToRender = getValidPercents(percents);

  return (
    <Bar>
      <BarFiling
        initial={{ width: 0 }}
        animate={{
          width: `${percentsToRender}%`,
        }}
        transition={{ duration, delay }}
        striped={striped}
        animateStripes={animateStripes}
      />
    </Bar>
  );
};

export default ProgressBar;
