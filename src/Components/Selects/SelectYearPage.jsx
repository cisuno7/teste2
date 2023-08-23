import React, { useState, useEffect } from 'react';
import { getSeasons } from '../../Services/SeasonService';

function SelectYearPage() {
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState('');

  useEffect(() => {
    getSeasons()
      .then(data => {
        setSeasons(data);
      })
      .catch(error => {
        console.error("Erro ao buscar as temporadas:", error);
      });  
  }, []);

  function handleSeasonSelection(event) {
    setSelectedSeason(event.target.value);
  }

  function proceedToNextSelection() {
    if (!selectedSeason) {
      alert("Por favor, selecione uma temporada.");
      return;
    }
    // Proceda para a próxima seleção ou navegação.
  }

  return (
    <div className="select-season-container flex flex-col items-center justify-center min-h-screen bg-gray-200 p-4">
      <h2 className="text-2xl mb-4">Selecione uma Temporada</h2>
      <select
        value={selectedSeason}
        onChange={handleSeasonSelection}
        className="w-64 p-2 mb-4 border rounded shadow"
      >
        <option value="">-- Selecione --</option>
        {seasons.map(season => (
          <option key={season} value={season}>
            {season}
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

export default SelectYearPage;
