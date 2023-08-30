import setRef, { PossibleRef } from './set-ref';

type ComposeRefsReturnType<T> = (node: T) => void;

const composeRefs = <T>(...refs: PossibleRef<T>[]): ComposeRefsReturnType<T> => {
  return (node: T) => refs.forEach((ref) => setRef(ref, node));
};

export default composeRefs;
