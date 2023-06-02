import React, { useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { DataSidebarPacienti } from './DataSidebarPacienti';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import logo from "../../Images/Logo.png";
import {RiLogoutBoxFill} from 'react-icons/ri';
//import componente style din alt fisier
import {SidebarLink} from "./SubMenu";
import { variabila}  from '../../Pages/Login/Login';
import {SidebarLabelBtn} from "./SubMenu";
import { SidebarData } from './SidebarData';

const breakpoint = "768px";
const Logo = styled.img`
  width: 150px;
  height: 150px;
  margin-top: 50px;
  @media (max-width: ${breakpoint}) {
    width: 100px;
    height: 100px;
    margin-top: 0px;
  }
`;
const Bara = styled.hr`
  width: 100%;
  margin: 0px;
  paddign: 0px;
  border-right-width: 0px;
  border-left-width: 0px
`;
Logo.defaultProps = {
  
    src: logo,
  };

const Nav = styled.div`
background: rgb(47, 54, 64);
height: 50px;
width: 40px;
display: flex;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: stretch;
align-content: center;
flex-wrap: nowrap;

flex-direction: column-reverse;
@media (max-width: ${breakpoint})
{
  width: 100%;
  transition: width 350ms;
}
`;

const NavIcon = styled.div`
font-size: 2rem;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
display:none;
@media (max-width: ${breakpoint}) {
  justify-content: center;
  display: block;
  align-items: center;
  padding-right: 20px;
  
`;



const SidebarNav = styled.nav`
scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
  overflow-y: auto;
  background: #2f3640;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: start; // changed this
  position: fixed;
  top: 0;
  left: 0;
  transition: 350ms;
  z-index: 10;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  @media (max-width: ${breakpoint}) {
    width: 250px;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    height: calc(100vh - 0px); // ajustarea aici pentru mobile
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3%;
  padding-bottom: 800px;
  @media (max-width: ${breakpoint}) {
  gap: 0%;
  }
`;
const ButtonsWrap=styled.div`
width: 100%;
margin: 0px;
paddign: 0px;
`;
const MoveToRight=styled.div`

width: 100%;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
display: none;

@media (max-width: ${breakpoint}) {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}
`;
const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 40%;
  z-index: 9;
  position: absolute;
  display: ${({ overlay }) => (overlay ? 'none' : 'block')};
`;
const LogOutBtn = styled(Link)`
  width: 83%;
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 30px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-bottom: 4px solid #dc143c;
    cursor: pointer;
  }
`;
const SpatiuExtra = styled.div`
  height: 1000px;
  width: 100%;
`;

const logOut=()=>{
  localStorage.removeItem('token');
  localStorage.removeItem('variabila');
  window.reload();
}

 const verifica=(variabila)=>{
    if('CNP'==localStorage.getItem('variabila') ){
      return (DataSidebarPacienti.map((item, index) => {
        return <SubMenu item={item} key={index} />;
      }))
    }
    else if('Email'==localStorage.getItem('variabila')){
      return (
        
        SidebarData.map((item, index) => {
          return <SubMenu item={item} key={index} />;
        })
      )
    }
  }
const Sidebar_pacienti = () => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  const [sidebar, setSidebar] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const showSidebar = (event) =>
  { event.stopPropagation();
    setSidebar(!sidebar);
    setOverlay(!overlay);
  };
  const hideSidebar = () => {
    setSidebar(false);
    setOverlay(false);
  };
  
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars  onClick={(event)=>showSidebar(event)} size='40px' />
          </NavIcon>
        </Nav>
        
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <MoveToRight to="#">
              <AiIcons.AiOutlineClose   onClick={(event)=>showSidebar(event)} size='40px' />
            </MoveToRight>
            <Link to="/">
          <Logo />
        </Link>
        <Bara />
        <br />
        <ButtonsWrap>
            {verifica(variabila)
            /* {DataSidebarPacienti.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })} */
            }
        </ButtonsWrap>
          <br></br>
          {/* //////////// */}


        
          <LogOutBtn onClick={()=>logOut() }>
            <div>
            <RiLogoutBoxFill/>
            <SidebarLabelBtn>Deconectare</SidebarLabelBtn>
            </div>
          </LogOutBtn>
          
          <SpatiuExtra/>
  {/* //////////// */}
          </SidebarWrap>
            
        </SidebarNav>
        {/* <Overlay  onClick={hideSidebar}/> */}
      </IconContext.Provider>
    </>
  );
};

export default Sidebar_pacienti;
