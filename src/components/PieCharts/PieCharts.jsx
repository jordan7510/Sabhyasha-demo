import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import datalabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  ArcElement, Tooltip, Legend, datalabels
);

const items = [
  { itemName: "Service", itemValue: 1, color: "#FEA51B" },
  { itemName: "Product", itemValue: 99, color: "#5C2F18" },
];

const PieCharts = ({ angle, draw }) => {
    const data = {
        labels: items.map(item => item.itemName),
        datasets: [
          {
            data: items.map(item => item.itemValue),
            backgroundColor: items.map(item => item.color),
            borderAlign: "inner",
            borderWidth: 1,
            borderRadius: 5,
            circumference: angle,
          }
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          datalabels: {
            anchor: 'center',
            align: 'end',
            offset: 10,
            font: {
              size: 35,
              weight: 'bold',
            },
            color: '#ffffff',
            formatter: (value, ctx) => {
              const dataset = ctx.chart.data.datasets[0];
              const total = dataset.data.reduce((acc, cur) => acc + cur);
              const percentage = ((value * 100) / total).toFixed(1) + "%";
              return `${percentage}`;
            },
          },
          legend: {
            display: false,
          }
        },
      };
    
      return (
        <div style={{
          overflow: 'visible',
          width: '100%',
        }}>
          <Pie data={data} options={options} style={{
            filter: 'drop-shadow(10px 8px 2px 5px #898D9B)',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }} />
        </div>
      );
    };
export default PieCharts;