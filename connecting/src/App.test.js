import { render, screen } from '@testing-library/react';
import App from './App';

// FIX decide what to do with tests (this will fail)

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
