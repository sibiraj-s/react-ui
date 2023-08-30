import { describe, expect, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react';

import useConst from './use-const';

describe('UseConst', () => {
  it('should return the given constant', () => {
    const { result } = renderHook(() => useConst('Hello world!'));
    expect(result.current).toBe('Hello world!');
  });

  it('should call the inital function value', () => {
    const initalValue = vi.fn(() => 'Hey');
    const { result } = renderHook(() => useConst(initalValue));
    expect(initalValue).toHaveBeenCalled();
    expect(result.current).toBe('Hey');
  });
});
