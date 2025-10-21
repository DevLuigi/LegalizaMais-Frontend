import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import './index.css';
import Login from './pages/login';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    <Login />
    <Routes />
  </StrictMode>
)
