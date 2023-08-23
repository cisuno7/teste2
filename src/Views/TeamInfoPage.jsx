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
        <div className="team-info-container bg-gray-100 p-6 rounded-lg shadow-md">
            {teamInfo && 
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    {teamInfo.name}
                </h2>}
            
            <div className="mb-6">
                <PlayerList players={players} />
            </div>

            <div className="mb-6">
                <StatsTable stats={stats} />
            </div>

            <div>
                <GoalsChart data={goalsData} />
            </div>
        </div>
    );
}

export default TeamInfoPage;
