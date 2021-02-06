import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PastRequest from './PastRequest';

describe('PastRequest presentational component', () => {
  afterEach(() => cleanup());
  it('renders PastRequest', () => {
    const { asFragment } = render(<PastRequest
      method="GET"
      url="http://www.request.com"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
