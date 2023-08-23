import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from '../Views/LoginPage';
import SelectPage from '../Views/SelectPage';
import TeamInfoPage from '../Views/TeamInfoPage';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/select" element={<SelectPage />} />
          <Route path="/team" element={<TeamInfoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
