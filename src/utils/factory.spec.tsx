import { describe, expect, it } from 'vitest';
import { ComponentProps, ElementRef, FC, createRef, isValidElement } from 'react';
import { render } from '@testing-library/react';

import rx from './factory';
import { mockConsoleError } from '../../test/console';

type TestElement = ElementRef<typeof rx.button>;
type TestComponentProps = ComponentProps<typeof rx.button>;

const TestComponent: FC<TestComponentProps> = (props) => {
  return <rx.button {...props} />;
};

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

  it('should retain the original ref with asChild', () => {
    const ref = createRef<HTMLAnchorElement>();
    render(
      <TestComponent asChild>
        <a ref={ref} />
      </TestComponent>
    );
    expect(ref.current?.tagName).toBe('A');
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
