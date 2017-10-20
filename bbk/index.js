import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import 'bulma/css/bulma.css';
import './css/mystyle.css';

render((
  <BrowserRouter>
    <App />
  </BrowserRouter> 
), document.getElementById('root'));


registerServiceWorker();
