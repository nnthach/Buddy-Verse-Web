import api from '~/config/axios';

export const getReportListAPI = async (type) => {
  const res = await api.get(`/report/${type}`);

  return res;
};

export const getReportDetailAPI = async (id) => {
  const res = await api.get(`/report/${id}`);

  return res;
};

export const updateReportAcceptAPI = async (id, adminId) => {
  const res = await api.put(`/report/accept/${id}?adminId=${adminId}`);

  return res;
};

export const updateReportRejectAPI = async (id, adminId) => {
  const res = await api.put(`/report/reject/${id}?adminId=${adminId}`);

  return res;
};
