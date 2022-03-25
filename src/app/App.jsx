import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import './app.scss';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const JWT_TOKEN = '';

  // const redirect = () => {
  //   history.push('/private-two');
  // };

  return (
    <div className="App">
      <Link to="/private-three">redirect me</Link>
      {/* <button onClick={redirect}>redirect</button> */}
      {JWT_TOKEN ? <PrivateRoute /> : <PublicRoute />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        rtl={false}
        newestOnTop={false}
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover
        pauseOnFocusLoss
      />
    </div>
  );
};
