import React, { Component } from 'react';
import PastRequestList from '../pastRequests/PastRequestList';
import Request from '../requests/Request';
import Response from '../response/Response';
import styles from './App.css';

export default class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div>
          <PastRequestList />
        </div>
        <div>
          <Request />
          <Response />
        </div>
      </div>
    );
  }
}
