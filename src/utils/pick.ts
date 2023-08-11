const pick = <T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> => {
  const ret: Pick<T, K> = {} as Pick<T, K>;

  keys.forEach((key) => {
    const value = obj[key];
    if (typeof value === 'undefined') {
      return;
    }
    ret[key] = value;
  });

  return ret;
};

export default pick;
