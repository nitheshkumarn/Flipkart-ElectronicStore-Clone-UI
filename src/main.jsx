import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes } from 'react-router-dom'
import './index.css'
import AllRoutes from './Components/Routes/AllRoutes';
import AuthProvider from './Components/Context/AuthProvider';

const routes = AllRoutes();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider child={<Routes>{routes} </Routes>}>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
