import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Authcontext from './Context/Authcontext';

ReactDOM.render(
  <Authcontext>
    <App />
  </Authcontext>,
  document.getElementById('root')
);
