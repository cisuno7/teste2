import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import './App.css';
import RouterComponent from '../src/Rotas/Router'

function App() {
  return (
    <div className="app-container">
      <RouterComponent />
    </div>
  );
}

export default App;
