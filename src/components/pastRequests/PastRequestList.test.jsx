import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PastRequestList from './PastRequestList';

describe('PastRequestList component', () => {
  afterEach(() => cleanup());
  it('renders PastRequestList presenational component', () => {
    const { asFragment } = render(<PastRequestList pastRequests={[]} />);
    expect(asFragment).toMatchSnapshot();
  });
});
