import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}></Router><App />, document.getElementById('root'));
