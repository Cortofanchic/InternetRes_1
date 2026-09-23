import { StrictMode } from 'react'; 
import { createRoot } from 'react-dom/client'; 
import App from './App.jsx'; 
import './styles.css'; //подключает общие стили
  
createRoot(document.getElementById('root')).render( //находит <div id="root">
  <StrictMode> 
    <App /> 
  </StrictMode>, 
); 
