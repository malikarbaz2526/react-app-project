import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

var root = ReactDOM.createRoot(document.getElementById('root'))

function Greeting(){
  return (
  <>
    
  <App/>
  </>
  )
}


  root.render(<Greeting/>)