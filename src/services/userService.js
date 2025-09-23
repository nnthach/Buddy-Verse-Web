import api from '~/config/axios';

export const getUserByIdAPI = async (id) => {
  const res = await api.get(`/account/${id}`);

  return res;
};
