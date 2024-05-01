// Graph.js
import React from 'react';
import Chart from 'chart.js/auto';

const Graph = ({ ingredients }) => {
  React.useEffect(() => {
    const ctx = document.getElementById('myChart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(ingredients),
        datasets: [{
          label: 'Ingredients',
          data: Object.values(ingredients),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    return () => chart.destroy();
  }, [ingredients]);

  return (
    <canvas id="myChart" width="400" height="400"></canvas>
  );
};

export default Graph;
