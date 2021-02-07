import React from 'react';
import PropTypes from 'prop-types';
import styles from './Request.css';

const Request = ({
  handleUrlChange, 
  handleRadioChange, 
  handleDataChange,
  handleSubmit }) => {
  return (
    <>
      <form
        data-testid="display"
        className={styles.Request}
        onSubmit={handleSubmit}>
        <label>
            URL
          <input
            id="endpoint"
            type="text"
            placeholder="http://"
            onChange={handleUrlChange}
          />
        </label>
        <p>
          <label htmlFor="post">
              POST
            <input
              id="post"
              type="radio"
              name="method"
              value="POST"
              onChange={handleRadioChange}/>
          </label>
          <label htmlFor="get">
              GET
            <input
              id="get"
              type="radio"
              name="method"
              value="GET"
              onChange={handleRadioChange}/>
          </label>
          <label htmlFor="put">
              PUT
            <input
              id="put"
              type="radio"
              name="method"
              value="PUT"
              onChange={handleRadioChange}/>
          </label>
          <label htmlFor="delete">
              DELETE
            <input
              id="delete"
              type="radio"
              name="method"
              value="DELETE"
              onChange={handleRadioChange}/>
          </label>
        </p>
        <label>
          <p>Enter Data</p>
          <textarea
            id="data"
            type="text"
            rows="10"
            cols="50"
            placeholder="JSON {}"
            onChange={handleDataChange}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};

Request.propTypes = {
  handleUrlChange: PropTypes.func.isRequired,
  handleRadioChange: PropTypes.func.isRequired,
  handleDataChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Request;
