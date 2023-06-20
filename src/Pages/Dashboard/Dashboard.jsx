import React, { useEffect,useState } from 'react';
import styled from 'styled-components';
import Grafic from '../../Components/Grafice/Grafic';
import { AspectRatio } from '@chakra-ui/react';
import axios from 'axios';
import { Line,Bar } from 'react-chartjs-2';

const DashboardContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  backgrou;
`;
const WrapParinte=styled.div`
  width: 100%;
  height: 30%;
  paddign: 50px;
  paddign-top: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const WrapParinte2=styled.div`
  width: 100%;
  height: 70%;
  paddign: 50px;
  paddign-top: 0px;
  display: flex;
  background: black;
  flex-direction: row;
  align-items: center;
`
const WrapCopil=styled.div`
  width: 100%;
  height: 100%;
  margin: 30px;
  margin-top: 0px;
  background: #e4f1fe;
  border-radius: 30px;
  
  
`
const TitluCard=styled.div`
padding: 10px;
font-size: 20px;

`
const WrapGeneral=styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const CentruCard=styled.div`
font-size: 60px;
`
const Titlu=styled.p`
width: 100%;
font-size: 30px;
font-style: bold;
color:  #385170; 
padding-bottom: 40px;
`



const BarChart = () => {
  const data = {
    labels: ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie','Iulie','August','Septembrie','Octombrie','Noiembrie','Decembrie'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
         
        ],
        borderColor: [
          'rgb(255, 99, 132)',
         
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

const Dashboard = () => {

  
  const [nrPacienti,setNrPacienti]=useState('');
  const [nrAnalize, setNrAnalize]=useState('');
  const totPacienti=async()=>{
    await axios.get('http://localhost:3000/pacienti/totPacienti')
    .then(resp=> setNrPacienti(resp.data[0].totPacienti)).catch(err=> console.log(err));
  }
  const totAnalize=async()=>{
    await axios.get('http://localhost:3000/pacienti/totAnalize')
    .then(resp=> { setNrAnalize(resp.data[0].totAnalize)}).catch(err=> console.log(err));
  }
  useEffect(()=>{
    totPacienti();
    totAnalize();
  },[])

  const data = {
    labels: ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie','Iulie','August','Septembrie','Octombrie','Noiembrie','Decembrie'],
    datasets: [
      {
        label: 'Numărul de pacienți',
        data: [1,2, 3, 6,9, 10, 15, parseInt({nrPacienti})],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };
  const data2 = {
    labels: ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie','Iulie','August','Septembrie','Octombrie','Noiembrie','Decembrie'],
    datasets: [
      {
        label: 'Numărul de analize',
        data: [1,2,8,10,12,14, 21, parseInt({nrAnalize})],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  
  const LineChart = () => (
    <div style={{ height: "100%" }}>
      <Line data={data} options={options} />
    </div>
  );
  const LinieChart=()=>(
    <div style={{ height: "100%" }}>
      <Line data={data2} options={options} />
    </div>
  )


  return (
    <DashboardContainer>
    <Titlu>Dashboard</Titlu>

    <WrapParinte>
    
      <WrapCopil>
        <TitluCard>Total Pacienti</TitluCard>
        <WrapGeneral>
          <CentruCard>
            {nrPacienti}
          </CentruCard>
        </WrapGeneral>
        {/* <Grafic/> */}
        <LineChart/>
      </WrapCopil>
      
      <WrapCopil>
        <TitluCard>Numarul total de analize</TitluCard>
        <WrapGeneral>
          <CentruCard>
            {nrAnalize}
          </CentruCard>
        </WrapGeneral>
        <LinieChart/>
      </WrapCopil>
      <WrapCopil>
        <TitluCard>Dashboard</TitluCard>
        <WrapGeneral>
          <CentruCard>
            {nrAnalize}
          </CentruCard>
        </WrapGeneral>
        <BarChart/>
      </WrapCopil>
      {/* <WrapCopil>
        <TitluCard>Dashboard</TitluCard>
        <Grafic/>
      </WrapCopil> */}
     </WrapParinte>
      <WrapParinte2>
      sdfg
      </WrapParinte2>
     {/* <WrapParinte>
     <div style={{width: '60%', display: '',alignContent:'center',border:'2px black solid'}}>
     <AspectRatio ratio={4 / 2}>
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng'
    />
  </AspectRatio>
    </div>
    </WrapParinte> */}
    </DashboardContainer>
  );
};

export default Dashboard;