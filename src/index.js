import React from 'react';
import ReactDOM from 'react-dom/client';
import { EmployeeProvider } from './__context__/EmployeeContext';
import './css/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <EmployeeProvider>
    <App />
  </EmployeeProvider>
);

