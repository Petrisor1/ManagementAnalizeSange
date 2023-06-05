import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const breakpoint = "768px";
 export  const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 4px solid #dc143c;
    cursor: pointer;
    
  }
`;

export const SidebarLabel = styled.span`
  margin-left: 16px;
  @media (max-width: ${breakpoint}) {
    display: true;
  }
`;
export const SidebarLabelBtn=styled.span`
margin-left: 16px;
@media (max-width: ${breakpoint}) {
 
  
}
`
const Wrap=styled.div`
display: flex;
`
export const DropdownLink = styled(Link)`
  background: #414757;
  height: 50px;
  width: 78%;
  
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  overflow: false;
  margin-left: 50px;
  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
  @media (max-width: ${breakpoint}) {
    width: 76%;
    margin-left: 60px;
    height: 30px;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <Wrap>
          {item.icon}
          <SidebarLabelBtn>{item.title}</SidebarLabelBtn>
        </Wrap>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
