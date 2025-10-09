import api from '~/config/axios';

export const getFeatureListAPI = async () => {
  const res = await api.get('/feature/all');

  return res;
};

export const getFeatureByIdAPI = async (id) => {
  const res = await api.get(`/feature/${id}`);

  return res;
};

export const createFeatureAPI = async (data) => {
  const res = await api.post('/feature/create', data);

  return res;
};

export const updateFeatureAPI = async (id, data) => {
  const res = await api.put(`/feature/${id}`, data);

  return res;
};

export const deleteFeatureAPI = async (id) => {
  const res = await api.delete(`/feature/${id}`);

  return res;
};
