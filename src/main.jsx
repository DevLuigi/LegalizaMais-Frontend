import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "react-widgets/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    <Routes />
  </StrictMode>
)
