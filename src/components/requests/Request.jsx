import React, { Component } from 'react';

export default class Request extends Component {
  render() {
    return (
      <>
        <form action="">
          <label htmlFor="endpoint">URL/Endpoint:</label>
          <input id="endpoint" type="text"/>

          <label htmlFor="post">POST</label>
          <input id="post" type="radio" name="POST"/>
          <label htmlFor="get">GET</label>
          <input id="get" type="radio" name="GET"/>
          <label htmlFor="put">PUT</label>
          <input id="put" type="radio" name="PUT"/>
          <label htmlFor="delete">DELETE</label>
          <input id="delete" type="radio" name="DELETE"/>

          <label htmlFor="data">Enter Data:</label>
          <input id="data" type="text"/>

          <button>Submit</button>
        </form>

      </>
    );
  }
}
