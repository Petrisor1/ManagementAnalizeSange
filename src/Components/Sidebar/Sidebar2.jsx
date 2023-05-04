import React, { useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import logo from "../../Images/Logo.png";


const breakpoint = "768px";
const Logo = styled.img`
  width: 150px;
  height: 150px;
  @media (max-width: ${breakpoint}) {
    width: 100px;
    height: 100px;
  }
`;
const Bara = styled.hr`
  width: 100%;
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
  background: #2f3640;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left:0;
  transition: 350ms;
  z-index: 10;
  @media (max-width: ${breakpoint}) {
    width: 250px;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  
`;
const ButtonsWrap=styled.div`
width: 100%;
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


const Sidebar2 = () => {
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
            <Link to="/dashboard">
          <Logo />
        </Link>
        <Bara />
        <br />
        <ButtonsWrap>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
        </ButtonsWrap>
          <br></br>
          </SidebarWrap>
          
        </SidebarNav>
        {/* <Overlay  onClick={hideSidebar}/> */}
      </IconContext.Provider>
    </>
  );
};

export default Sidebar2;
