import { FC } from 'react';
import { motion } from 'framer-motion';
import { useProgressBar } from '@react-aria/progress';
import { Box, BoxProps } from 'styled-system/jsx';
import { cx } from 'styled-system/css';
import { progressBarRecipe } from 'styled-system/recipes';

interface ProgressBarProps extends BoxProps {
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

  const [barFilingVariantProps, progressBarRestProps] = progressBarRecipe.splitVariantProps(rest);
  const styleClasses = progressBarRecipe(barFilingVariantProps);

  const { progressBarProps } = useProgressBar({
    value,
    minValue: min,
    maxValue: max,
    'aria-label': barWidth,
  });

  return (
    <Box
      {...progressBarRestProps}
      {...progressBarProps}
      className={cx(styleClasses.container, progressBarRestProps.className)}
    >
      <motion.div
        className={styleClasses.filing}
        initial={{ width: 0 }}
        animate={{
          width: barWidth,
        }}
        transition={{ duration, delay }}
      />
    </Box>
  );
};

export default ProgressBar;
