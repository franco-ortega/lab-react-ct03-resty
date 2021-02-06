import React from 'react';
import PropTypes from 'prop-types';
import PastRequest from './PastRequest';
import styles from './PastRequestList.css';

const PastRequestList = ({ pastRequests }) => {
  console.log(pastRequests);
  const pastRequestElements = pastRequests.map((pastRequest, index) => (
    <li key={index + Date.now()}>
      <PastRequest
        method={pastRequest.method}
        url={pastRequest.url}
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
  // method: PropTypes.string.isRequired,
  // url: PropTypes.string.isRequired,
  pastRequests: PropTypes.array.isRequired
};

export default PastRequestList;
