import { MutableRefObject, useMemo, useRef } from 'react';

import setRef, { PossibleRef } from '../../utils/set-ref';

const useObjectRef = <T>(forwardedRef?: PossibleRef<T>): MutableRefObject<T> => {
  const ref = useRef<T>();

  const objRef = useMemo(
    () => ({
      get current() {
        return ref.current;
      },
      set current(value) {
        ref.current = value;
        setRef(forwardedRef, value);
      },
    }),
    [forwardedRef]
  );

  return objRef as MutableRefObject<T>;
};

export default useObjectRef;
