import React, { useState } from 'react';
import SelectCountry from '../Components/Selects/SelectCountryPage';
import SelectLeague from '../Components/Selects/SelectLeague';
import SelectYear from '../Components/Selects/SelectYearPage';
import SelectTeam from '../Components/Selects/SelectTeamPage';

function MainSelectView() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedLeague, setSelectedLeague] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh', // Definir a altura mínima para ocupar toda a tela
      width: '100%',
      padding: '20px', // Adicionar um espaçamento
    }}>
      <h1>Select Options</h1>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%', // Usar largura total
        maxWidth: '800px', // Limitar a largura máxima se necessário
      }}>
        <SelectCountry
          style={{ width: '28%' }}
          selected={selectedCountry}
          onSelectionChange={setSelectedCountry}
        />
        <SelectLeague
          style={{ width: '24%' }}
          selectedCountry={selectedCountry}
          selected={selectedLeague}
          onSelectionChange={setSelectedLeague}
        />
        <SelectYear
          style={{ width: '24%' }}
          selected={selectedYear}
          onSelectionChange={setSelectedYear}
        />
        <SelectTeam
          style={{ width: '24%' }}
          selectedLeague={selectedLeague}
          selectedYear={selectedYear}
          selected={selectedTeam}
          onSelectionChange={setSelectedTeam}
        />
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button>
          Continue
        </button>
      </div>
    </div>
  );
}

export default MainSelectView;
