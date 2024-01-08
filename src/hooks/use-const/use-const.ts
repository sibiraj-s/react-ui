import { useRef } from 'react';

import runIfFn from '@/utils/run-if-fn';

type InitValue<T> = () => T;

const useConst = <T extends any>(initialValue: T | InitValue<T>): T => {
  const ref = useRef<T | null>(null);

  if (ref.current === null) {
    ref.current = typeof initialValue === 'function' ? (initialValue as InitValue<T>)() : initialValue;
    ref.current = runIfFn(initialValue);
  }

  return ref.current;
};

export default useConst;
