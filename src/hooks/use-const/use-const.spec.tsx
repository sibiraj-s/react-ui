import { expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import useConst from './use-const';

const UseConstTestComponent = () => {
  const welcome = useConst('Hello world!');

  return <p>Greet: {welcome} 👋</p>;
};

it('should return the given constant', () => {
  render(<UseConstTestComponent />);

  const text = screen.getByText(/Hello world!/i);
  expect(text).toBeTruthy();
});
