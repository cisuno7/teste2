import api from '../APi/APIconfig';

export const getTeamInfo = (endpoint) => {
  return api.get(`/${endpoint}`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};
