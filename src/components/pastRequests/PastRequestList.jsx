import React from 'react';
import PropTypes from 'prop-types';
import PastRequest from './PastRequest';
import styles from './PastRequestList.css';

const PastRequestList = ({ pastRequests }) => {
  const pastRequestElements = pastRequests.map((pastRequest, index) => (
    <li key={index + Date.now()}>
      <PastRequest {...pastRequest}
      />
    </li>
  ));
  
  return (
    <ul className={styles.PastRequestList}>
      {pastRequestElements}
    </ul>
  );
};

PastRequestList.propTypes = {
  pastRequests: PropTypes.array.isRequired
};

export default PastRequestList;
