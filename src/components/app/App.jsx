import React, { Component } from 'react';
import Request from '../requests/Request';
import Response from '../response/Response';

export default class App extends Component {
  render() {
    return (
      <>
        <Request />
        <Response />
      </>
    );
  }
}
