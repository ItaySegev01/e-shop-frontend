import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {axios, React, ReactDOM, App, reportWebVitals, HelmetProvider, StoreProvider} from './Imports';


axios.defaults.baseURL = 'http://localhost:5000';
//axios.defaults.baseURL = 'https://e-shop-backend-wbt2.onrender.com';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StoreProvider>
  </React.StrictMode>
);

reportWebVitals();
