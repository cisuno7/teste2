import React, { useState } from 'react';
import localStorageService from '../Services/LocalStorage';  
import { useNavigate } from 'react-router-dom';



function LoginPage() {
  const defaultKey  = import.meta.env.VITE_REACT_APP_API_KEY || '';
  const [apiKey, setApiKey] = useState(defaultKey);
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    
    if (!apiKey) {
      alert("Por favor, insira uma chave da API válida.");
      return;
    }
    
    localStorageService.setItem('API_KEY', apiKey);
   
   
    navigate('/select');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Insira sua chave da API-Football
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="apiKey" className="sr-only">Chave da API</label>
              <input
                id="apiKey"
                name="apiKey"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Chave da API"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
