import api from '~/config/axios';

export const getPlanFeatureListAPI = async () => {
  const res = await api.get('/PlanFeature');

  return res;
};

export const getPlanFeatureByIdAPI = async (id) => {
  const res = await api.get(`/PlanFeature/plan/${id}`);

  return res;
};

export const createPlanFeatureAPI = async (data) => {
  const res = await api.post('/PlanFeature', data);

  return res;
};

export const updatePlanFeatureAPI = async (id, data) => {
  const res = await api.put(`/PlanFeature/${id}`, data);

  return res;
};

export const deletePlanFeatureAPI = async (id) => {
  const res = await api.delete(`/PlanFeature/${id}`);

  return res;
};
