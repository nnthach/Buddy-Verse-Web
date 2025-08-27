import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/main.scss';
import { BrowserRouter } from 'react-router-dom';
import { SideBarProvider } from '~/context/SidebarContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SideBarProvider>
        <App />
      </SideBarProvider>
    </BrowserRouter>
  </StrictMode>,
);
