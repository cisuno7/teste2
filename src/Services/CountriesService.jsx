import api from '../APi/APIconfig';

export const getCountriesFromTeams = () => {
  return api.get('/teams/countries')
    .then(response => {
      if (response.status === 200) {
        return response.data.response;
      } else {
        throw new Error('Erro ao buscar países das equipes');
      }
    })
    .catch(error => {
      throw error;
    });
}
