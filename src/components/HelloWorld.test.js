import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for extended matchers
import HelloWorld from './HelloWorld';

describe('HelloWorld Component', () => {
  test('renders Hello, world! text', () => {
    render(<HelloWorld name="world" />);
    // Check if the text is in the document
    expect(screen.getByText('Hello, world!')).toBeInTheDocument();
  });

  test('renders Hello, John! text when name is John', () => {
    render(<HelloWorld name="John" />);
    // Check if the text is in the document
    expect(screen.getByText('Hello, John!')).toBeInTheDocument();
  });
});

