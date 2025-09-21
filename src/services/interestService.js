import api from '~/config/axios';

export const getInterestListAPI = async () => {
  const res = await api.get('/interest');

  return res;
};

export const getInterestByIdAPI = async (id) => {
  const res = await api.get(`/interest/${id}`);

  return res;
};

export const createInterestAPI = async (data) => {
  const res = await api.post('/interest', data);

  return res;
};

export const updateInterestAPI = async (id, data) => {
  const res = await api.put(`/interest/${id}`, data);

  return res;
};

export const deleteInterestAPI = async (id) => {
  const res = await api.delete(`/interest/${id}`);

  return res;
};
