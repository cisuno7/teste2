import api from '../APi/APIconfig'; 

export function getTeamStatistics(season, team, league) {
  return api.get('/teams/statistics', {
    params: {
      season: season,
      team: team,
      league: league
    }
  });
}
