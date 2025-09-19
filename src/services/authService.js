import api from '~/config/axios';

export const loginAPI = async (data) => {
  const res = api.post('/account/login', data);

  return res;
};

export const registerAPI = async (data) => {
  const res = api.post('/account/register', data);

  return res;
};

export const refreshTokenAPI = async (data) => {
  const res = api.post('/account/refresh-token', data);

  return res;
};
