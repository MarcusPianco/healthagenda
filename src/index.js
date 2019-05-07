import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import ptBR from 'antd/lib/locale-provider/pt_BR';
import App from './App';

ReactDOM.render(
  <LocaleProvider locale={ptBR}>
    <App />
  </LocaleProvider>,
  global.document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
