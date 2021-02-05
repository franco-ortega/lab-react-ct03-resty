import React, { Component } from 'react';

export default class Request extends Component {
  render() {
    return (
      <>
        <form action="">
          <label htmlFor="endpoint">URL/Endpoint:</label>
          <input id="endpoint" type="text"/>
          <p>
            <label htmlFor="post">POST</label>
            <input id="post" type="radio" name="method"/>
            <label htmlFor="get">GET</label>
            <input id="get" type="radio" name="method"/>
            <label htmlFor="put">PUT</label>
            <input id="put" type="radio" name="method"/>
            <label htmlFor="delete">DELETE</label>
            <input id="delete" type="radio" name="method"/>
          </p>
          <label htmlFor="data">Enter Data:</label>
          <input id="data" type="text"/>

          <button>Submit</button>
        </form>

      </>
    );
  }
}
