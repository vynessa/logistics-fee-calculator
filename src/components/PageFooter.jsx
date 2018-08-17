import React from 'react';
import { Footer } from 'react-materialize';

const PageFooter = () => {
  return (
    <Footer
      links={
        <ul>
          <li><a className="grey-text text-lighten-3" href="/">About</a></li>
          <li><a className="grey-text text-lighten-3" href="#!">Contact Us</a></li>
          <li><a className="grey-text text-lighten-3" href="#!">Terms and Conditions</a></li>
          <li><a className="grey-text text-lighten-3" href="#!">Help</a></li>
        </ul>
      }
      className="example black"
    >
      <h5 className="white-text">Logistics Fee Calculator</h5>
      <p className="grey-text text-lighten-4">Designed by Vanessa Ejikeme</p>
      <p className="grey-text text-lighten-4">© 2017 Copyright</p>
    </Footer>
  );
};

export default PageFooter;
