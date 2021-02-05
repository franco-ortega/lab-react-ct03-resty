import React, { Component } from 'react';
import styles from './Request.css';

export default class Request extends Component {
  state = {
    url: '',
    method: '',
    data: {},
    response: {}
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');

    this.setState({ response: 'test response' });

    // get URL input value | get state or update state
    // get radio button selection | get state or update state
    // get Data textarea value | get state or update state

    // call makeRequest() with the above values

    // update response state
    // response state is displayed in Response Field (set up automatically)
    // --Response.jsx will already be displaying response state

    // url and method sent to PastRequest
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

  render() {
    // console.log(this.state.url);
    // console.log(this.state.method);
    // console.log(this.state.data);
    console.log(this.state.response);
    return (
      <>
        <form
          className={styles.Request}
          onSubmit={this.handleSubmit}>
          <label htmlFor="endpoint">
            URL
            <input
              id="endpoint"
              type="text"
              placeholder="http://"
              onChange={this.handleUrlChange}
            />
          </label>

          <p>
            <label htmlFor="post">
              POST
              <input
                id="post"
                type="radio"
                name="method"
                value="POST"
                onChange={this.handleRadioChange}/>
            </label>
            <label htmlFor="get">
              GET
              <input
                id="get"
                type="radio"
                name="method"
                value="GET"
                onChange={this.handleRadioChange}/>
            </label>
            <label htmlFor="put">
              PUT
              <input
                id="put"
                type="radio"
                name="method"
                value="PUT"
                onChange={this.handleRadioChange}/>
            </label>
            <label htmlFor="delete">
              DELETE
              <input
                id="delete"
                type="radio"
                name="method"
                value="DELETE"
                onChange={this.handleRadioChange}/>
            </label>
          </p>

          <label htmlFor="data">
            <p>Enter Data</p>
            <textarea
              id="data"
              type="text"
              rows="15"
              cols="50"
              placeholder="JSON {}"
              onChange={this.handleDataChange}
            />
          </label>

          <button>Submit</button>
        </form>

      </>
    );
  }
}
