import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineMenu, AiOutlineLogout } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BiCog } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import logo from "../../Images/Logo.png";
const breakpoint = "768px";

const SidebarContainer = styled.div`
  position: fixed;
  width: 250px;
  height: 100%;
  background-color: #2f3640;
  display: flex;
  flex-direction: column;
  align-content: center;
  transition: width 0.3s;
  justify-content: space-between;
  @media (max-width: ${breakpoint}) {
    width: 60px;
  }
`;

const NavItem = styled.button`
  display: flex;

  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 15px 20px;
  margin-bottom: 15px;
  border: none;
  background-color: #3c4858;
  color: #dcdde1;
  font-size: 18px;
  text-align: left;
  cursor: pointer;
  border-radius: 10px;
  width: 100%;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: #4b6584;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
`;
const DropedItem = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin-bottom: 15px;
  border: none;
  background-color: #407088;
  color: #dcdde1;
  font-size: 18px;
  text-align: left;
  cursor: pointer;
  border-radius: 10px;
  width: 100%;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: #4b6584;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
`;
const Icon = styled.span`
  margin-right: 10px;
  display: flex;
  justify-content: center;
  width: 40px;

  @media (max-width: ${breakpoint}) {
    margin-right: 0;
  }
`;

const Text = styled.span`
  @media (max-width: ${breakpoint}) {
    display: none;
  }
`;
const ContainerSus = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const ContainerJos = styled.div`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  flex-direction: center;
  align-items: center;
`;


const Logo = styled.img`
  margin-top: 20px;
  width: 150px;
  height: 150px;
  @media (max-width: ${breakpoint}) {
    width: 75px;
    height: 75px;
  }
`;
const Dropdown = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;
const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  margin-bottom: 15px;
  border: none;
  background-color: #3c4858;
  color: #dcdde1;
  font-size: 18px;
  text-align: left;
  cursor: pointer;
  border-radius: 10px;
  width: 100%;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: #4b6584;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
`;
Logo.defaultProps = {
  src: logo,
};

const Bara = styled.hr`
  width: 100%;
`;

const Sidebar = () => {
  const [generalOpen, setGeneralOpen] = useState(false);
  const [clientsOpen, setClientsOpen] = useState(false);
  const [manageOpen, setManageOpen] = useState(false);
  const handleDropdown = (dropdown) => {
    if (dropdown === "general") setGeneralOpen(!generalOpen);
    if (dropdown === "pacienti") setClientsOpen(!clientsOpen);
    if (dropdown === "manage") setManageOpen(!manageOpen);
  };
  const handleDropdown2 = (dropdown2) => {
    if (dropdown2 === "general") setGeneralOpen(false);
    if (dropdown2 === "pacienti") setClientsOpen(false);
    if (dropdown2 === "manage") setManageOpen(false);
  };
  return (
    <SidebarContainer>
      <ContainerSus>
        <Link to="/dashboard">
          <Logo />
        </Link>
        <Bara />
        <br />

        <Link to="/dashboard" style={{ width: "90%" }}>
           <NavItem>
            <Icon>
              <AiOutlineMenu />
            </Icon>
            <Text> General</Text>
            <IoMdArrowDropdown onClick={() => handleDropdown("general")} />
          </NavItem> 
          
        </Link>
        {generalOpen && (
          <Dropdown>
            <Link style={{ width: "70%" }}>
              <DropedItem to="/general/option1">Option 1</DropedItem>
            </Link>
            <Link style={{ width: "70%" }}>
              <DropedItem to="/general/option2">Option 2</DropedItem>
            </Link>
          </Dropdown>
        )}

        <Link to="/pacienti" style={{ width: "90%" }}>
          <NavItem>
            <Icon>
              <FiUsers />
            </Icon>
            <Text> Pacienti </Text>
            <IoMdArrowDropdown onClick={() => handleDropdown("pacienti")} />
          </NavItem>
        </Link>
        {clientsOpen && (
          <Dropdown>
            <Link to="/pacienti/adaugaPacient" style={{ width: "70%" }}>
              
              <DropedItem to="/pacienti/adaugaPacient">
                Adauga pacient
              </DropedItem>
            </Link>
            <Link style={{ width: "70%" }}>
              <DropedItem to="/pacineti/option2">Option 2</DropedItem>
            </Link>
          </Dropdown>
        )}

        <Link to="/" style={{ width: "90%" }}>
          <NavItem>
            <Icon>
              <BiCog />
            </Icon>
            <Text> Manage </Text>
            <IoMdArrowDropdown onClick={() => handleDropdown("manage")} />
          </NavItem>
        </Link>

        {manageOpen && (
          <Dropdown>
            <Link style={{ width: "70%" }}>
              <DropedItem to="/general/option2">Option 1</DropedItem>
            </Link>
            <Link style={{ width: "70%" }}>
              <DropedItem to="/general/option2">Option 2</DropedItem>
            </Link>
          </Dropdown>
        )}
      </ContainerSus>

      <ContainerJos>
        <Link style={{ width: "90%" }}>
          <NavItem>
            <Icon>
              <AiOutlineLogout />
            </Icon>
            <Text>Logout</Text>
          </NavItem>
        </Link>
      </ContainerJos>
    </SidebarContainer>
  );
};


export default Sidebar;
