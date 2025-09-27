import api from '~/config/axios';

export const getQuestListAPI = async () => {
  const res = await api.get('/quest');

  return res;
};

export const getQuestByIdAPI = async (id) => {
  const res = await api.get(`/quest/${id}`);

  return res;
};

export const createQuestAPI = async (data) => {
  const res = await api.post('/quest', data);

  return res;
};

export const updateQuestAPI = async (id, data) => {
  const res = await api.put(`/quest/${id}`, data);

  return res;
};

export const deleteQuestAPI = async (id) => {
  const res = await api.delete(`/quest/${id}`);

  return res;
};
