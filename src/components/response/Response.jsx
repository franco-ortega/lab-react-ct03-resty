import React from 'react';
import PropTypes from 'prop-types';
import styles from './Response.css';

export default function Response({ response }) {
  console.log('helloooo');
  console.log(response);
  return (
    <div>
      <section className={styles.Response}>
        Response Field
        {response}
      </section>        
    </div>
  );
}

Response.propTypes = {
  response: PropTypes.array
};


// export default class Response extends Component {
//   render() {
//     return (
//       <>
//         <section
//           className={styles.Response}
//         >
//           Response Field
//         </section>        
//       </>
//     );
//   }
// }
