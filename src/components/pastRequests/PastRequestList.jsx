import React, { Component } from 'react';
import PastRequest from './PastRequest';
import styles from './PastRequestList.css';

export default class PastRequestList extends Component {
  render() {
    return (
      <section className={styles.PastRequestList}>
        <p>These are your past requests:</p>
        <PastRequest />
      </section>
    );
  }
}
