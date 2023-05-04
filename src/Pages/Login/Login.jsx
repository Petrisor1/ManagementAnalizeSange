import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../Images/Logo_Login.png'; // Import your logo image here
import backgroundImg from '../../Images/blood.jpg'; // Import your background image here

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

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with values:', { email, password });
    // Implement your form submission logic here
  };

  return (
    <LoginPageContainer>
      <LoginFormContainer>
        <LogoContainer>
          <LogoImage src={logo} alt="Logo" />
        </LogoContainer>
        <LoginFormTitle>Login</LoginFormTitle>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel>Email:</FormLabel>
            <FormInput
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Password:</FormLabel>
            <FormInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </FormGroup>
          <LoginButton type="submit">Login</LoginButton>
        </form>
      </LoginFormContainer>
    </LoginPageContainer>
  );
};

export default Login;
