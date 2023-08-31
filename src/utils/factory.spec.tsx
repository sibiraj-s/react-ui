import { describe, expect, it } from 'vitest';
import { ComponentProps, ElementRef, createRef, forwardRef, isValidElement } from 'react';
import { render } from '@testing-library/react';

import rx from './factory';
import { mockConsoleError } from '../../test/console';

type TestElement = ElementRef<typeof rx.button>;
type TestComponentProps = ComponentProps<typeof rx.button>;

const TestComponent = forwardRef<TestElement, TestComponentProps>((props, forwardedRef) => {
  return <rx.button {...props} ref={forwardedRef} />;
});
TestComponent.displayName = 'TestComponent';

describe('RxFactory', () => {
  it('should create element', () => {
    expect(isValidElement(<rx.a />)).toBe(true);
  });

  it('should create element by invoking rx function', () => {
    const Button = rx('button');
    expect(isValidElement(<Button />)).toBe(true);

    const { getByTestId } = render(<TestComponent data-testid='buttonElement' />);
    expect(getByTestId('buttonElement')).toBeTruthy();
  });

  it('should set all props correctly', () => {
    const { getByTestId } = render(<TestComponent data-testid='a' />);
    expect(getByTestId('a')).toBeTruthy();
  });

  it('should set ref correctly', () => {
    const ref = createRef<TestElement>();
    render(<TestComponent ref={ref} />);
    expect(ref.current?.tagName).toBe('BUTTON');
  });

  it('should support asChild property', () => {
    const ref = createRef<TestElement>();
    render(
      <TestComponent ref={ref} asChild>
        <a />
      </TestComponent>
    );
    expect(ref.current?.tagName).toBe('A');
  });

  it('should combine forwardedRef with original ref with asChild property', () => {
    const ref = createRef<TestElement>();
    const ref2 = createRef<HTMLAnchorElement>();
    render(
      <TestComponent ref={ref} asChild>
        <a ref={ref2} />
      </TestComponent>
    );
    expect(ref.current?.tagName).toBe('A');
    expect(ref2.current?.tagName).toBe('A');
  });

  it('should throw errors for multiple child', () => {
    const restoreConsole = mockConsoleError();

    render(
      <TestComponent asChild>
        <a />
        <a />
      </TestComponent>
    );

    // eslint-disable-next-line no-console
    expect(console.error).toHaveBeenCalled();
    restoreConsole();
  });
});
