import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SampleContext from './sample-context';

describe('sample-context', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SampleContext />);
    expect(baseElement).toBeTruthy();
  });
  it('should contain SampleContext text', () => {
    render(<SampleContext />);
    const element = screen.getByText(/SampleContext/i);
    expect(element).toBeInTheDocument();
  });
});
