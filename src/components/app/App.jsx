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
    pastRequests: []
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
    const { url, method, data } = this.state;

    makeRequest(url, method, data)
      .then(response => this.setState({ response }));

    const newRequest = {
      method: this.state.method,
      url: this.state.url
    };

    this.state.pastRequests.push(newRequest);
  }

  render() {
    const { response, pastRequests } = this.state;
    return (
      <>
        <Header />
        <div className={styles.App}>
          <PastRequestList
            pastRequests={pastRequests}
          />
          <Request
            handleUrlChange={this.handleUrlChange}
            handleRadioChange={this.handleRadioChange}
            handleDataChange={this.handleDataChange}
            handleSubmit={this.handleSubmit}
          /> 
        </div>
        <Response response={response}/>
      </>
    );
  }
}
