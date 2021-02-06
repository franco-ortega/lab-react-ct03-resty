import React from 'react';
import PropTypes from 'prop-types';
import styles from './PastRequest.css';

const PastRequest = ({ method, url }) => {
  return (
    <div className={styles.PastRequest}>
      <p>
        {method}
      </p>
      <p>
        {url}
      </p>
    </div>
  );
};

PastRequest.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default PastRequest;
