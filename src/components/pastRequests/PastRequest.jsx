import React from 'react';
import PropTypes from 'prop-types';
import styles from './PastRequest.css';

export default function PastRequest({ method, url }) {
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
}

PastRequest.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
  // pastRequest: PropTypes.array
};




// export default class PastRequest extends Component {
//   render() {
//     return (
//       <div className={styles.PastRequest}>
//         <p>
//           Method:
//           {/* {this.state.method} */}
//         </p>
//         <p>
//           URL:
//           {/* {this.state.method} */}
//         </p>
//       </div>
//     );
//   }
// }
