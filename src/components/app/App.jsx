import React, { Component } from 'react';
import Header from '../header/Header';
import PastRequestList from '../pastRequests/PastRequestList';
import Request from '../requests/Request';
import Response from '../response/Response';
import styles from './App.css';

export default class App extends Component {
  state = {
    url: '',
    method: '',
    response: []
  }

  render() {
    // console.log(this.state.response);
    const { url, method, response } = this.state;
    return (
      <>
        <Header />
        <div className={styles.App}>
          <div>
            <PastRequestList
              method={method}
              url={url}
            />
          </div>
          <div>
            <Request />
          </div>
          <div>
            <Response response={response}/>
          </div>
        </div>
      </>
    );
  }
}
