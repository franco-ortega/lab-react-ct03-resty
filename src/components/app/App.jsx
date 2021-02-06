import React, { Component } from 'react';
import { makeRequest } from '../../services/makeRequest';
import Header from '../header/Header';
import PastRequestList from '../pastRequests/PastRequestList';
import Request from '../requests/Request';
import Response from '../response/Response';
import styles from './App.css';

export default class App extends Component {
  state = {
    url: '',
    method: '',
    data: [],
    response: [],
    pastRequests: [
      { method: 'GET', url: 'http://www.hello.com' },
      { method: 'POST', url: 'http://www.world.com' }
    ]
  }

  handleUrlChange = ({ target }) => {
    this.setState({ url: target.value });
  }

  handleRadioChange = ({ target }) => {
    this.setState({ method: target.value });
  }

  handleDataChange = ({ target }) => {
    this.setState({ data: target.value });
  }  

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');
    const { url, method, data } = this.state;

    makeRequest(url, method, data)
      .then(response => this.setState({ response }));

    // url and method used to create PastRequest
  }



  render() {
    const { url, method, response, pastRequests } = this.state;
    // console.log('URL: ' + url);
    // console.log('method: ' + method);
    // console.log(response);
    console.log(pastRequests);
    return (
      <>
        <Header />
        <div className={styles.App}>
          <div>
            <PastRequestList
              pastRequests={pastRequests}
            />
          </div>
          <div>
            <Request
              handleUrlChange={this.handleUrlChange}
              handleRadioChange={this.handleRadioChange}
              handleDataChange={this.handleDataChange}
              handleSubmit={this.handleSubmit}
            />
          </div>
          <div>
            <Response response={response}/>
          </div>
        </div>
      </>
    );
  }
}
