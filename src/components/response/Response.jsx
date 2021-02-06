import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Response.css';

export default function Response({ response }) {
  return (
    <div>
      <section className={styles.Response}>
        Response Field
        {<pre>{JSON.stringify(response, null, 2)}</pre>}
      </section>        
    </div>
  );
}

// Response.propTypes = {
//   response: PropTypes.array
// };
