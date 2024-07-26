import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Sample from './sample';
describe('Sample', () => {
  it('should load component', () => {
    const { baseElement } = render(<Sample />);
    expect(baseElement).toBeTruthy();
  });
});
