import api from '../APi/APIconfig'; // Importando sua configuração do axios.

export function getTeamSquad(teamId) {
  return api.get(`/players/squads`, {
    params: {
      team: teamId
    }
  });
}
