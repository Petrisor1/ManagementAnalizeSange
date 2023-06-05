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
//import Patients from './Patients'; // Import Patients component
//import Medications from './Medications'; // Import Medications component
import { createGlobalStyle } from 'styled-components';
import useToken from './Pages/Login/useToken.js';
import { ChakraProvider } from "@chakra-ui/react";
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
  // else{
  //   return (
    
  //     <BrowserRouter>
  //       <GlobalStyle />
  //     {/* <Login/> */}
  
  //         <Sidebar2 />
          
  //         <ContentShifted>
  //           <Routes>   
  //           {/* <Route path="/"  element={<Login/>} /> */}
  //            <Route path="/dashboard"  element={<Dashboard/>} />
  //            <Route path="/pacienti"  element={<Pacienti/>} />
  //            <Route path="/pacienti/adaugaPacient" element={<AdaugaPacient/>}/>
  //             {/* <Route path="/patients" component={Patients} />
  //             <Route path="/medications" component={Medications} /> */}
  //           </Routes>
          
  //           </ContentShifted>
      
  //     </BrowserRouter>
  //     // <BrowserRouter>
  //     //   <Sidebar2/>
  //     //   <Routes>         
  //     //         <Route path="/dashboard"  element={<Dashboard/>} />
  //     //         <Route path="/pacienti"  element={<Pacienti/>} />
  //     //        <Route path="/pacienti/adaugaPacient" element={<AdaugaPacient/>}/>
  //     //          {/* <Route path="/patients" component={Patients} />
  //     //          <Route path="/medications" component={Medications} /> */}
  //     //      </Routes>
  //     // </BrowserRouter>
  //   );
  // }
  return (
    
    <BrowserRouter>
      <GlobalStyle />
    {/* <Login/> */}
    {/* { 
    verifica(variabila)
    } */}

        <Sidebar_pacienti />
        <ChakraProvider>
        <ContentShifted>
          <Routes>   
            
          {/* <Route path="/"  element={<Login/>} /> */}
           <Route path="/"  element={<Dashboard/>} />
           <Route path="/pacienti"  element={<Pacienti/>} />
           <Route path="/pacienti/adaugaPacient" element={<AdaugaPacient/>}/>
            {/* <Route path="/patients" component={Patients} />
            <Route path="/medications" component={Medications} /> */}
            
          </Routes>
         
          </ContentShifted>
          </ChakraProvider>
    </BrowserRouter>
 
    // <BrowserRouter>
    //   <Sidebar2/>
    //   <Routes>         
    //         <Route path="/dashboard"  element={<Dashboard/>} />
    //         <Route path="/pacienti"  element={<Pacienti/>} />
    //        <Route path="/pacienti/adaugaPacient" element={<AdaugaPacient/>}/>
    //          {/* <Route path="/patients" component={Patients} />
    //          <Route path="/medications" component={Medications} /> */}
    //      </Routes>
    // </BrowserRouter>
    
  );
};

export default App;
