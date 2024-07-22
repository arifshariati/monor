import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SampleComponent from './sample-component';

describe('sample-component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SampleComponent />);
    expect(baseElement).toBeTruthy();
  });
  it('should contain SampleComponent text', () => {
    render(<SampleComponent />);
    const element = screen.getByText(/SampleComponent/i);
    expect(element).toBeInTheDocument();
  });
});
