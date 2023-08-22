
import React from 'react';

function StatsTable({ stats }) {
    return (
        <div className="stats-table">
            <h3>Estatísticas</h3>
            <table>
                <thead>
                    <tr>
                        <th>Jogos</th>
                        <th>Vitórias</th>
                        <th>Derrotas</th>
                        <th>Empates</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{stats.totalGames}</td>
                        <td>{stats.wins}</td>
                        <td>{stats.losses}</td>
                        <td>{stats.draws}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default StatsTable;
