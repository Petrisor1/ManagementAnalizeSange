import React from 'react';
import  { useState, useEffect,useReducer } from 'react';
import { BrowserRouter , Route, Routes, Navigate} from 'react-router-dom';
import styled from 'styled-components';
import Sidebar_pacienti from './Components/Sidebar/Sidebar_pacienti.jsx';
import Sidebar2 from './Components/Sidebar/Sidebar2.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import Pacienti from './Pages/Pacienti/Pacienti.jsx'
import AdaugaPacient from './Pages/Pacienti/AaugaPacient.jsx';
import {Login,variabila} from './Pages/Login/Login.jsx'
import { createGlobalStyle } from 'styled-components';
import useToken from './Pages/Login/useToken.js';
import { ChakraProvider } from "@chakra-ui/react";
import RezultatePacient from './Pages/Pacienti/RezultatePacient.jsx';
import EvolutieAnalize from './Pages/Analize/EvolutieAnalize.jsx';
import TesteNegative from './Pages/Analize/TesteNegative.jsx';
import Statistici from './Pages/Analize/Statistici.jsx';

const GlobalStyle = createGlobalStyle`
  body::-webkit-scrollbar {
    width: 10px;
  }

  body::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  body::-webkit-scrollbar-thumb {
    background: #888;
  }

  body::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  body {
    scrollbar-width: thin;
    scrollbar-color: #888 #f1f1f1;
    background-color: lightblue;
  }
`;
const breakpoint = "768px";
const AppContainer = styled.div`
  display: flex;
  transition: margin-left 350ms;
`;

const ContentShifted = styled.div`
padding-left: 250px;
@media (max-width: ${breakpoint}) {
  padding-left: 0px;
  transition: padding-left 350ms;
}
`;

const baraSus=styled.div`
width: 100%;
`;




///////////////////////////////////////////////////////////////////////////////////////
const App = () => {
  const {token,setToken}=useToken();


 
  if(!token){
    return <Login setToken={setToken}/>
  }
  
  return (
    
    <BrowserRouter>
      <GlobalStyle />
   

        <Sidebar_pacienti />
        <ChakraProvider>
        <ContentShifted>
          <Routes>    
           <Route path="/"  element={<Dashboard/>} />
           <Route path="/pacienti"  element={<Pacienti/>} />
           <Route path="/pacienti/adaugaPacient" element={<AdaugaPacient/>}/>
            <Route path='/pacienti/rezultatePacient' element={<RezultatePacient/>} />
            <Route path='/statistici/evolutie' element={<EvolutieAnalize/>}/>
            <Route path='/analize/evolutie' element={<TesteNegative/>}/>
            <Route path='/statistici' element={<Statistici/>}/>
          </Routes>
          </ContentShifted>
          </ChakraProvider>
    </BrowserRouter>
 
    
    
  );
};

export default App;
