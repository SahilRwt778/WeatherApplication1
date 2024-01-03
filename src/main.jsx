import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ErrorBoundary } from "react-error-boundary";
import RefreshButton from './components/RefreshButton.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ErrorBoundary fallback={<div className='error'><h2 ><i className="fa fa-exclamation-triangle" aria-hidden="true"></i>Sorry, City Not Found
  
      <RefreshButton />
    </h2></div>}>
      
    <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
 

