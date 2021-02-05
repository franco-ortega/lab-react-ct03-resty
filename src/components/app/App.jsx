import React, { Component } from 'react';
import Header from '../header/Header';
import PastRequestList from '../pastRequests/PastRequestList';
import Request from '../requests/Request';
import Response from '../response/Response';
import styles from './App.css';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className={styles.App}>
          <div>
            <PastRequestList />
          </div>
          <div>
            <Request />
          </div>
          <div>
            <Response />
          </div>
        </div>
      </>
    );
  }
}
