import React, { useState, useEffect } from 'react';
import { getCountries } from '../Services/CountriesService';

function SelectCountryPage() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');


  useEffect(() => {
    getCountries()
      .then(data => {
        setCountries(data);
      })
      .catch(error => {
        console.error("Erro ao buscar os países:", error);
      });

  }, []);

  function handleCountrySelection(event) {
    setSelectedCountry(event.target.value);
  }

  function proceedToLeagueSelection() {
    if (!selectedCountry) {
      alert("Por favor, selecione um país.");
      return;
    }

    // history.push('/select-league', { country: selectedCountry });
  }

  return (
    <div className="select-country-container">
      <h2>Selecione um País</h2>
      <select value={selectedCountry} onChange={handleCountrySelection}>
        <option value="">-- Selecione --</option>
        {countries.map(country => (
          <option key={country.id} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      <button onClick={proceedToLeagueSelection}>Prosseguir</button>
    </div>
  );
}

export default SelectCountryPage;
