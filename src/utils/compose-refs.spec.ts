import { describe, expect, it, vi } from 'vitest';
import { createRef } from 'react';

import composeRefs from './compose-refs';

describe('ComposeRefs', () => {
  it('should merge refs', () => {
    const ref1 = vi.fn();
    const ref2 = createRef();
    const composedRef = composeRefs(ref1, ref2);

    composedRef(1);
    expect(ref1).toHaveBeenCalledWith(1);
    expect(ref2.current).toBe(1);
  });
});
