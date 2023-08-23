import React, { useState, useEffect } from 'react';
import { getCountriesFromTeams } from '../../Services/CountriesService';

function SelectCountryPage() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    getCountriesFromTeams()
      .then(data => {
        setCountries(data);
      })
      .catch(error => {
        console.error("Erro ao buscar os países das equipes:", error);
      });  
  }, []);

  function handleCountrySelection(event) {
    setSelectedCountry(event.target.value);
  }

  function proceedToNextSelection() {
    if (!selectedCountry) {
      alert("Por favor, selecione um país.");
      return;
    }
    // Proceda para a próxima seleção ou navegação.
  }

  return (
    <div className="select-country-container flex flex-col items-center justify-center min-h-screen bg-gray-200 p-4">
      <h2 className="text-2xl mb-4">Selecione um País</h2>
      <select
        value={selectedCountry}
        onChange={handleCountrySelection}
        className="w-64 p-2 mb-4 border rounded shadow"
      >
        <option value="">-- Selecione --</option>
        {countries.map(country => (
          <option key={country.name} value={country.name}>
            {country.name}
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

export default SelectCountryPage;
