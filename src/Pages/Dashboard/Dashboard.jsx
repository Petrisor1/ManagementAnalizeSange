import React, { useEffect,useState } from 'react';
import styled from 'styled-components';
import Grafic from '../../Components/Grafice/Grafic';
import { AspectRatio } from '@chakra-ui/react';
import axios from 'axios';
import { Line,Bar } from 'react-chartjs-2';


const breakpoint = "768px";


const DashboardContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  backgrou;
`;
const WrapParinte=styled.div`
  width: 100%;
  height: 20%;
  paddign: 50px;
  paddign-top: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: ${breakpoint}) {
    flex-direction: column;
    width: 100%;
  height: 30%;
  }
`
const WrapParinte2=styled.div`
  width: 100%;
  height: 60%;
  paddign: 50px;
  paddign-top: 0px;
  display: flex;
  
  flex-direction: row;
  align-items: center;
  @media (max-width: ${breakpoint}) {
    flex-direction: column;
    width: 100%;
    height: 30%;
  }
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
color: #385170;
`
const Titlu=styled.p`
width: 100%;
font-size: 30px;
font-style: bold;
color:  #385170; 
padding-bottom: 40px;
`
const Wrap=styled.div`

height: 100%;
width: 50%;
@media (max-width: ${breakpoint}) {
  
  width: 100%;
 
}

`


// const BarChart = (lb,ks) => {
//   const data = {
//     labels: lb,
//     datasets: [
//       {
//         label: 'My First Dataset',
//         data: ks,
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
         
//         ],
//         borderColor: [
//           'rgb(255, 99, 132)',
         
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return <Bar data={data} options={options} />;
// };

const Dashboard = () => {

  
  const [nrPacienti,setNrPacienti]=useState('');
  const [nrAnalize, setNrAnalize]=useState('');
  const [medieR,setMedieR]=useState([]);
  const [lbls, setLbls] = useState([]);
  const [date, setDate] = useState([]);
  const totPacienti=async()=>{
    await axios.get('http://localhost:3000/pacienti/totPacienti')
    .then(resp=> setNrPacienti(resp.data[0].totPacienti)).catch(err=> console.log(err));
  }
  const totAnalize=async()=>{
    await axios.get('http://localhost:3000/pacienti/totAnalize')
    .then(resp=> { setNrAnalize(resp.data[0].totAnalize)}).catch(err=> console.log(err));
  }
  const medieAnalize=async()=>{
    await axios.get('http://localhost:3000/pacienti/medieRezultate')
    .then(resp=> { 
      setMedieR(resp.data)
      
      medieR.map(r=>{
        const labels = resp.data.map(r => r.nume_test);
        const data = resp.data.map(r => r.medie);
        setLbls(labels);
        setDate(data);
        console.log(lbls);
        console.log(date);
      })
     
    }
      

    
    ).catch(err=> console.log(err));
  }

  useEffect(()=>{
    totPacienti();
    totAnalize();
    medieAnalize();
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

  const data3 = {
    labels: lbls,
    datasets: [
      {
        label: 'Numărul de analize',
        data: date,
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

  const LineChart3 = () => (
    <div style={{ height: "100%" }}>
      <Bar data={data3} options={options} />
    </div>
  );
 


  return (
    <DashboardContainer>
    {/* <Titlu>Dashboard</Titlu> */}

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
        <LinieChart/>
      </WrapCopil>
     </WrapParinte>
      <WrapParinte2>
        <Wrap >
       
        <TitluCard>Media rezultatelor</TitluCard>
       
        <LineChart3/>
     
        </Wrap>
      <Wrap >
        <p>Ne poti gasi in urmatoarea locatie:</p>
     <AspectRatio ratio={4 / 2}>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2688.2273867474723!2d26.242391060415684!3d47.64114797196079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734fc2c901e307d%3A0x805d8c8e5187360a!2sUniversitatea%20%E2%80%9E%C8%98tefan%20cel%20Mare%E2%80%9D%20din%20Suceava!5e0!3m2!1sro!2sro!4v1687300546582!5m2!1sro!2sro" style={{width:'600', height:'450', allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}  ></iframe>
  </AspectRatio>
    </Wrap >
      </WrapParinte2>
     <WrapParinte>
     
    </WrapParinte>
    </DashboardContainer>
  );
};

export default Dashboard;