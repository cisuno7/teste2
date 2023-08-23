import React, { useState } from 'react'

function SelectTeam({ selectedLeague, selectedYear }) {
    const [teams, setTeams] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState('');
  
    // Lógica para buscar os times baseados na liga e no ano selecionados
  
    return (
      <select
        value={selectedTeam}
        onChange={(e) => setSelectedTeam(e.target.value)}
      >
        <option value="">-- Select a Team --</option>
        {teams.map(team => (
          <option key={team.id} value={team.name}>{team.name}</option>
        ))}
      </select>
    );
  }
  export default SelectTeam;
  