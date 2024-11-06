import React from 'react';
import { useNavigate } from 'react-router-dom';  // Importa o hook useNavigate
import logo from '../../assets/logo-dio.png';

import { Button } from '../Button';

import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight, UserPicture } from './styles';

const Header = ({ autenticado }) => {
  const navigate = useNavigate();  // Inicializa o hook useNavigate

  const handleLogin = () => {
    navigate('/login');  // Redireciona para a página de login
  };
  const handleSignup = () => {
    navigate('/signup');  // Redireciona para a página de login
  };

  return (
    <Wrapper>
      <Container>
          <Row>
            <img src={logo} alt="Logo da dio" />
            {autenticado ? (
              <>
               <BuscarInputContainer>
                <Input placeholder='Buscar...' />
               </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ) : null}
          </Row>
          <Row>
              {autenticado ? (
                <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4" />
              ) : (
              <>
                <MenuRight href="/">Home</MenuRight>
                <Button title="Entrar" onClick={handleLogin} /> 
                <Button title="Cadastrar" onClick={handleSignup} /> 
              </>)}
          </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
