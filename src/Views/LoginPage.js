import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

function LoginPage() {
  const defaultKey = process.env.REACT_APP_API_KEY || '';
  const [apiKey, setApiKey] = useState(defaultKey);

 
  // const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
  
  
    if (!apiKey) {
      alert("Por favor, insira uma chave da API válida.");
      return;
    }
  
    
    localStorage.setItem('API_KEY', apiKey);
  
   
    // history.push('/select');
  }

  return (
    <div className="login-container">
      <h2>Insira sua chave da API-Football</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Chave da API"
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default LoginPage;
