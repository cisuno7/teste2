import React, { useEffect, useState } from 'react';
import { getTeamSquad } from '../Services/TeamSquadService';

// Defina o componente PlayerList aqui
function PlayerList({ players }) {
    return (
        <div className="player-list">
            <h3>Jogadores</h3>
            <ul>
                {players.map(player => (
                    <li key={player.id}>
                        <img src={player.photoUrl} alt={player.name} />
                        <span>{player.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function TeamSquadPage() {
  const [players, setPlayers] = useState([]);
  const teamId = 1;  // Por enquanto, vamos fixar um teamId. Você pode mudar isso conforme necessário.

  useEffect(() => {
      getTeamSquad(teamId)
          .then(response => {
              setPlayers(response.data);
          })
          .catch(error => {
              console.error("Erro ao buscar jogadores:", error);
          });
  }, []);  // O teamId é constante, por isso não é necessário colocá-lo nas dependências.

  return (
      <div className="team-squad-container">
          <PlayerList players={players} />
      </div>
  );
}


export default TeamSquadPage;
