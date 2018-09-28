import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import App from 'components/App/App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
