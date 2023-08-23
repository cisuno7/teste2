import React, { useState, useEffect } from 'react';
import { getLeagues } from '../../Services/LeaguesService';

function SelectLeaguePage() {
  const [leagues, setLeagues] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState('');

  useEffect(() => {
    getLeagues()
      .then(data => {
        setLeagues(data);
      })
      .catch(error => {
        console.error("Erro ao buscar as ligas:", error);
      });  
  }, []);

  function handleLeagueSelection(event) {
    setSelectedLeague(event.target.value);
  }

  function proceedToNextSelection() {
    if (!selectedLeague) {
      alert("Por favor, selecione uma liga.");
      return;
    }
    // Proceda para a próxima seleção ou navegação.
  }

  return (
    <div className="select-league-container flex flex-col items-center justify-center min-h-screen bg-gray-200 p-4">
      <h2 className="text-2xl mb-4">Selecione uma Liga</h2>
      <select
        value={selectedLeague}
        onChange={handleLeagueSelection}
        className="w-64 p-2 mb-4 border rounded shadow"
      >
        <option value="">-- Selecione --</option>
        {leagues.map(league => (
          <option key={league.league.id} value={league.league.name}>
            {league.league.name}
          </option>
        ))}
      </select>
      <button
        onClick={proceedToNextSelection}
        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded shadow"
      >
        Prosseguir
      </button>
    </div>
  );
}

export default SelectLeaguePage;
