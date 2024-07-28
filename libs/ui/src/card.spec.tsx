import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import { Card1 } from './card';
import { ICard1 } from '@monor/interfaces';

const readOnlyCardData: ICard1 = {
  title: 'card-title',
  slug: 'card-title',
  description: 'card-description',
};
const actionableCardData: ICard1 = {
  ...readOnlyCardData,
  button: {
    url: '/dashboard',
    text: 'click me',
  },
};
describe('card1', () => {
  describe('readonly', () => {
    beforeEach(() => {
      render(<Card1 data={readOnlyCardData} />);
    });
    afterEach(() => {
      cleanup();
    });
    it('applies the correct classes', () => {
      const cardElement = screen.getByTestId('card1-card');
      expect(cardElement).toHaveClass('rounded-md shadow-sm');
    });

    it('action button should not be rendered', () => {
      const buttonElement = screen.queryByTestId('card1-button');
      expect(buttonElement).not.toBeInTheDocument();
    });
  });
  describe('actionable', () => {
    beforeEach(() => {
      render(<Card1 data={actionableCardData} />);
    });
    afterEach(() => {
      cleanup();
    });
    it('applies the correct classes', () => {
      const cardElement = screen.getByTestId('card1-card');
      expect(cardElement).toHaveClass('rounded-md shadow-sm');
    });
    it('action button should be rendered', () => {
      const buttonElement = screen.getByTestId('card1-button');
      expect(buttonElement).toBeInTheDocument();
    });
  });
});
