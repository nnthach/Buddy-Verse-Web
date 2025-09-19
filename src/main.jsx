import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/main.scss';
import { BrowserRouter } from 'react-router-dom';
import { SideBarProvider } from '~/context/SidebarContext.jsx';
import { AuthProvider } from '~/context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SideBarProvider>
          <App />
        </SideBarProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
