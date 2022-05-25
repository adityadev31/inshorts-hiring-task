import reactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

reactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));

  serviceWorkerRegistration.register();