import api from '../APi/APIconfig';

export const getCountries = () => {
  return api.get('/paises')
    .then(response => {
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error('Erro ao buscar países');
      }
    })
    .catch(error => {
      throw error;
    });
}
