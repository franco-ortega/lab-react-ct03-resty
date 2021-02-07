import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Request from './Request';

describe('Request component', () => {
  it('makes a fetch request', () => {
    render(<Request
      handleUrlChange={() => {}}
      handleRadioChange={() => {}}
      handleDataChange={() => {}}
      handleSubmit={() => {}}
    />);

    const input = screen.getByLabelText('URL');
    const button = screen.getByRole('button');

    fireEvent.change(input, {
      target: {
        value: 'http://www.world.com'
      }
    });

    fireEvent.click(button);

    return waitFor(() => {
      expect(screen.getByTestId('display')).not.toBeEmptyDOMElement();
    });
  });
});
