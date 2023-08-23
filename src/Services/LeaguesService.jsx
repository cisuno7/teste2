import api from '../APi/APIconfig';

export const getLeagues = () => {
  return api.get('/leagues')
    .then(response => {
      if (response.status === 200) {
        return response.data.response;
      } else {
        throw new Error('Erro ao buscar ligas');
      }
    })
    .catch(error => {
      throw error;
    });
}
