import React, { useEffect, useState } from 'react';
import StatsTable from './StatsTable';
import { getTeamStatistics } from '../Services/TeamnsStatesServices';

function TeamStatsPage() {
  const [stats, setStats] = useState(null);

  useEffect(() => {

    const season = '2019';
    const team = '33';
    const league = '39';

    getTeamStatistics(season, team, league)
      .then(response => {
        setStats(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar estatísticas:", error);
      });
  }, []);

  if (!stats) {
    return <div>Loading...</div>;  
  }

  return (
    <div className="team-stats-container">
      {/* <StatsTable stats={stats} /> */}
    </div>
  );
}

export default TeamStatsPage;
