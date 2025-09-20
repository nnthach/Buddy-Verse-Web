import api from '~/config/axios';

export const getInterestListAPI = async () => {
  const res = api.get('/interest');

  return res;
};
