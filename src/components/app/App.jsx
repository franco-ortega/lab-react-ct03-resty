import React, { Component } from 'react';
import Header from '../header/Header';
import PastRequestList from '../pastRequests/PastRequestList';
import Request from '../requests/Request';
import Response from '../response/Response';
import styles from './App.css';

export default class App extends Component {
  state = {
    response: []
  }

  render() {
    // console.log(this.state.response);
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
            <Response response={this.state.response}/>
          </div>
        </div>
      </>
    );
  }
}
