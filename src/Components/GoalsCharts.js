
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function GoalsChart({ data }) {
    return (
        <div className="goals-chart">
            <h3>Gols por Intervalo de Tempo</h3>
            <BarChart width={600} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timeInterval" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="goals" fill="#8884d8" />
            </BarChart>
        </div>
    );
}

export default GoalsChart;
