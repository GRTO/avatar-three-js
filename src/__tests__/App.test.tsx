import { render } from '@testing-library/react';
import App from '../App';

describe('App tests', () => {
  it('should contains the heading 1', () => {
    const rendered = render(<App />);
    const element = rendered.getByText(/Hi, this is a boilerplate project called/i);
    expect(element).toBeInTheDocument();
  });
});
