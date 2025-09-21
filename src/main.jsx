import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/main.scss';
import { BrowserRouter } from 'react-router-dom';
import { SideBarProvider } from '~/context/SidebarContext.jsx';
import { AuthProvider } from '~/context/AuthContext.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CUSTOMER_ID}>
      <BrowserRouter>
        <AuthProvider>
          <SideBarProvider>
            <App />
          </SideBarProvider>
        </AuthProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
);
