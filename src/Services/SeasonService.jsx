import api from '../APi/APIconfig';
export const getSeasons = () => {
  return api.get('/leagues/seasons')
    .then(response => {
      if (response.status === 200) {
        return response.data.response;
      } else {
        throw new Error('Erro ao buscar temporadas');
      }
    })
    .catch(error => {
      throw error;
    });
}
