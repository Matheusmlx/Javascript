import './index.css'
import './components/componenteHook.css'
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import ComponenteHook from './components/componenteHook'
import ComponenteUseEffect from './components/componenteUseEffect'


ReactDOM.render(
  <div className='App'>
    <h1 className='Card'>Olá React</h1>
    <ComponenteHook/>
    <ComponenteUseEffect/>
  </div>,
  document.getElementById('root')
);

reportWebVitals();
