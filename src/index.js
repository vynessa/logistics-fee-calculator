import React from 'react';
import ReactDOM from 'react-dom';
import maxApi from './utils/maxApi';

/**
 * @description Materialize Footer Component
 * @export
 * @function
 * @extends {React.Component}
 * @returns {JSX.Element} Footer
 */
const Page = () => {  
  return (
    <div>
      <p>
        Welcome!
      </p>
    </div>
  );
};

// Store DOM expression in variable `app`
const app = document.getElementById('app');

ReactDOM.render(<Page />, app);
