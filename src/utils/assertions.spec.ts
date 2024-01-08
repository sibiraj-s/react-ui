import { describe, expect, it, vi } from 'vitest';
import { isFunction } from './assertions';

describe('Assertions', () => {
  it('should assert functions correctly', () => {
    expect(isFunction(vi.fn)).toBe(true);
    expect(isFunction(1)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
    expect(isFunction(null)).toBe(false);
    expect(isFunction('')).toBe(false);
    expect(isFunction({})).toBe(false);
    expect(isFunction([])).toBe(false);
  });
});
