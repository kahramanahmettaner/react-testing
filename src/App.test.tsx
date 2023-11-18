import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// test( name, function, timeout(def5sec) )

// describe (group_name, function)

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
