import { describe, expect, it, vi } from 'vitest';

import runIfFn from './run-if-fn';

describe('run-if', () => {
  it('should invoke the function with arguments', () => {
    const mockFunction = vi.fn((...args: any[]) => args);
    expect(runIfFn(mockFunction, 1)).toMatchObject([1]);
    expect(runIfFn(mockFunction, 1, 2)).toMatchObject([1, 2]);
  });

  it('should return the value if not a function', () => {
    expect(runIfFn(undefined, 1)).toBe(undefined);
    expect(runIfFn(1, 1)).toBe(1);
    expect(runIfFn(null, 1)).toBe(null);
    expect(runIfFn('', 1)).toBe('');
  });

  it('should return the value if a non-function is passed with arguments', () => {
    expect(runIfFn(2, 1)).toBe(2);
    expect(runIfFn('hello', 1, 2)).toBe('hello');
  });

  it('should return the value if a non-function is passed without arguments', () => {
    expect(runIfFn(3)).toBe(3);
    expect(runIfFn('world')).toBe('world');
  });

  it('should return the value if a function is passed without arguments', () => {
    const mockFunction = vi.fn(() => 'hello world');
    expect(runIfFn(mockFunction)).toBe('hello world');
  });

  it('should return the value if a function is passed with arguments', () => {
    const mockFunction = vi.fn((a: number, b: number) => a + b);
    expect(runIfFn(mockFunction, 3, 4)).toBe(7);
  });
});
