import React from 'react';
import { BrowserRouter , Route,Routes} from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import Sidebar2 from './Components/Sidebar/Sidebar2.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import Pacienti from './Pages/Pacienti/Pacienti.jsx'
import AdaugaPacient from './Pages/Pacienti/AaugaPacient.jsx';
import Login from './Pages/Login/Login.jsx'
//import Patients from './Patients'; // Import Patients component
//import Medications from './Medications'; // Import Medications component

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
`

const App = () => {
  return (
    <BrowserRouter>
    {/* <Login/> */}

    

        <Sidebar2 />
        
        <ContentShifted>
          <Routes>         
           <Route path="/dashboard"  element={<Dashboard/>} />
           <Route path="/pacienti"  element={<Pacienti/>} />
           <Route path="/pacienti/adaugaPacient" element={<AdaugaPacient/>}/>
            {/* <Route path="/patients" component={Patients} />
            <Route path="/medications" component={Medications} /> */}
          </Routes>
        
          </ContentShifted>
    
        
      
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
