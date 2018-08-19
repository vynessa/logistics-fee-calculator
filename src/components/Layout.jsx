import React from 'react';
import NavBar from './NavBar.jsx';
import MapContainer from './MapContainer.jsx';
import DeliveryForm from './DeliveryForm.jsx';
import PageFooter from './PageFooter.jsx';

/**
 * @description Template component to be persistent across the app
 * @param {object} props
 * @returns {JSX.Element} Template
 */
const Layout = () => {
  /**
   * @description Renders Layout component
   * @returns {JSX.Element} Layout
   * @memberof Layout
   */
  return (
    <div>
      <NavBar />
      <section className="container">
        <MapContainer/>
        <DeliveryForm />
      </section>
      <PageFooter />
    </div>
  );
};

export default Layout;
