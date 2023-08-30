import { MutableRefObject, Ref } from 'react';

export type PossibleRef<T> = Ref<T> | undefined;

const setRef = <T>(ref: PossibleRef<T>, value: T): void => {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref !== null && ref !== undefined) {
    (ref as MutableRefObject<T>).current = value;
  }
};

export default setRef;
