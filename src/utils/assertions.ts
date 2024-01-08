export const isFunction = (value: unknown): value is CallableFunction => {
  return typeof value === 'function';
};
