import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../Images/Logo_Login.png'; // Import your logo image here
import backgroundImg from '../../Images/blood.jpg'; // Import your background image here
import axios from 'axios';
import PropTypes from 'prop-types';
const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
`;

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 40px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const LogoImage = styled.img`
  width: 150px;
  height: auto;
`;

const LoginFormTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const LoginButton = styled.button`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #40739e;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #3867d6;
  }
`;
const WrapperButton = styled.div`
width: 100%;
height: 100px;
display: flex;
flex-direction: row;
justify-content: center;
`
const Button =styled.button`
width: 100px;
height: 50px;
background-color: ${props => props.pressed ? '#2f3640' : 'white'};
color: ${props => props.pressed ? 'white' : 'black'};
border: 0px;
font-family: Georgia;
`


const handleLogin = async (data) => {
  try {
    const response = await axios.post('http://localhost:3000/login/auth', data, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });

    return response.data.token;
  } catch (error) {
    console.log('There was an error!', error);
    return null;
  }
};

const handleLogin_laborator=async (data) => {
  try {
    const response = await axios.post('http://localhost:3000/laborator/auth_laborator', data, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });

    return response.data.token;
  } catch (error) {
    console.log('There was an error!', error);
    return null;
  }
}


var variabila='';
const Login = ({setToken}) => {
  const renderSmth=(id)=>{
    switch(id){
      case 'CNP': return (<form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>{id}</FormLabel>
          <FormInput
            value={CNP}
            onChange={(e) => setCNP(e.target.value) }
            placeholder={id}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Parola</FormLabel>
          <FormInput
            type="parola"
            value={parola}
            onChange={(e) => setParola(e.target.value)}
            placeholder="Parola"
            required
          />
        </FormGroup>
        <LoginButton type="submit" >Login</LoginButton>
      </form>)
      case "Email": return (<form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>{id}</FormLabel>
          <FormInput
            value={email}
            onChange={(e) => setEmail(e.target.value) }
            placeholder={id}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Parola</FormLabel>
          <FormInput
            type="parola"
            value={parola}
            onChange={(e) => setParola(e.target.value)}
            placeholder="Parola"
            required
          />
        </FormGroup>
        <LoginButton type="submit" >Login</LoginButton>
      </form>)
    }
  }


  const [email, setEmail] = useState('');
  const [parola, setParola] = useState('');
  const [CNP,setCNP]=useState('');
  const [selectedButton, setSelectedButton] = useState(null);

  const [id,setId]=useState('Email');
  const handleClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
    if(buttonNumber==1)
    {
      setId("CNP");
      
    }
    if(buttonNumber==2)
    {
      setId("Email")
   
    }
    
    
   
  };

  const handleSubmit = async (event) => {
    if(selectedButton===null){
      alert("selecteaza ca cine vrei sa te loghezi")
    }
    //event.preventDefault();

    if(selectedButton==1) {
      event.preventDefault();
      
      const token = await handleLogin({ CNP, parola });
      variabila="CNP";
      if (token) {
        setToken(token);
      } else {
        console.log("Failed to login");
      }
    }
    if(selectedButton==2)
    {
      event.preventDefault();
      const token = await handleLogin_laborator({ email, parola });
      variabila="Email";
      console.log(token);
      if (token) {
        setToken(token);
      } else {
        console.log("Failed to login");
      }
    }
    
  };

  return (
    <LoginPageContainer>
      <LoginFormContainer>
        <LogoContainer>
          <LogoImage src={logo} alt="Logo" />
        </LogoContainer>
        <LoginFormTitle>Autentifica-te ca:</LoginFormTitle>
        <WrapperButton>
        <Button  pressed={selectedButton === 1} 
        onClick={() => handleClick(1)}>PACIENT</Button>
        <Button  pressed={selectedButton === 2} 
        onClick={() => handleClick(2)}>LABORATOR</Button>

        </WrapperButton>  
        {renderSmth(id)}   
        {/* <form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel>{id}</FormLabel>
            <FormInput
              value={CNP}
              onChange={(e) => setCNP(e.target.value) }
              placeholder={id}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Parola</FormLabel>
            <FormInput
              type="parola"
              value={parola}
              onChange={(e) => setParola(e.target.value)}
              placeholder="Parola"
              required
            />
          </FormGroup>
          <LoginButton type="submit" >Login</LoginButton>
        </form> */}
      </LoginFormContainer>
    </LoginPageContainer>
  );
};

Login.propTypes = {
setToken: PropTypes.func.isRequired,
};

export  {Login,variabila};
