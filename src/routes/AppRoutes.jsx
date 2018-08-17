import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from '../components/Layout.jsx';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Layout}/>
    </BrowserRouter>
  );
};

export default AppRoutes;
