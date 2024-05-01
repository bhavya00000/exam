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
          label: 'None',
          data: Object.values(ingredients),
          backgroundColor: [
            'rgb(238, 171, 100)',
            'rgb(245, 127, 0)',
            'rgb(188, 188, 188)',
            'rgb(255, 251, 19)',
          ],
          borderColor: [
            'rgb(238, 171, 100)',
            'rgb(245, 127, 0)',
            'rgb(188, 188, 188)',
            'rgb(255, 251, 19)',
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
    <canvas id="myChart" width="400" height="400" ></canvas>
  );
};

export default Graph;
