
import React from 'react';

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

export default PlayerList;
