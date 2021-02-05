import React from 'react';
import PropTypes from 'prop-types';
import PastRequest from './PastRequest';
import styles from './PastRequestList.css';

export default function PastRequestList({ method, url }) {
  return (
    <section className={styles.PastRequestList}>
      <p>These are your past requests:</p>
      <PastRequest
        method={method}
        url={url}
      />
    </section>
  );
}

PastRequestList.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
