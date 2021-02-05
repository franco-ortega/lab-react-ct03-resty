import React, { Component } from 'react';
import styles from './PastRequest.css';

export default class PastRequest extends Component {
  render() {
    return (
      <div className={styles.PastRequest}>
        <p>
            Method:
        </p>
        <p>
            URL:
        </p>
      </div>
    );
  }
}
