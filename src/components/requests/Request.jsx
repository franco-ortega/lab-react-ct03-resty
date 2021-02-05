import React, { Component } from 'react';
import styles from './Request.css';

export default class Request extends Component {
  render() {
    return (
      <>
        <form className={styles.Request}>
          <label htmlFor="endpoint">
            URL
            <input id="endpoint" type="text"/>
          </label>

          <p>
            <label htmlFor="post">
              POST
              <input id="post" type="radio" name="method"/>
            </label>
            <label htmlFor="get">
              GET
              <input id="get" type="radio" name="method"/>
            </label>
            <label htmlFor="put">
              PUT
              <input id="put" type="radio" name="method"/>
            </label>
            <label htmlFor="delete">
              DELETE
              <input id="delete" type="radio" name="method"/>
            </label>
          </p>

          <label htmlFor="data">
            <p>Enter Data</p>
            <textarea id="data" type="text" rows="15" cols="50"/>
          </label>

          <button>Submit</button>
        </form>

      </>
    );
  }
}
