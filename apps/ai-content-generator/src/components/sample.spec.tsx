import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import SampleComponent from './sample';

describe('sample', () => {
  it('renders SampleComponent', () => {
    const { baseElement } = render(<SampleComponent />);
    expect(baseElement).toBeTruthy();
  });
});
