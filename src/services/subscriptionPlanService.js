import api from '~/config/axios';

export const getSubscriptionPlanListAPI = async () => {
  const res = await api.get('/SubscriptionPlan');

  return res;
};

export const getSubscriptionPlanByIdAPI = async (id) => {
  const res = await api.get(`/SubscriptionPlan/${id}`);

  return res;
};

export const createSubscriptionPlanAPI = async (data) => {
  const res = await api.post('/SubscriptionPlan', data);

  return res;
};

export const updateSubscriptionPlanAPI = async (id, data) => {
  const res = await api.put(`/SubscriptionPlan/${id}`, data);

  return res;
};

export const deleteSubscriptionPlanAPI = async (id) => {
  const res = await api.delete(`/SubscriptionPlan/${id}`);

  return res;
};
