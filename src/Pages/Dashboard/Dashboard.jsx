import React from 'react';
import styled from 'styled-components';
import Grafic from '../../Components/Grafice/Grafic';
const DashboardContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  backgrou;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
    <h1>Dashboard</h1>
     <Grafic/>
    </DashboardContainer>
  );
};

export default Dashboard;