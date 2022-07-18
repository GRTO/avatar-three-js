import { render } from '@testing-library/react';
import App from '../App';

describe('App tests', () => {
  it('should contains canvas element', () => {
    const rendered = render(<App />);
    const element = rendered.getByTestId('canvas-element');
    expect(element).toBeInTheDocument();
  });
});
