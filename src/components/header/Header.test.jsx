import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  afterEach(() => cleanup());
  it('renders Header presenational component', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment).toMatchSnapshot();
  });
});
