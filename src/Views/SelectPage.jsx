
import SelectCountry from '../Components/Selects/SelectCountryPage';
import SelectLeague from '../Components/Selects/SelectLeague';
import SelectYear from '../Components/Selects/SelectYearPage';
import SelectTeam from '../Components/Selects/SelectTeamPage';
import React, { useState } from 'react';

function MainSelectView() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedLeague, setSelectedLeague] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');

  return (
    <div>
      <h1>Select Options</h1>
      <div className="flex justify-between items-center">
      <div style={{ 
  display: 'flex', 
  justifyContent: 'space-between', 
  maxWidth: '800px', 
  margin: '0 auto' 
}}>
  <SelectCountry 
    style={{ width: '24%' }}
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
