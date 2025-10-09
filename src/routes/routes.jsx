import Admin from '~/pages/Admin/Admin';
import Auth from '~/pages/Auth/Auth';
import GetStart from '~/pages/GetStart/GetStart';
import Home from '~/pages/Home/Home';

export const publicRouters = [
  {
    path: '/',
    component: <Home />,
  },
  {
    path: '/auth/:type',
    component: <Auth />,
  },
  {
    path: '/get-start',
    component: <GetStart />,
  },
  {
    path: '/admin',
    component: <Admin />,
  },
];

export const privateRouters = [
  {
    path: '/admin',
    component: <Admin />,
  },
];
