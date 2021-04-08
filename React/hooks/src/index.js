import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import ComponenteHook from './components/componenteHook'
import ComponenteUseEffect from './components/componenteUseEffect'

ReactDOM.render(
  <>
  <h1>Olá React</h1>
  <ComponenteHook/>
  <ComponenteUseEffect/>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
