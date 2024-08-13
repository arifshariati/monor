import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SampleProvider from './sample-provider';

describe('sample-provider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SampleProvider />);
    expect(baseElement).toBeTruthy();
  });
  it('should contain SampleProvider text', () => {
    render(<SampleProvider />);
    const element = screen.getByText(/SampleProvider/i);
    expect(element).toBeInTheDocument();
  });
});
