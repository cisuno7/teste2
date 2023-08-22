import React, { useEffect, useState } from 'react';
import { getTeamSquad } from '../Services/TeamSquadService';

function TeamSquadPage() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Aqui você pode obter o ID da equipe de onde desejar, pode ser dos states, props, etc.
    const [teamId, setTeamId] = useState(null);


    getTeamSquad(teamId)
      .then(response => {
      
        setPlayers(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar jogadores:", error);
      });
  }, []);

  return (
    <div className="team-squad-container">
      <PlayerList players={players} />
    </div>
  );
}

export default TeamSquadPage;
