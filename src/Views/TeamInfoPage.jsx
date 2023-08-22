import React, { useEffect, useState } from 'react';
import { getTeamInfo } from '../Services/TeamService';
import PlayerList from '../Components/Playerlist';
import StatsTable from '../Components/StatsTable';
import GoalsChart from '../Components/GoalsCharts';
function TeamInfoPage() {
    const [teamInfo, setTeamInfo] = useState(null);
    const [players, setPlayers] = useState([]);
    const [stats, setStats] = useState(null);
    const [goalsData, setGoalsData] = useState([]);

    useEffect(() => {
       
        const selectedTeamId = localStorage.getItem('SELECTED_TEAM_ID'); 
        
        getTeamInfo(selectedTeamId)
        .then(data => {
            setTeamInfo(data);
            setPlayers(data.players); 
            setStats(data.stats);     
            setGoalsData(data.goalsData); 
        })
        .catch(error => {
            console.error("Erro ao buscar informações do time:", error);
        });

    }, []);

    return (
        <div className="team-info-container">
            {teamInfo && <h2>{teamInfo.name}</h2>}
            <PlayerList players={players} />
            <StatsTable stats={stats} />
            <GoalsChart data={goalsData} />
        </div>
    );
}

export default TeamInfoPage;