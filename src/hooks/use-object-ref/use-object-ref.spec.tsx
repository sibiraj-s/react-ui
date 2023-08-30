import { describe, expect, it, vi } from 'vitest';
import { render, renderHook } from '@testing-library/react';
import { ComponentProps, createRef, forwardRef } from 'react';

import useObjectRef from './use-object-ref';

const TestComponent = forwardRef<HTMLDivElement, ComponentProps<'div'>>((props, forwardedRef) => {
  const ref = useObjectRef(forwardedRef);
  return <div {...props} ref={ref} />;
});
TestComponent.displayName = 'TestComponent';

describe('UseObjectRef', () => {
  it('should return empty ref by default', () => {
    const { result } = renderHook(() => useObjectRef());

    expect(result.current).toBeDefined();
    expect(result.current).not.toBeNull();
    expect(result.current.current).toBeUndefined();
  });

  it('should forward ref', () => {
    const ref = createRef<HTMLDivElement>();
    render(<TestComponent id='a' ref={ref} />);
    expect((ref.current as HTMLDivElement).id).toBe('a');
  });

  it('should forward function ref', () => {
    let htmlEl: HTMLDivElement | null = null;
    render(<TestComponent id='ab' ref={(node) => (htmlEl = node)} />);
    expect((htmlEl as unknown as HTMLDivElement).id).toBe('ab');
  });

  it('should be called once', () => {
    const ref = vi.fn();

    const { rerender } = render(<TestComponent id='ab' ref={ref} />);
    expect(ref).toHaveBeenCalledOnce();

    rerender(<TestComponent id='ab' ref={ref} />);
    expect(ref).toHaveBeenCalledOnce();
  });
});
