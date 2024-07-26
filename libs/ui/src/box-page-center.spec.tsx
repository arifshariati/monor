import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import BoxPageCenter from './box-page-center';
describe('box-page-center', () => {
  beforeEach(() => {
    render(
      <BoxPageCenter>
        <h1>BoxPageCenter</h1>
      </BoxPageCenter>
    );
  });
  afterEach(() => cleanup());

  it('contains BoxPageCenter', () => {
    expect(screen.getByText(/BoxPageCenter/i)).toBeInTheDocument();
  });

  it('applies the correct classes to the div element', () => {
    const divElement = screen.getByTestId('box-page-center');
    expect(divElement).toHaveClass('h-screen flex items-center justify-center');
  });
});
