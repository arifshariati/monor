import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import { Container } from './container';

describe('container', () => {
  describe('flex - container', () => {
    beforeEach(() => {
      render(
        <Container>
          <h1>H1 Element</h1>
        </Container>
      );
    });
    afterEach(() => {
      cleanup();
    });

    it('applies correct classes', () => {
      const container = screen.getByTestId('container');
      expect(container).toHaveClass('flex flex-wrap gap-4 p-2');
      expect(container).not.toHaveClass('flex-col');
    });
    it('renders children correctly', () => {
      const h1Element = screen.getByText('H1 Element');
      expect(h1Element).toBeInTheDocument();
    });
  });
  describe('flex-col - container', () => {
    beforeEach(() => {
      render(
        <Container col>
          <div>Child 1</div>
          <div>Child 2</div>
        </Container>
      );
    });
    afterEach(() => {
      cleanup();
    });

    it('applies correct classes', () => {
      const container = screen.getByTestId('container');
      expect(container).toHaveClass('flex flex-wrap gap-4 p-2 flex-col');
    });
    it('renders multiple children correctly', () => {
      expect(screen.getByText('Child 1')).toBeInTheDocument();
      expect(screen.getByText('Child 2')).toBeInTheDocument();
    });
  });
});
