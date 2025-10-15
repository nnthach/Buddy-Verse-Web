import Admin from '~/pages/Admin/Admin';
import Auth from '~/pages/Auth/Auth';
import CartPage from '~/pages/Cart/Cart';
import GetStart from '~/pages/GetStart/GetStart';
import Home from '~/pages/Home/Home';
import PaymentResult from '~/pages/PaymentResult/PaymentResult';
import PaymentReturnPage from '~/pages/PaymentReturn/PaymentReturn';

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
    path: '/cart',
    component: <CartPage />,
  },
  {
    path: '/payment/return',
    component: <PaymentReturnPage />,
  },
  {
    path: '/payment/result/:type',
    component: <PaymentResult />,
  },
];

export const privateRouters = [
  {
    path: '/admin',
    component: <Admin />,
  },
];
