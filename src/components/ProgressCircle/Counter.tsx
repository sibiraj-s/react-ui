import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { type FC, useEffect, useRef } from 'react';

interface CounterProps {
  from: number;
  to: number;
  duration: number;
}

const Counter: FC<CounterProps> = ({ from, to, duration }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => {
    return Math.round(latest);
  });

  const ref = useRef(null);
  const inView = useInView(ref);

  // while in view animate the count
  useEffect(() => {
    if (inView) {
      animate(count, to, { duration });
    }
  }, [count, inView, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export default Counter;
