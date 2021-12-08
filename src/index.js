import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App, { FormComponent } from './App';

ReactDOM.render(
  <FormComponent name="bulla" value="123" />,
  document.getElementById('root')
);
