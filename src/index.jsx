import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './routes/AppRoutes.jsx';
import '../public/scss/main.scss';

// Store DOM expression in variable `app`
const app = document.getElementById('app');

ReactDOM.render(<AppRoutes />, app);
