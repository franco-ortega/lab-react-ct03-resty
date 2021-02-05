import React, { Component } from 'react';
import PastRequest from './PastRequest';
import styles from './PastRequestList.css';

export default class PastRequestList extends Component {
  render() {
    return (
      <section className={styles.PastRequestList}>
        These are your past requests:
        <PastRequest />
      </section>
    );
  }
}
