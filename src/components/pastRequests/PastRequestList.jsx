import React from 'react';
import PropTypes from 'prop-types';
import PastRequest from './PastRequest';
// import styles from './PastRequestList.css';

const PastRequestList = ({ pastRequests }) => {
  const pastRequestElements = pastRequests.map((pastRequest, index) => (
    <li key={index + Date.now()}>
      <PastRequest
        {...pastRequest}
      />
    </li>
  ));
  
  return (
    <ul>
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
