import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const TransactionChart = ({ transactions }) => {
  const income = transactions.filter(t => t.amount > 0).reduce((acc, t) => acc + t.amount, 0);
  const expense = Math.abs(transactions.filter(t => t.amount < 0).reduce((acc, t) => acc + t.amount, 0));

  const data = {
    datasets: [{
      data: [income, expense],
      backgroundColor: ['#2ecc71', '#e74c3c'],
      hoverOffset: 4,
      cutout: '70%'
    }]
  };

  return (
    <div className="chart-container">
      <Doughnut data={data} />
    </div>
  );
};

export default TransactionChart;