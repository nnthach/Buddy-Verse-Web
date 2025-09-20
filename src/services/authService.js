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

export const forgotPasswordAPI = async (data) => {
  const res = api.post('/password/forget-password', data);

  return res;
};

export const verifyOTPAPI = async (data) => {
  const res = api.post('/password/verify-otp', data);

  return res;
};

export const resetPasswordAPI = async (data) => {
  const res = api.post('/password/reset-password', data);

  return res;
};

