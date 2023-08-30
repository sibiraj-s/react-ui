import { describe, expect, it, vi } from 'vitest';
import { createRef } from 'react';

import setRef from './set-ref';

describe('SetRef', () => {
  it('should do nothing if ref is not provided', () => {
    expect(setRef(undefined, undefined)).toBeUndefined();
  });

  it('should call ref callback', () => {
    const ref = vi.fn();
    setRef(ref, undefined);

    expect(ref).toHaveBeenCalledWith(undefined);

    setRef(ref, 1);
    expect(ref).toHaveBeenCalledWith(1);
  });

  it('should set value to current', () => {
    const ref = createRef();
    setRef(ref, undefined);

    expect(ref.current).toBe(undefined);

    setRef(ref, 1);
    expect(ref.current).toBe(1);
  });
});
