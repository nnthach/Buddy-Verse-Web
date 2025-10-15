import api from '~/config/axios';

export const verifyPaymentAPI = async (data) => {
  const res = await api.post('/payment/return', data);

  return res;
};

export const createPaymentAPI = async (data) => {
  const res = await api.post('/payment/create-checkout', data);

  return res;
};
