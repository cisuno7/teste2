import React, { useState, useEffect } from 'react';
import axios from 'axios';


// import { useHistory } from 'react-router-dom';

function SelectCountryPage() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');


  // const history = useHistory();

  useEffect(() => {
    
    const apiKey = localStorage.getItem('API_KEY');

    
    axios.get('URL_DA_API_PARA_PEGAR_PAISES', {
      headers: {
        'API_KEY': apiKey
      }
    })
    .then(response => {
      setCountries(response.data);
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
