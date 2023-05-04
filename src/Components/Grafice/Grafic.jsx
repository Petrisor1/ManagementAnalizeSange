import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import styled from 'styled-components';
const Grafic = () => {
  const barChartRef = useRef();
  const doughnutChartRef = useRef();
  const lineChartRef = useRef();

  useEffect(() => {
    const barChart = new Chart(barChartRef.current, {
      type: 'bar',
      data: {
        labels: ['Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5'],
        datasets: [
          {
            label: 'Blood Pressure',
            data: [120, 135, 110, 125, 130],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
    });

    const doughnutChart = new Chart(doughnutChartRef.current, {
      type: 'doughnut',
      data: {
        labels: ['Good', 'Average', 'Poor'],
        datasets: [
          {
            data: [50, 30, 20],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
    });

    const lineChart = new Chart(lineChartRef.current, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Average Cholesterol',
            data: [190, 180, 200, 210, 205, 195, 190, 180, 185, 200, 205, 195],
            fill: false,
            borderColor: 'rgba(255, 99, 132, 1)',
            tension: 0.1,
          },
        ],
      },
    });

    return () => {
      barChart.destroy();
      doughnutChart.destroy();
      lineChart.destroy();
    };
  }, []);

  const Wrap=styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  `
  return (
  
    <>
    <Wrap>
      <h2>Blood Pressure per Client</h2>
      <canvas ref={barChartRef}></canvas>
      
      {/* <h2>Overall Health Distribution</h2>
      <canvas ref={doughnutChartRef}></canvas>
     */}
      <h2>Average Cholesterol Over Time</h2>
      <canvas ref={lineChartRef}></canvas>
      </Wrap>
    </>
  );
};

export default Grafic;
